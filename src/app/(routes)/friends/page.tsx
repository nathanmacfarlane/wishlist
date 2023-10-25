import prisma from "@/lib/db";
import { PageTitle } from "../../pageTitle";

const getFriends = async () => {
  return prisma.user.findMany();
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
