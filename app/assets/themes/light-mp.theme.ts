import type { ThemeDefinition } from "vuetify";
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_ACCENT,
  COLOR_PRIMARY_VARIANT,
} from "./colors";

/**
 * Industrial 'Sky-Blue Metallic' Theme - LIGHT MODE
 * Cool steel with subtle blue undertones, high contrast
 * Features: Blue-tinted metallic surfaces, industrial precision
 */
export const light: ThemeDefinition = {
  dark: false,

  colors: {
    // App surfaces - Cool blue-tinted steel
    background: "#C8CDD6", // Blue-tinted industrial gray
    surface: "#D5DAE2", // Bright blue-steel surface
    "surface-bright": "#E2E6ED", // Polished blue-steel highlight
    "surface-light": "#BCC1CA", // Weathered blue-steel
    "surface-variant": "#A8AEB8", // Darker blue-steel

    // Primary - Dark metallic with sky-blue undertone
    primary: COLOR_PRIMARY,
    secondary: COLOR_SECONDARY,
    accent: COLOR_ACCENT,
    "primary-variant": COLOR_PRIMARY_VARIANT,

    // Feedback - Industrial indicators
    success: "#4A7A4E", // Equipment green
    warning: "#C49A2A", // Caution yellow
    error: "#B83230", // Danger red
    info: "#3A6B8C", // Tool steel blue

    // Text - Maximum contrast on blue-steel backgrounds
    "on-background": "#1A1C24", // Almost black with blue tint
    "on-surface": "#1A1C24",
    "on-surface-variant": "#2D313E", // Dark blue-steel for secondary
    "on-primary": "#E8EBF0", // Light text on dark primary
    "on-secondary": "#FFFFFF",
    "on-accent": "#1A1C24", // Dark text on steel accent
    "on-primary-variant": "#FFFFFF",
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
