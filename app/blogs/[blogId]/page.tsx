"use client";

import { useParams, notFound } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Slider } from "@heroui/slider";
import Link from "next/link";
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
  VolumeIcon,
} from "@/components/icons";

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params.blogId as string;
  const blog = getBlogById(blogId);

  const [speechSupported, setSpeechSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState(0.8);

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
      chunksRef.current[chunkIndexRef.current]
    );

    const preferredVoice = getPreferredVoice(voices);
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    utterance.volume = volume;
    utterance.rate = 0.85;
    utterance.pitch = 1.05;
    utterance.lang = "en-US";

    utterance.onend = () => {
      chunkIndexRef.current += 1;
      speakNextChunk();
    };

    utterance.onerror = (e) => {
      console.error("Speech error:", e.error);
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

  const handleVolumeChange = (value: number | number[]) => {
    const newVolume = Array.isArray(value) ? value[0] : value;
    setVolume(newVolume);
    if (utteranceRef.current) {
      utteranceRef.current.volume = newVolume;
    }
  };

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content.split("\n\n");

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <Button
            as={Link}
            href="/blogs"
            variant="light"
            className="-ml-2"
            startContent={<ArrowLeftIcon size={16} />}
          >
            Back to Blogs
          </Button>

          {speechSupported && (
            <div className="flex items-center gap-3">
              {(!isSpeaking || isPaused) && (
                <div className="flex items-center gap-2 min-w-[140px]">
                  <VolumeIcon size={18} className="text-default-500 shrink-0" />
                  <Slider
                    size="sm"
                    step={0.1}
                    maxValue={1}
                    minValue={0}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24"
                    aria-label="Volume"
                    classNames={{
                      track: "bg-default-200",
                      filler: "bg-gradient-to-r from-primary to-secondary",
                      thumb: "bg-primary shadow-md",
                    }}
                  />
                </div>
              )}

              <Tooltip
                content={
                  isSpeaking ? "Pause" : isPaused ? "Resume" : "Listen to Story"
                }
              >
                <Button
                  isIconOnly
                  variant="flat"
                  color={isSpeaking ? "warning" : "primary"}
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
                    variant="flat"
                    color="danger"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Chip size="sm" variant="flat" color="primary">
                {blog.part}
              </Chip>
              {blog.readingTime && (
                <Chip size="sm" variant="flat" className="bg-default-100">
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                    className="my-6 p-4 bg-default-100/50 rounded-xl border border-default-200/50"
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                    className="my-4 space-y-2 pl-4"
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                  className="text-default-600 leading-relaxed mb-6"
                >
                  {paragraph}
                </motion.p>
              );
            })}
          </div>

          <Divider className="my-8" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <Button
              as={Link}
              href="/blogs"
              variant="bordered"
              startContent={<ArrowLeftIcon size={16} />}
            >
              Back to All Posts
            </Button>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
