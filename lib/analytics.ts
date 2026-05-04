import { track } from "@vercel/analytics";

/**
 * Analytics event tracking utility
 * Wraps Vercel Analytics with custom event naming conventions
 */

export interface AnalyticsEventProps {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

/**
 * Track a custom event with Vercel Analytics
 */
export const trackAnalyticsEvent = ({
  category,
  action,
  label,
  value,
}: AnalyticsEventProps) => {
  const eventName = `${category}_${action}`;
  
  track(eventName, {
    category,
    action,
    ...(label && { label }),
    ...(value !== undefined && { value }),
  });
};

// ============================================
// NAVIGATION EVENTS
// ============================================

export const trackNavigationPageView = (pageName: string) => {
  trackAnalyticsEvent({
    category: "navigation",
    action: "page_view",
    label: pageName,
  });
};

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
// PROJECT EVENTS
// ============================================

export const trackProjectCardClick = (projectId: string, projectTitle: string) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "card_clicked",
    label: projectTitle,
    value: 1,
  });
};

export const trackProjectCardHover = (projectId: string, projectTitle: string) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "card_hovered",
    label: projectTitle,
  });
};

export const trackProjectDrawerOpened = (
  projectId: string,
  projectTitle: string,
  category: string
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
  url: string
) => {
  trackAnalyticsEvent({
    category: "projects",
    action: "github_link_clicked",
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

export const trackContactFormStarted = () => {
  trackAnalyticsEvent({
    category: "contact",
    action: "form_started",
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

export const trackContactFormSubmitted = (
  submissionTime: number,
  hasMessage: boolean
) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "form_submitted",
    label: `time_${submissionTime}ms`,
    value: hasMessage ? 1 : 0,
  });
};

export const trackEmailSent = (success: boolean, recipient: string) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "email_sent",
    label: `${success ? "success" : "failed"} - ${recipient}`,
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

export const trackQAQuestionAsked = (questionId: string, questionText: string) => {
  trackAnalyticsEvent({
    category: "contact",
    action: "qa_question_asked",
    label: questionText.substring(0, 50),
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
  totalPages: number
) => {
  trackAnalyticsEvent({
    category: "resume",
    action: "pdf_page_changed",
    label: `${fromPage}-${toPage}`,
    value: toPage,
  });
};

export const trackResumePdfZoom = (action: "in" | "out" | "reset", scale: number) => {
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

export const trackGameStarted = () => {
  trackAnalyticsEvent({
    category: "game",
    action: "game_started",
    value: 1,
  });
};

export const trackGameWon = (score: number) => {
  trackAnalyticsEvent({
    category: "game",
    action: "game_won",
    label: `score_${score}`,
    value: score,
  });
};

export const trackGameClosed = (timePlayedSeconds: number, finalScore: number) => {
  trackAnalyticsEvent({
    category: "game",
    action: "game_closed",
    label: `${timePlayedSeconds}s_${finalScore}`,
    value: timePlayedSeconds,
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

export const trackBlogReadingTimeTracked = (blogId: string, timeInSeconds: number) => {
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
    label: platform,
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

export const trackExperienceTimelineInteraction = (
  companyName: string,
  action: "expanded" | "collapsed"
) => {
  trackAnalyticsEvent({
    category: "experience",
    action: `timeline_${action}`,
    label: companyName,
    value: action === "expanded" ? 1 : 0,
  });
};

// ============================================
// PERFORMANCE EVENTS
// ============================================

export const trackComponentLoadTime = (
  componentName: string,
  loadTimeMs: number
) => {
  trackAnalyticsEvent({
    category: "performance",
    action: "component_load_time",
    label: componentName,
    value: loadTimeMs,
  });
};

export const trackFormSubmissionTime = (formName: string, timeMs: number) => {
  trackAnalyticsEvent({
    category: "performance",
    action: "form_submission_time",
    label: formName,
    value: timeMs,
  });
};

export const trackPageLoadTime = (pageName: string, timeMs: number) => {
  trackAnalyticsEvent({
    category: "performance",
    action: "page_load_time",
    label: pageName,
    value: timeMs,
  });
};
