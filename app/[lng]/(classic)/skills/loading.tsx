import { Skeleton } from "@heroui/skeleton";

export default function SkillsLoading() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-10 flex flex-col items-center gap-4">
        <Skeleton className="h-10 w-64 rounded-lg" />
        <Skeleton className="h-5 w-full max-w-2xl rounded-lg" />
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="shrink-0 space-y-2 md:w-64">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} className="h-12 w-full rounded-xl" />
          ))}
        </div>

        <div className="flex-1 space-y-6">
          <Skeleton className="h-8 w-48 rounded-lg" />
          <Skeleton className="h-5 w-full max-w-lg rounded-lg" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-32 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
