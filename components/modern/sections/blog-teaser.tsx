"use client";

import NextLink from "next/link";
import { useRef } from "react";
import { Chip } from "@heroui/chip";

import { getBlogs } from "@/components/blogs/blogs-data";
import { useTranslation } from "@/i18n/client";
import { localizePath } from "@/i18n/routing";
import type { AppLanguage } from "@/i18n/settings";
import { trackModernBlogTeaserClick } from "@/lib/analytics";

import { ANY_MOTION_MEDIA, gsap, useGSAP } from "../gsap/gsap-config";

export default function BlogTeaser({ lng }: { lng: AppLanguage }) {
  const { t: tModern } = useTranslation("modern");
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [blog] = getBlogs(lng);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        if (!cardRef.current) return;

        gsap.from(cardRef.current, {
          clipPath: "inset(8% 4% 8% 4% round 24px)",
          y: 40,
          opacity: 0.4,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  if (!blog) return null;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="modern-blog-title"
      className="px-6 py-24 sm:px-10 sm:py-32"
      id="blog"
    >
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-10 text-sm font-medium uppercase tracking-[0.35em] text-default-500"
          id="modern-blog-title"
        >
          {tModern("blog.heading")}
        </p>

        <div
          ref={cardRef}
          className="rounded-3xl border border-default-200/60 bg-default-50/40 p-8 sm:p-12"
        >
          <div className="mb-4 flex flex-wrap gap-2">
            <Chip color="primary" size="sm" variant="flat">
              {blog.part}
            </Chip>
            {blog.readingTime ? (
              <Chip size="sm" variant="flat">
                {blog.readingTime}
              </Chip>
            ) : null}
          </div>

          <h3 className="font-display text-2xl font-bold sm:text-4xl">
            {blog.title}
          </h3>
          <p className="mt-3 max-w-2xl text-default-500">{blog.subtitle}</p>

          <NextLink
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-default-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            data-cursor="hover"
            href={localizePath(lng, `/blogs/${blog.id}`)}
            onClick={() => trackModernBlogTeaserClick(blog.id)}
          >
            {tModern("blog.readPost")}
            <span aria-hidden>→</span>
          </NextLink>
        </div>
      </div>
    </section>
  );
}
