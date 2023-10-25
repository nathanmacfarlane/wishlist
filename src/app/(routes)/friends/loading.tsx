import { PageTitle } from "@/app/pageTitle";
import { HStack } from "@/components/ui/hstack";
import { Skeleton } from "@/components/ui/skeleton";
import { VStack } from "@/components/ui/vstack";

export default function Loading() {
  return (
    <VStack size="sm">
      <HStack justify="between" className="items-center">
        <PageTitle title="Friends" />
        <Skeleton className="w-[138px] h-[40px] rounded-sm" />
      </HStack>
      <Skeleton className="w-[500px] h-[24px] rounded-sm" />
      <Skeleton className="w-[500px] h-[24px] rounded-sm" />
      <Skeleton className="w-[500px] h-[24px] rounded-sm" />
    </VStack>
  );
}
