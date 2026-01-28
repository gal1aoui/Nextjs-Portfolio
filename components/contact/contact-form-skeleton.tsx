import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

export default function ContactFormSkeleton() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      {/* Copy input skeleton */}
      <Skeleton className="rounded-lg w-full">
        <div className="h-10 rounded-lg bg-default-200" />
      </Skeleton>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* Calendar skeleton */}
        <div className="flex-none mx-auto">
          <Card className="p-4 w-[280px]">
            {/* Month header */}
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-24 h-5 rounded-lg" />
              <Skeleton className="w-6 h-6 rounded-full" />
            </div>
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className="w-8 h-4 rounded mx-auto" />
              ))}
            </div>
            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }).map((_, i) => (
                <Skeleton key={i} className="w-8 h-8 rounded-full mx-auto" />
              ))}
            </div>
          </Card>
        </div>

        {/* Form inputs skeleton */}
        <div className="grow flex flex-col gap-4">
          {/* Time input */}
          <Skeleton className="rounded-xl w-full">
            <div className="h-14 rounded-xl bg-default-200" />
          </Skeleton>
          {/* Name input */}
          <Skeleton className="rounded-xl w-full">
            <div className="h-14 rounded-xl bg-default-200" />
          </Skeleton>
          {/* Email input */}
          <Skeleton className="rounded-xl w-full">
            <div className="h-14 rounded-xl bg-default-200" />
          </Skeleton>
          {/* Subject input */}
          <Skeleton className="rounded-xl w-full">
            <div className="h-14 rounded-xl bg-default-200" />
          </Skeleton>
        </div>
      </div>

      {/* Footer button skeleton */}
      <div className="w-full flex justify-end pt-2">
        <Skeleton className="rounded-full w-28">
          <div className="h-10 rounded-full bg-default-300" />
        </Skeleton>
      </div>
    </div>
  );
}
