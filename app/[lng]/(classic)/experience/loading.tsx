import { Skeleton } from "@heroui/skeleton";

export default function ExperienceLoading() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <div className="mb-12 flex flex-col items-center gap-4">
        <Skeleton className="h-10 w-72 rounded-lg" />
        <Skeleton className="h-5 w-full max-w-2xl rounded-lg" />
      </div>

      <div className="space-y-16">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
          >
            <div className="w-full space-y-3 rounded-2xl border border-default-200/50 p-6 md:w-[45%]">
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-28 rounded-full" />
              </div>
              <Skeleton className="h-6 w-2/3 rounded-lg" />
              <Skeleton className="h-4 w-1/2 rounded-lg" />
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
