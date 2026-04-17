"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";

import {
  chunkText,
  getPreferredVoice,
  getReadableContent,
} from "./speech-utils";

import { PauseIcon, PlayIcon, StopIcon } from "@/components/icons";

export default function BlogSpeechControls({ content }: { content: string }) {
  const [speechSupported, setSpeechSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const chunkIndexRef = useRef(0);
  const chunksRef = useRef<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const availableVoices = synth.getVoices();

      if (availableVoices.length > 0) {
        setVoices(availableVoices);
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
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    synth.speak(utterance);
  };

  const handlePlay = () => {
    if (!speechSupported || voices.length === 0) return;

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
    chunksRef.current = chunkText(getReadableContent(content));
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

  if (!speechSupported) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <Tooltip
        content={isSpeaking ? "Pause" : isPaused ? "Resume" : "Listen to Story"}
      >
        <Button
          isIconOnly
          color={isSpeaking ? "warning" : "primary"}
          variant="flat"
          onPress={handlePlay}
        >
          {isSpeaking ? <PauseIcon size={18} /> : <PlayIcon size={18} />}
        </Button>
      </Tooltip>

      {isSpeaking || isPaused ? (
        <Tooltip content="Stop">
          <Button isIconOnly color="danger" variant="flat" onPress={handleStop}>
            <StopIcon size={18} />
          </Button>
        </Tooltip>
      ) : null}
    </div>
  );
}
