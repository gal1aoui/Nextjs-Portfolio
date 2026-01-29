/**
 * Splits text into smaller chunks for speech synthesis.
 * This helps avoid issues with long text in speechSynthesis API.
 */
export const chunkText = (text: string, chunkSize = 180): string[] => {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + sentence).length > chunkSize) {
      if (current) chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }

  if (current) chunks.push(current.trim());
  return chunks;
};

/**
 * Extracts readable content from blog content.
 * Filters out notes (bold headers) and bullet points for cleaner audio.
 */
export const getReadableContent = (content: string): string => {
  return content
    .split("\n\n")
    .filter(
      (p) =>
        !(p.startsWith("**") && p.includes(":**")) && !p.startsWith("•")
    )
    .join(". ");
};

/**
 * Finds the best English voice for speech synthesis.
 * Prefers female voices for better listening experience.
 */
export const getPreferredVoice = (
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null => {
  return (
    voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        /female|woman|zira|emma|susan|aria|google uk english female/i.test(
          v.name
        )
    ) ||
    voices.find((v) => v.lang.startsWith("en")) ||
    null
  );
};
