"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import Link from "next/link";
import { Blog } from "./types";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/blogs/${blog.id}`}>
        <Card
          isPressable
          className="group border border-default-200/50 bg-background/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full"
        >
          <CardBody className="p-6 gap-4">
            <div className="flex items-center gap-2">
              <Chip size="sm" variant="flat" color="primary">
                {blog.part}
              </Chip>
              {blog.readingTime && (
                <Chip size="sm" variant="flat" className="bg-default-100">
                  {blog.readingTime}
                </Chip>
              )}
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-default-500 text-sm line-clamp-2">
                {blog.subtitle}
              </p>
            </div>

            <p className="text-default-400 text-sm line-clamp-3">
              {blog.content.substring(0, 150)}...
            </p>
          </CardBody>

          <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                {blog.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span className="text-sm text-default-600">{blog.author}</span>
            </div>
            {blog.publishedAt && (
              <span className="text-xs text-default-400">
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
