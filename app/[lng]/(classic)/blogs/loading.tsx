import { Skeleton } from "@heroui/skeleton";

export default function BlogsLoading() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto max-w-4xl space-y-6 px-4">
        <div className="mb-10 flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-64 rounded-lg" />
          <Skeleton className="h-5 w-full max-w-xl rounded-lg" />
        </div>

        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="space-y-3 rounded-2xl border border-default-200/50 p-6"
          >
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <Skeleton className="h-7 w-3/4 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3 rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}
