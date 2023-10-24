import { Button } from "@/components/ui/button";
import { PageTitle } from "./pageTitle";
import { VStack } from "@/components/ui/vstack";

export default function Home() {
  return (
    <main>
      <VStack size="lg">
        <PageTitle title="My Wishlist" />
        <Button>Click Me</Button>
      </VStack>
    </main>
  );
}
