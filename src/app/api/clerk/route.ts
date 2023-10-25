import prisma from "@/lib/db";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || ``;

export async function POST(request: Request) {
  let payload: WebhookEvent | null = null;
  try {
    payload = await validateRequest(request);
  } catch (error) {
    return new Response("Invalid headers", { status: 500 });
  }

  if (payload.type !== "user.updated" && payload.type !== "user.created") {
    // return 500 if the event is not user.updated or user.created
    return new Response(`Invalid event type ${payload.type}`, { status: 500 });
  }
  const {
    id,
    image_url,
    first_name,
    last_name,
    created_at,
    updated_at,
    primary_email_address_id,
    email_addresses,
  } = payload.data;
  const primaryEmail = email_addresses.find(
    (email) => email.id === primary_email_address_id
  );

  if (!primaryEmail) {
    return new Response(`No primary email found`, { status: 500 });
  }

  const user = await prisma.user.upsert({
    where: { id },
    update: {
      imageUrl: image_url,
      firstName: first_name,
      lastName: last_name,
      createdAt: new Date(created_at),
      updatedAt: new Date(updated_at),
      email: primaryEmail.email_address,
    },
    create: {
      id,
      imageUrl: image_url,
      firstName: first_name,
      lastName: last_name,
      createdAt: new Date(created_at),
      updatedAt: new Date(updated_at),
      email: primaryEmail.email_address,
    },
  });

  return Response.json({
    message: `Handled Clerk Event for User: ${JSON.stringify(user)}`,
  });
}

async function validateRequest(request: Request) {
  const payloadString = await request.text();
  const headerPayload = headers();

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };

  const wh = new Webhook(webhookSecret);
  return wh.verify(payloadString, svixHeaders) as WebhookEvent;
}
