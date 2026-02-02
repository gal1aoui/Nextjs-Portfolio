import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

export default function PdfRendererSkeleton() {
  return (
    <div className="w-2xl mx-auto shadow-md">
      <Card className="w-full flex flex-col gap-6 p-4" radius="lg">
        <Skeleton className="rounded-lg w-1/2 mx-auto">
          <div className="h-4 rounded-lg bg-default-300 " />
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-3 rounded-lg bg-default-300 w-[70%]" />
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-40 rounded-lg bg-default-300 w-[100%]" />
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-40 rounded-lg bg-default-300 w-[100%]" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-40 rounded-lg bg-default-300 w-[100%]" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg mx-auto">
            <div className="h-3 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg mx-auto">
            <div className="h-3 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
        </div>
      </Card>
    </div>
  );
}
