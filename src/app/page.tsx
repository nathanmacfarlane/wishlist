import { redirect } from "next/navigation";

export default function Home() {
  // return <main>Home Page</main>;
  redirect("/my-list");
}
