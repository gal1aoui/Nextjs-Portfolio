import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

export default function ContactConfirmSkeleton() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="w-full flex items-center gap-2 p-2 border-b border-default-200">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="w-8 h-8 rounded-lg" />
        ))}
        <div className="w-px h-6 bg-default-200 mx-1" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i + 6} className="w-8 h-8 rounded-lg" />
        ))}
      </div>

      <Card className="w-full p-4">
        <div className="space-y-3">
          {/* Greeting line */}
          <Skeleton className="w-1/4 rounded-lg">
            <div className="h-4 rounded-lg bg-default-300" />
          </Skeleton>

          <div className="space-y-2 pt-2">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-11/12 rounded-lg">
              <div className="h-3 rounded-lg bg-default-200" />
            </Skeleton>
          </div>

          <Skeleton className="w-1/3 rounded-lg pt-2">
            <div className="h-4 rounded-lg bg-default-300" />
          </Skeleton>

          <div className="space-y-2 pl-4">
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-1/3 rounded-lg">
              <div className="h-3 rounded-lg bg-default-200" />
            </Skeleton>
          </div>

          <div className="space-y-2 pt-2">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 rounded-lg bg-default-200" />
            </Skeleton>
          </div>

          <div className="space-y-2 pt-4">
            <Skeleton className="w-1/4 rounded-lg">
              <div className="h-4 rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="w-1/3 rounded-lg">
              <div className="h-3 rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </div>
      </Card>

      <div className="w-full flex justify-end pt-2">
        <Skeleton className="rounded-full w-24">
          <div className="h-10 rounded-full bg-default-300" />
        </Skeleton>
      </div>
    </div>
  );
}
