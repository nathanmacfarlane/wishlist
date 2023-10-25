import prisma from "@/lib/db";
import { PageTitle } from "../../pageTitle";

type Friend = {
  id: string;
  firstName: string | null;
  lastName: string | null;
};

const getFriends = async (): Promise<Friend[]> => {
  return prisma.user.findMany({
    select: { id: true, firstName: true, lastName: true },
  });
};

const FriendsPage = async () => {
  const friends = await getFriends();

  return (
    <div>
      <PageTitle title="Friends" />

      {/* TODO - filter by friends */}
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsPage;
