import type { ThemeDefinition } from "vuetify";

import {
  COLOR_ACCENT,
  COLOR_ERROR,
  COLOR_INFO,
  COLOR_PRIMARY,
  COLOR_PRIMARY_VARIANT,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_UI,
  COLOR_WARNING,
  SURFACE_LIGHT,
  TEXT_LIGHT,
} from "./colors";

export const light: ThemeDefinition = {
  dark: false,

  colors: {
    // ===== SURFACE =====
    background: SURFACE_LIGHT.background,
    surface: SURFACE_LIGHT.surface,
    "surface-bright": SURFACE_LIGHT["surface-bright"],
    "surface-light": SURFACE_LIGHT["surface-light"],
    "surface-variant": SURFACE_LIGHT["surface-variant"],

    // ===== BASE =====
    primary: COLOR_PRIMARY,
    secondary: COLOR_SECONDARY,
    success: COLOR_SUCCESS,
    warning: COLOR_WARNING,
    error: COLOR_ERROR,
    info: COLOR_INFO,

    // ===== ACCENT, VARIANT, OTHER =====
    "primary-variant": COLOR_PRIMARY_VARIANT,
    accent: COLOR_ACCENT,
    ui: COLOR_UI,

    // ===== ON COLORS =====
    "on-background": TEXT_LIGHT.primary,
    "on-surface": TEXT_LIGHT.primary,
    "on-surface-bright": TEXT_LIGHT.primary,
    "on-surface-light": TEXT_LIGHT.primary,
    "on-surface-variant": TEXT_LIGHT.secondary,

    "on-primary": "#FFFFFF",
    "on-primary-variant": "#FFFFFF",
    "on-accent": "#1A1C24",
    "on-ui": "#FFFFFF",
    "on-secondary": "#FFFFFF",

    "on-success": "#FFFFFF",
    "on-warning": "#1A1C24",
    "on-error": "#FFFFFF",
    "on-info": "#FFFFFF",
  },

  variables: {
    // High contrast borders for clear definition
    "border-color": "#3D414E",
    "border-opacity": 1,

    // Maximum contrast for easy reading
    "high-emphasis-opacity": 1.0,
    "medium-emphasis-opacity": 0.87,
    "disabled-opacity": 0.38,

    // Clear interaction states
    "idle-opacity": 0,
    "hover-opacity": 0.08,
    "focus-opacity": 0.15,
    "selected-opacity": 0.12,
    "activated-opacity": 0.18,
    "pressed-opacity": 0.25,
    "dragged-opacity": 0.08,

    // Code elements - Clear contrast
    "theme-kbd": "#2D313E",
    "theme-on-kbd": "#FFFFFF",
    "theme-code": "#E8E9ED",
    "theme-on-code": "#1A1C24",
  },
};
