"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Card, CardBody } from "@heroui/card";
import { GitHubCalendar } from "react-github-calendar";
import { Link } from "@heroui/link";

import { GithubIcon } from "../icons";

interface GithubContributionsProps {
  username: string;
}

export default function GithubContributions({
  username,
}: GithubContributionsProps) {
  const { theme } = useTheme();

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="w-full sm:w-fit overflow-x-auto mx-auto my-6"
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="border border-default-200/50 bg-background/60">
        <CardBody className="p-6">
          <div className="flex items-center justify-between mb-6">
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
          <GitHubCalendar
            blockMargin={4}
            blockSize={12}
            colorScheme={colorScheme}
            fontSize={14}
            style={{
              width: "100%",
            }}
            username={username}
          />
        </CardBody>
      </Card>
    </motion.div>
  );
}
