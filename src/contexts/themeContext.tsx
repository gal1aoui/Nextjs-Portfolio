"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { createContext, useContext, useMemo, useState } from "react";

type Mode = "light" | "dark" | "system";

interface ThemeContextProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeContextProvider");
  return ctx;
};

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("system");

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const systemMode: "light" | "dark" = prefersDark ? "dark" : "light";

  const effectiveMode = mode === "system" ? systemMode : mode;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: effectiveMode,
        },
        typography: {
          fontFamily: "var(--font-roboto)",
        },
      }),
    [effectiveMode],
  );

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : prev === "dark" ? "system" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
              transition: "background-color 1s ease",
            }}
          >
            <IconButton
              onClick={toggleMode}
              color="inherit"
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                bgcolor: "text.primary",
                color: "background.default",
              }}
            >
              {mode === "dark" ? (
                <LightModeIcon />
              ) : mode === "light" ? (
                <DarkModeIcon />
              ) : (
                <SettingsBrightnessIcon />
              )}
            </IconButton>
            {children}
          </Box>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </ThemeContext.Provider>
  );
};
