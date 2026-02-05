"use client";

import { useParams, notFound } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { getBlogById } from "@/components/blogs/blogs-data";
import {
  chunkText,
  getReadableContent,
  getPreferredVoice,
} from "@/components/blogs/speech-utils";
import {
  ArrowLeftIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
} from "@/components/icons";

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params.blogId as string;
  const blog = getBlogById(blogId);

  const [speechSupported, setSpeechSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const chunkIndexRef = useRef(0);
  const chunksRef = useRef<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const v = synth.getVoices();

      if (v.length > 0) {
        setVoices(v);
        setSpeechSupported(true);
      }
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;

    return () => {
      synth.onvoiceschanged = null;
      synth.cancel();
    };
  }, []);

  const speakNextChunk = () => {
    const synth = window.speechSynthesis;

    if (chunkIndexRef.current >= chunksRef.current.length) {
      setIsSpeaking(false);
      setIsPaused(false);

      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      chunksRef.current[chunkIndexRef.current],
    );

    const preferredVoice = getPreferredVoice(voices);

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    utterance.volume = 0.8;
    utterance.rate = 0.85;
    utterance.pitch = 1.05;
    utterance.lang = "en-US";

    utterance.onend = () => {
      chunkIndexRef.current += 1;
      speakNextChunk();
    };

    utterance.onerror = (_) => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    synth.speak(utterance);
  };

  const handlePlay = () => {
    if (!speechSupported || !blog || voices.length === 0) return;

    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
      setIsPaused(false);
      setIsSpeaking(true);

      return;
    }

    if (isSpeaking) {
      synth.pause();
      setIsPaused(true);
      setIsSpeaking(false);

      return;
    }

    synth.cancel();

    const text = getReadableContent(blog.content);

    chunksRef.current = chunkText(text);
    chunkIndexRef.current = 0;

    setIsSpeaking(true);
    speakNextChunk();
  };

  const handleStop = () => {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    chunkIndexRef.current = 0;
  };

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content.split("\n\n");

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm">
            <Link
              as={NextLink}
              className="text-default-500 hover:text-primary transition-colors"
              href="/blogs"
              size="sm"
              underline="hover"
            >
              Blogs
            </Link>
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

          {speechSupported && (
            <div className="flex items-center gap-3">
              <Tooltip
                content={
                  isSpeaking ? "Pause" : isPaused ? "Resume" : "Listen to Story"
                }
              >
                <Button
                  isIconOnly
                  color={isSpeaking ? "warning" : "primary"}
                  variant="flat"
                  onPress={handlePlay}
                >
                  {isSpeaking ? (
                    <PauseIcon size={18} />
                  ) : (
                    <PlayIcon size={18} />
                  )}
                </Button>
              </Tooltip>

              {(isSpeaking || isPaused) && (
                <Tooltip content="Stop">
                  <Button
                    isIconOnly
                    color="danger"
                    variant="flat"
                    onPress={handleStop}
                  >
                    <StopIcon size={18} />
                  </Button>
                </Tooltip>
              )}
            </div>
          )}
        </motion.div>

        <motion.article
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Chip color="primary" size="sm" variant="flat">
                {blog.part}
              </Chip>
              {blog.readingTime && (
                <Chip className="bg-default-100" size="sm" variant="flat">
                  {blog.readingTime}
                </Chip>
              )}
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
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium">{blog.author}</p>
                  {blog.publishedAt && (
                    <p className="text-sm text-default-400">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </header>

          <Divider className="my-8" />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {paragraphs.map((paragraph, index) => {
              const isBold =
                paragraph.startsWith("**") && paragraph.includes(":**");

              if (isBold) {
                const parts = paragraph.split(":**");
                const title = parts[0].replace(/\*\*/g, "");
                const content = parts.slice(1).join(":**");

                return (
                  <motion.div
                    key={index}
                    animate={{ opacity: 1, y: 0 }}
                    className="my-6 p-4 bg-default-100/50 rounded-xl border border-default-200/50"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                  >
                    <p className="font-bold text-primary mb-2">{title}</p>
                    <p className="text-default-600 leading-relaxed">
                      {content}
                    </p>
                  </motion.div>
                );
              }

              if (paragraph.startsWith("•")) {
                const items = paragraph
                  .split("\n")
                  .filter((item) => item.trim());

                return (
                  <motion.ul
                    key={index}
                    animate={{ opacity: 1, y: 0 }}
                    className="my-4 space-y-2 pl-4"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                  >
                    {items.map((item, i) => (
                      <li key={i} className="text-default-600 leading-relaxed">
                        {item.replace("•", "").trim()}
                      </li>
                    ))}
                  </motion.ul>
                );
              }

              return (
                <motion.p
                  key={index}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-default-600 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                >
                  {paragraph}
                </motion.p>
              );
            })}
          </div>

          <Divider className="my-8" />

          <motion.div
            animate={{ opacity: 1 }}
            className="flex justify-center"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              as={NextLink}
              href="/blogs"
              startContent={<ArrowLeftIcon size={16} />}
              variant="bordered"
            >
              Back to All Posts
            </Button>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
