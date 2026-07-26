import { ReactNode } from "react";

import ExperienceGate from "@/components/experience-mode/experience-gate";
import { Navbar } from "@/components/navbar";
import RouteProgress from "@/components/route-progress";

// Runs before the classic shell is parsed: on a first visit to the home page
// (no experience-mode cookie) it blanks the shell via a <html> attribute so
// the page doesn't flash before the experience gate mounts. The gate removes
// the attribute once its overlay is painted; a timeout is the safety net if
// hydration never happens. No-JS visitors and crawlers never run this, so
// they always get the plain classic page.
const gateBootScript = `(function(){try{var p=location.pathname;if(!/^\\/(en|fr)\\/?$/.test(p))return;if(document.cookie.split("; ").some(function(c){return c.indexOf("experience-mode=")===0}))return;var d=document.documentElement;d.setAttribute("data-gate-pending","");setTimeout(function(){d.removeAttribute("data-gate-pending")},2500)}catch(e){}})();`;

export default function ClassicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: gateBootScript }} />
      <div data-gate-blank>
        <RouteProgress />
        <Navbar />
        <main className="p-0 md:px-4 md:pt-6">{children}</main>
      </div>
      <ExperienceGate />
    </>
  );
}
