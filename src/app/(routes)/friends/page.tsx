import prisma from "@/lib/db";
import { PageTitle } from "../../pageTitle";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

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
    <VStack size="sm">
      <HStack justify="between" className="items-center">
        <PageTitle title="Friends" />
        <Button variant="secondary" rightIcon={SearchIcon}>
          Find Friends
        </Button>
      </HStack>

      {/* TODO - filter by friends */}
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.firstName}</li>
        ))}
      </ul>
    </VStack>
  );
};

export default FriendsPage;
