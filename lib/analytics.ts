import { track } from "@vercel/analytics";
import { sendGAEvent } from "@next/third-parties/google";

import { getMixpanel } from "./mixpanel-client";

/**
 * Analytics event tracking utility.
 * Every event fans out to Vercel Analytics plus — when configured via env —
 * Google Analytics 4 (NEXT_PUBLIC_GA_ID) and Mixpanel
 * (NEXT_PUBLIC_MIXPANEL_TOKEN).
 */

export interface AnalyticsEventProps {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export const trackAnalyticsEvent = ({
  category,
  action,
  label,
  value,
}: AnalyticsEventProps) => {
  const eventName = `${category}_${action}`;
  const properties = {
    category,
    action,
    ...(label && { label }),
    ...(value !== undefined && { value }),
  };

  track(eventName, properties);

  if (process.env.NEXT_PUBLIC_GA_ID) {
    sendGAEvent("event", eventName, properties);
  }

  void getMixpanel()?.then((mixpanel) => {
    mixpanel?.track(eventName, properties);
  });
};

// ============================================
// NAVIGATION EVENTS
// ============================================

export const trackLanguageChange = (language: string) => {
  trackAnalyticsEvent({
    category: "navigation",
    action: "language_changed",
    label: language,
  });
};

export const trackMobileMenuToggle = (opened: boolean) => {
  trackAnalyticsEvent({
    category: "navigation",
    action: "mobile_menu_toggle",
    label: opened ? "opened" : "closed",
  });
};

// ============================================
// EXPERIENCE MODE EVENTS
// ============================================

export const trackExperienceGateShown = () => {
  trackAnalyticsEvent({
    category: "experience_mode",
    action: "gate_shown",
    value: 1,
  });
};

export const trackExperienceGateChoice = (mode: "classic" | "modern") => {
  trackAnalyticsEvent({
    category: "experience_mode",
    action: "gate_choice",
    label: mode,
  });
};

export const trackExperienceModeSwitched = (
  from: "classic" | "modern",
  to: "classic" | "modern",
  placement: string,
) => {
  trackAnalyticsEvent({
    category: "experience_mode",
    action: "mode_switched",
    label: `${from}_to_${to}_${placement}`,
  });
};

// ============================================
// MODERN EXPERIENCE EVENTS
// ============================================

export const trackModernSectionViewed = (sectionId: string) => {
  trackAnalyticsEvent({
    category: "modern",
    action: "section_viewed",
    label: sectionId,
  });
};

export const trackModernProjectOpened = (
  projectId: string,
  projectTitle: string,
) => {
  trackAnalyticsEvent({
    category: "modern",
    action: "project_opened",
    label: projectTitle,
  });
};

export const trackModernProjectLinkClick = (
  projectId: string,
  kind: "live" | "repo",
) => {
  trackAnalyticsEvent({
    category: "modern",
    action: "project_link_clicked",
    label: `${projectId}_${kind}`,
  });
};

export const trackModernContactCtaClick = (source: "cta" | "ai") => {
  trackAnalyticsEvent({
    category: "modern",
    action: "contact_cta_clicked",
    label: source,
  });
};

export const trackModernPreloaderCompleted = (skipped: boolean) => {
  trackAnalyticsEvent({
    category: "modern",
    action: "preloader_completed",
    label: skipped ? "skipped" : "played",
  });
};

export const trackModernBlogTeaserClick = (blogId: string) => {
  trackAnalyticsEvent({
    category: "modern",
    action: "blog_teaser_clicked",
    label: blogId,
  });
};

// ============================================
// PROJECT EVENTS
// ============================================

export const trackProjectCardClick = (
  projectId: string,
  projectTitle: string,
) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "card_clicked",
    label: projectTitle,
    value: 1,
  });
};

export const trackProjectCardHover = (
  projectId: string,
  projectTitle: string,
) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "card_hovered",
    label: projectTitle,
  });
};

export const trackProjectDrawerOpened = (
  projectId: string,
  projectTitle: string,
  category: string,
) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "drawer_opened",
    label: `${projectTitle} (${category})`,
  });
};

export const trackProjectDrawerClosed = (projectId: string) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "drawer_closed",
    label: projectId,
  });
};

export const trackProjectGithubClick = (
  projectId: string,
  projectTitle: string,
  url: string,
) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "github_link_clicked",
    label: `${projectTitle} - ${url}`,
  });
};

export const trackProjectLiveClick = (
  projectId: string,
  projectTitle: string,
  url: string,
) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "live_link_clicked",
    label: `${projectTitle} - ${url}`,
  });
};

export const trackProjectCategoryFilter = (category: string) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "category_filtered",
    label: category,
  });
};

export const trackProjectsPageViewed = () => {
  trackAnalyticsEvent({
    category: "projects",
    action: "page_viewed",
    value: 1,
  });
};

export const trackGithubContributionsViewed = (username: string) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "github_contributions_viewed",
    label: username,
  });
};

// ============================================
// CONTACT EVENTS
// ============================================

export const trackContactFormOpened = () => {
  trackAnalyticsEvent({
    category: "contact",
    action: "form_opened",
    value: 1,
  });
};

export const trackContactFormStep = (step: string, completed: boolean) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "form_step_completed",
    label: step,
    value: completed ? 1 : 0,
  });
};

export const trackEmailSent = (
  success: boolean,
  recipient: string,
  submissionTime?: number,
) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "email_sent",
    label: `${success ? "success" : "failed"} - ${recipient} - ${submissionTime ? `time_${submissionTime}ms` : ""}`,
    value: success ? 1 : 0,
  });
};

export const trackQADrawerOpened = () => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_drawer_opened",
    value: 1,
  });
};

export const trackQAQuestionAsked = (
  questionId: string,
  questionText: string,
) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_question_asked",
    label: questionText.substring(0, 50),
  });
};

export const trackQAAiMessageSent = (messageLength: number) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_ai_message_sent",
    value: messageLength,
  });
};

export const trackQAAiMessageCompleted = (durationMs: number) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_ai_message_completed",
    value: Math.round(durationMs),
  });
};

export const trackQAAiMessageErrored = (
  reason: "rate_limited" | "upstream" | "network" | "unavailable",
) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_ai_message_errored",
    label: reason,
  });
};

export const trackQAAiStopped = () => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_ai_stopped",
    value: 1,
  });
};

export const trackQAAiFallbackShown = () => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_ai_fallback_shown",
    value: 1,
  });
};

// ============================================
// RESUME/PDF EVENTS
// ============================================

export const trackResumePdfOpened = () => {
  trackAnalyticsEvent({
    category: "resume",
    action: "pdf_opened",
    value: 1,
  });
};

export const trackResumePdfPageChanged = (
  fromPage: number,
  toPage: number,
  totalPages: number,
) => {
  trackAnalyticsEvent({
    category: "resume",
    action: "pdf_page_changed",
    label: `${fromPage}-${toPage} of ${totalPages}`,
    value: toPage,
  });
};

export const trackResumePdfZoom = (
  action: "in" | "out" | "reset",
  scale: number,
) => {
  trackAnalyticsEvent({
    category: "resume",
    action: `pdf_zoom_${action}`,
    label: `scale_${scale.toFixed(2)}`,
    value: Math.round(scale * 100),
  });
};

export const trackResumePdfDownloaded = () => {
  trackAnalyticsEvent({
    category: "resume",
    action: "pdf_downloaded",
    value: 1,
  });
};

export const trackResumePdfTimeSpent = (timeInSeconds: number) => {
  trackAnalyticsEvent({
    category: "resume",
    action: "pdf_time_spent",
    label: `${timeInSeconds}s`,
    value: timeInSeconds,
  });
};

// ============================================
// GAME EVENTS
// ============================================

export const trackGameOpened = () => {
  trackAnalyticsEvent({
    category: "game",
    action: "game_opened",
    value: 1,
  });
};

// ============================================
// BLOG EVENTS
// ============================================

export const trackBlogPageViewed = () => {
  trackAnalyticsEvent({
    category: "blog",
    action: "page_viewed",
    value: 1,
  });
};

export const trackBlogArticleOpened = (blogId: string, blogTitle: string) => {
  trackAnalyticsEvent({
    category: "blog",
    action: "article_opened",
    label: blogTitle,
    value: 1,
  });
};

export const trackBlogReadingTimeTracked = (
  blogId: string,
  timeInSeconds: number,
) => {
  trackAnalyticsEvent({
    category: "blog",
    action: "reading_time_tracked",
    label: blogId,
    value: timeInSeconds,
  });
};

export const trackBlogSpeechStarted = (blogId: string) => {
  trackAnalyticsEvent({
    category: "blog",
    action: "speech_started",
    label: blogId,
    value: 1,
  });
};

// ============================================
// UI THEME & SOCIAL EVENTS
// ============================================

export const trackThemeToggle = (theme: "light" | "dark") => {
  trackAnalyticsEvent({
    category: "ui",
    action: "theme_toggled",
    label: theme,
    value: theme === "dark" ? 1 : 0,
  });
};

export const trackSocialLinkClicked = (platform: string, url: string) => {
  trackAnalyticsEvent({
    category: "ui",
    action: "social_link_clicked",
    label: `${platform} - ${url}`,
  });
};

export const trackSkillsCategoryViewed = (categoryName: string) => {
  trackAnalyticsEvent({
    category: "skills",
    action: "category_viewed",
    label: categoryName,
    value: 1,
  });
};

// ============================================
// EXPERIENCE EVENTS
// ============================================

export const trackExperiencePageViewed = () => {
  trackAnalyticsEvent({
    category: "experience",
    action: "page_viewed",
    value: 1,
  });
};
