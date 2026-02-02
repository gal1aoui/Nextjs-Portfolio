"use client";

import { motion } from "framer-motion";

import { RandomizedTextEffect } from "@/components/randomized-text";
import { blogs } from "@/components/blogs/blogs-data";
import BlogCard from "@/components/blogs/blog-card";

export default function BlogsPage() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            <RandomizedTextEffect text="Blog & Insights" />
          </h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="mt-4 text-default-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Stories, experiences, and lessons learned throughout my journey in
            software development and project management.
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 gap-6"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </motion.div>

        {blogs.length === 0 && (
          <motion.div
            animate={{ opacity: 1 }}
            className="text-center py-12"
            initial={{ opacity: 0 }}
          >
            <p className="text-default-400">No blog posts yet. Stay tuned!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
