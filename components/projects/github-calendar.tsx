"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Card, CardBody } from "@heroui/card";
import { GitHubCalendar } from "react-github-calendar";
import { Link } from "@heroui/link";
import { useEffect, useRef, useState } from "react";

import { GithubIcon } from "../icons";

interface GithubContributionsProps {
  username: string;
}

export default function GithubContributions({
  username,
}: GithubContributionsProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // The calendar lives in its own horizontal scroller so it can never widen
  // the page, and stays scrolled to the end (the most recent months). The
  // ResizeObserver re-applies that once the async contribution data loads
  // and the calendar reaches its real width.
  useEffect(() => {
    if (!mounted) return;

    const scroller = scrollRef.current;

    if (!scroller) return;

    const scrollToEnd = () => {
      scroller.scrollLeft = scroller.scrollWidth;
    };

    scrollToEnd();

    const observer = new ResizeObserver(scrollToEnd);

    observer.observe(scroller);
    if (scroller.firstElementChild) {
      observer.observe(scroller.firstElementChild);
    }

    return () => observer.disconnect();
  }, [mounted]);

  const colorScheme = resolvedTheme === "light" ? "light" : "dark";

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="my-6 w-full"
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="w-full border border-default-200/50 bg-background/60">
        <CardBody className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg">
                <GithubIcon className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">GitHub Contributions</h3>
                <Link
                  isExternal
                  className="text-sm text-default-500 hover:text-primary"
                  href={`https://github.com/${username}`}
                >
                  @{username}
                </Link>
              </div>
            </div>
          </div>
          {mounted ? (
            <div ref={scrollRef} className="w-full overflow-x-auto pb-1">
              <div className="w-max">
                <GitHubCalendar
                  blockMargin={4}
                  blockSize={12}
                  colorScheme={colorScheme}
                  fontSize={14}
                  username={username}
                />
              </div>
            </div>
          ) : (
            <div aria-hidden className="h-[140px] w-full" />
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
