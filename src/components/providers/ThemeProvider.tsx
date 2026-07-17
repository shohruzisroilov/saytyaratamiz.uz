"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
