import NotFoundContent from "@/components/not-found-content";

// Localized 404 rendered inside the [lng] layout (providers + theme).
// The root app/not-found.tsx remains as the last-resort fallback.
export default function LocaleNotFound() {
  return <NotFoundContent />;
}
