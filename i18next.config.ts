import { defineConfig } from "i18next-cli";

export default defineConfig({
  locales: ["en", "fr"],
  extract: {
    input: [
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
      "config/**/*.{ts,tsx}",
      "i18n/**/*.{ts,tsx}",
      "lib/**/*.{ts,tsx}",
      "providers/**/*.{ts,tsx}",
    ],
    output: "i18n/locales/{{language}}/{{namespace}}.json",
  },
});
