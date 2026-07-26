import blogsEn from "./locales/en/blogs.json";
import commonEn from "./locales/en/common.json";
import experienceEn from "./locales/en/experience.json";
import homeEn from "./locales/en/home.json";
import modernEn from "./locales/en/modern.json";
import projectsEn from "./locales/en/projects.json";
import seoEn from "./locales/en/seo.json";
import skillsEn from "./locales/en/skills.json";
import blogsFr from "./locales/fr/blogs.json";
import commonFr from "./locales/fr/common.json";
import experienceFr from "./locales/fr/experience.json";
import homeFr from "./locales/fr/home.json";
import modernFr from "./locales/fr/modern.json";
import projectsFr from "./locales/fr/projects.json";
import seoFr from "./locales/fr/seo.json";
import skillsFr from "./locales/fr/skills.json";

export const resources = {
  en: {
    blogs: blogsEn,
    common: commonEn,
    experience: experienceEn,
    home: homeEn,
    modern: modernEn,
    projects: projectsEn,
    seo: seoEn,
    skills: skillsEn,
  },
  fr: {
    blogs: blogsFr,
    common: commonFr,
    experience: experienceFr,
    home: homeFr,
    modern: modernFr,
    projects: projectsFr,
    seo: seoFr,
    skills: skillsFr,
  },
} as const;
