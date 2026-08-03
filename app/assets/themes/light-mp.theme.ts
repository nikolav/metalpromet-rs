import type { ThemeDefinition } from "vuetify";
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_VARIANT,
  COLOR_ACCENT,
  COLOR_SECONDARY,
} from "./colors";

/**
 * Industrial 'Sky-Blue Metallic' Theme - LIGHT MODE
 * Cool steel with subtle blue undertones, high contrast
 * Features: Blue-tinted metallic surfaces, industrial precision
 */
export const light: ThemeDefinition = {
  dark: false,

  colors: {
    // ===== BASE COLORS =====
    background: "#C8CDD6",
    surface: "#D5DAE2",
    primary: COLOR_PRIMARY,
    secondary: COLOR_SECONDARY,
    success: "#4A7A4E",
    warning: "#C49A2A",
    error: "#B83230",
    info: "#3A6B8C",

    // ===== SURFACE VARIANTS =====
    "surface-bright": "#E2E6ED",
    "surface-light": "#BCC1CA",
    "surface-variant": "#A8AEB8",

    // ===== ACCENT, VARIANT =====
    "primary-variant": COLOR_PRIMARY_VARIANT,
    accent: COLOR_ACCENT,

    // ===== ON COLORS =====
    "on-background": "#1A1C24",
    "on-surface": "#1A1C24",
    "on-surface-bright": "#1A1C24",
    "on-surface-light": "#1A1C24",
    "on-surface-variant": "#2D313E",

    "on-primary": "#E8EBF0",
    "on-primary-variant": "#FFFFFF",
    "on-accent": "#1A1C24",
    "on-secondary": "#FFFFFF",
    "on-success": "#FFFFFF",
    "on-warning": "#1A1C24",
    "on-error": "#FFFFFF",
    "on-info": "#FFFFFF",
  },

  variables: {
    // Sharp visible borders like cut steel edges
    "border-color": "#4A5060", // Blue-steel edge
    "border-opacity": 1,

    // Extreme contrast for readability
    "high-emphasis-opacity": 1.0,
    "medium-emphasis-opacity": 0.92,
    "disabled-opacity": 0.4,

    // Interaction states - like pressing/working metal
    "idle-opacity": 0,
    "hover-opacity": 0.1,
    "focus-opacity": 0.18,
    "selected-opacity": 0.15,
    "activated-opacity": 0.22,
    "pressed-opacity": 0.28,
    "dragged-opacity": 0.1,

    // Code elements - Industrial stencils
    "theme-kbd": "#2D313E",
    "theme-on-kbd": "#E8EBF0",
    "theme-code": "#A8AEB8",
    "theme-on-code": "#1A1C24",
  },
};
