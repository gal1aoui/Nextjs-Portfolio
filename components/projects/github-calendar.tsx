"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Card, CardBody } from "@heroui/card";
import { GitHubCalendar } from 'react-github-calendar';
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="border border-default-200/50 bg-background/60 w-fit overflow-auto">
        <CardBody className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg">
                <GithubIcon className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">GitHub Contributions</h3>
                <Link
                  href={`https://github.com/${username}`}
                  isExternal
                  className="text-sm text-default-500 hover:text-primary"
                >
                  @{username}
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <GitHubCalendar
              username={username}
              colorScheme={colorScheme}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              style={{
                width: "100%",
              }}
            />
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
