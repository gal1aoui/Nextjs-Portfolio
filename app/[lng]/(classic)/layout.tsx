import { ReactNode } from "react";

import ExperienceGate from "@/components/experience-mode/experience-gate";
import { Navbar } from "@/components/navbar";
import RouteProgress from "@/components/route-progress";

export default function ClassicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteProgress />
      <Navbar />
      <main className="p-0 md:px-4 md:pt-6">{children}</main>
      <ExperienceGate />
    </>
  );
}
