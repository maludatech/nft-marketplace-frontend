"use client";

import { useThemeColor } from "@/stores/useThemeColor";

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const themeColor = useThemeColor((state) => state.themeColor);

  return <body className={`antialiased ${themeColor}`}>{children}</body>;
};
