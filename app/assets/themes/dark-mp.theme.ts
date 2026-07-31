import type { ThemeDefinition } from "vuetify";
import {
  COLOR_PRIMARY_DARK,
  COLOR_SECONDARY_DARK,
  COLOR_ACCENT_DARK,
  COLOR_PRIMARY_VARIANT_DARK,
} from "./colors";

/**
 * Industrial 'Sky-Blue Metallic' Theme - DARK MODE
 * Cool steel with subtle blue undertones, high contrast
 * Features: Deep blue-tinted steel, industrial precision
 */
export const dark: ThemeDefinition = {
  dark: true,

  colors: {
    // App surfaces - Deep blue-tinted factory environment
    background: "#14161E", // Deep shadow with blue undertone
    surface: "#1E212A", // Dark structural blue-steel
    "surface-bright": "#2D313E", // Lighter forged blue-steel
    "surface-light": "#262932", // Brushed dark blue-steel
    "surface-variant": "#3A3F4C", // Medium dark blue-steel

    // Primary - Dark metallic with sky-blue undertone
    primary: COLOR_PRIMARY_DARK,
    secondary: COLOR_SECONDARY_DARK,
    accent: COLOR_ACCENT_DARK,
    "primary-variant": COLOR_PRIMARY_VARIANT_DARK,

    // Feedback - Industrial indicators (brighter for dark)
    success: "#5A9C5E", // Equipment green
    warning: "#E8A827", // Caution yellow
    error: "#D94A40", // Danger red
    info: "#4A7B9C", // Tool steel blue

    // Text - Maximum contrast on dark blue-steel
    "on-background": "#E8EBF0", // Light text on dark surfaces
    "on-surface": "#E8EBF0",
    "on-surface-variant": "#B0B5C0", // Medium-light secondary
    "on-primary": "#E8EBF0", // Light text on dark primary
    "on-secondary": "#FFFFFF",
    "on-accent": "#1A1C24", // Dark text on steel accent
    "on-primary-variant": "#FFFFFF",
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
