"use client";

import { Link } from "@heroui/link";

import ExperienceModeToggle from "@/components/experience-mode/experience-mode-toggle";
import { GithubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/client";
import { trackSocialLinkClicked } from "@/lib/analytics";

import { useLenis } from "../hooks/use-lenis";

export default function ModernFooter() {
  const { t: tModern } = useTranslation("modern");
  const lenis = useLenis();

  const handleBackToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      key: "linkedin",
      href: siteConfig.links.linkedin,
      label: "LinkedIn",
      icon: <LinkedInIcon size={22} />,
    },
    {
      key: "github",
      href: siteConfig.links.github,
      label: "GitHub",
      icon: <GithubIcon size={22} />,
    },
    {
      key: "medium",
      href: siteConfig.links.medium,
      label: "Medium",
      icon: <MediumIcon size={22} />,
    },
  ];

  return (
    <footer className="border-t border-default-200/40 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-default-500">
          © {new Date().getFullYear()} · {tModern("footer.builtWith")}
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <Link
              key={social.key}
              isExternal
              aria-label={social.label}
              color="foreground"
              href={social.href}
              onClick={() => trackSocialLinkClicked(social.key, social.href)}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ExperienceModeToggle placement="modern-footer" />
          <button
            className="text-xs uppercase tracking-[0.25em] text-default-400 transition-colors hover:text-foreground"
            type="button"
            onClick={handleBackToTop}
          >
            {tModern("footer.backToTop")} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
