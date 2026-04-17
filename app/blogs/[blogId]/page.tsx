import NextLink from "next/link";
import { notFound } from "next/navigation";

import BlogSpeechControls from "@/components/blogs/blog-speech-controls";
import { blogs, getBlogById } from "@/components/blogs/blogs-data";
import { ArrowLeftIcon } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
}

type BlogDetailPageProps = {
  params: Promise<{
    blogId: string;
  }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { blogId } = await params;
  const blog = getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content.split("\n\n");

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-between mb-6 gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-sm"
          >
            <NextLink
              className="text-default-500 hover:text-primary transition-colors"
              href="/blogs"
            >
              Blogs
            </NextLink>
            <span className="text-default-400 mx-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-foreground font-medium truncate max-w-[250px] sm:max-w-none">
              {blog.title}
            </span>
          </nav>

          <BlogSpeechControls content={blog.content} />
        </div>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {blog.part}
              </span>
              {blog.readingTime ? (
                <span className="inline-flex items-center rounded-full bg-default-100 px-3 py-1 text-xs font-medium text-default-600">
                  {blog.readingTime}
                </span>
              ) : null}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              {blog.title}
            </h1>

            <p className="text-xl text-default-500 mb-6">{blog.subtitle}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
                  {blog.author
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium">{blog.author}</p>
                  {blog.publishedAt ? (
                    <p className="text-sm text-default-400">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </header>

          <div className="my-8 h-px bg-divider" />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {paragraphs.map((paragraph, index) => {
              const isBold =
                paragraph.startsWith("**") && paragraph.includes(":**");

              if (isBold) {
                const parts = paragraph.split(":**");
                const title = parts[0].replace(/\*\*/g, "");
                const content = parts.slice(1).join(":**");

                return (
                  <div
                    key={index}
                    className="my-6 p-4 bg-default-100/50 rounded-xl border border-default-200/50"
                  >
                    <p className="font-bold text-primary mb-2">{title}</p>
                    <p className="text-default-600 leading-relaxed">
                      {content}
                    </p>
                  </div>
                );
              }

              if (paragraph.startsWith("â€¢")) {
                const items = paragraph
                  .split("\n")
                  .filter((item) => item.trim());

                return (
                  <ul key={index} className="my-4 space-y-2 pl-4">
                    {items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-default-600 leading-relaxed"
                      >
                        {item.replace("â€¢", "").trim()}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={index}
                  className="text-default-600 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="my-8 h-px bg-divider" />

          <div className="flex justify-center">
            <NextLink
              className="inline-flex items-center gap-2 rounded-full border border-default-200 px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              href="/blogs"
            >
              <ArrowLeftIcon size={16} />
              Back to All Posts
            </NextLink>
          </div>
        </article>
      </div>
    </section>
  );
}
