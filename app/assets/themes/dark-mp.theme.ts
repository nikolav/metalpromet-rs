import type { ThemeDefinition } from "vuetify";
import {
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_VARIANT_DARK,
  COLOR_ACCENT_DARK,
  COLOR_SECONDARY_DARK,
} from "./colors";

/**
 * Industrial 'Sky-Blue Metallic' Theme - DARK MODE
 * Cool steel with subtle blue undertones, high contrast
 * Features: Deep blue-tinted steel, industrial precision
 */
export const dark: ThemeDefinition = {
  dark: true,

  colors: {
    // ===== BASE COLORS =====
    background: "#14161E",
    surface: "#1E212A",
    primary: COLOR_PRIMARY_DARK,
    secondary: COLOR_SECONDARY_DARK,
    success: "#5A9C5E",
    warning: "#E8A827",
    error: "#D94A40",
    info: "#4A7B9C",

    // ===== SURFACE VARIANTS =====
    "surface-bright": "#2D313E",
    "surface-light": "#262932",
    "surface-variant": "#3A3F4C",

    // ===== ACCENT, VARIANT =====
    "primary-variant": COLOR_PRIMARY_VARIANT_DARK,
    accent: COLOR_ACCENT_DARK,

    // ===== ON COLORS =====
    "on-background": "#E8EBF0",
    "on-surface": "#E8EBF0",
    "on-surface-bright": "#E8EBF0",
    "on-surface-light": "#E8EBF0",
    "on-surface-variant": "#B0B5C0",

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
    // Sharp visible borders like cut steel edges (lighter for dark)
    "border-color": "#4A5060", // Blue-steel edge glow
    "border-opacity": 1,

    // Extreme contrast for readability in dark environments
    "high-emphasis-opacity": 1.0,
    "medium-emphasis-opacity": 0.92,
    "disabled-opacity": 0.45,

    // Interaction states - like pressing/working metal (more visible)
    "idle-opacity": 0,
    "hover-opacity": 0.12,
    "focus-opacity": 0.2,
    "selected-opacity": 0.18,
    "activated-opacity": 0.25,
    "pressed-opacity": 0.3,
    "dragged-opacity": 0.12,

    // Code elements - Industrial stencils (inverted)
    "theme-kbd": "#E8EBF0",
    "theme-on-kbd": "#14161E",
    "theme-code": "#3A3F4C",
    "theme-on-code": "#E8EBF0",
  },
};
