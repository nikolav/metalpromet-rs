import type { ThemeDefinition } from "vuetify";

import {
  COLOR_ACCENT_DARK,
  COLOR_ERROR_DARK,
  COLOR_INFO_DARK,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_VARIANT_DARK,
  COLOR_SECONDARY_DARK,
  COLOR_SUCCESS_DARK,
  COLOR_UI,
  COLOR_WARNING_DARK,
  SURFACE_DARK,
  TEXT_DARK,
} from "./colors";

export const dark: ThemeDefinition = {
  dark: true,

  colors: {
    // ===== SURFACE =====
    background: SURFACE_DARK.background,
    surface: SURFACE_DARK.surface,
    "surface-bright": SURFACE_DARK["surface-bright"],
    "surface-light": SURFACE_DARK["surface-light"],
    "surface-variant": SURFACE_DARK["surface-variant"],

    // ===== BASE COLORS =====
    primary: COLOR_PRIMARY_DARK,
    secondary: COLOR_SECONDARY_DARK,
    success: COLOR_SUCCESS_DARK,
    warning: COLOR_WARNING_DARK,
    error: COLOR_ERROR_DARK,
    info: COLOR_INFO_DARK,

    // ===== ACCENT, VARIANT, OTHER =====
    "primary-variant": COLOR_PRIMARY_VARIANT_DARK,
    accent: COLOR_ACCENT_DARK,
    ui: COLOR_UI,

    // ===== ON COLORS =====
    "on-background": TEXT_DARK.primary,
    "on-surface": TEXT_DARK.primary,
    "on-surface-bright": TEXT_DARK.primary,
    "on-surface-light": TEXT_DARK.primary,
    "on-surface-variant": TEXT_DARK.secondary,

    "on-primary": "#121318",
    "on-primary-variant": "#FFFFFF",
    "on-accent": "#1A1C24",
    "on-ui": "#FFFFFF",

    "on-secondary": "#FFFFFF",
    "on-success": "#121318",
    "on-warning": "#1A1C24",
    "on-error": "#121318",
    "on-info": "#121318",
  },

  variables: {
    // Sharp visible borders like cut steel edges (lighter for dark)
    "border-color": "#4A5060",
    "border-opacity": 1,

    // Extreme contrast for readability in dark environments
    "high-emphasis-opacity": 1.0,
    "medium-emphasis-opacity": 0.87,
    "disabled-opacity": 0.4,

    // Clear interaction states - more visible on dark
    "idle-opacity": 0,
    "hover-opacity": 0.12,
    "focus-opacity": 0.2,
    "selected-opacity": 0.16,
    "activated-opacity": 0.22,
    "pressed-opacity": 0.28,
    "dragged-opacity": 0.1,

    // Code elements - Industrial stencils (inverted)
    "theme-kbd": "#E8EBF0",
    "theme-on-kbd": "#121318",
    "theme-code": "#2D313E",
    "theme-on-code": "#E8EBF0",
  },
};
