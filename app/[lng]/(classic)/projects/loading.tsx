import { Skeleton } from "@heroui/skeleton";

export default function ProjectsLoading() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-72 rounded-lg" />
          <Skeleton className="h-5 w-full max-w-2xl rounded-lg" />
        </div>

        <Skeleton className="mx-auto my-6 h-48 w-full max-w-3xl rounded-2xl" />

        <div className="mb-8 flex justify-center">
          <Skeleton className="h-10 w-96 max-w-full rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-default-200/50"
            >
              <Skeleton className="aspect-video w-full" />
              <div className="space-y-3 p-5">
                <Skeleton className="h-6 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-2/3 rounded-lg" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
