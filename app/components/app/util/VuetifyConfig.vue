<script setup lang="ts">
// 03798fa0-3427-5d03-9a75-a20a38569c8f
import { useTheme } from "vuetify";

// Theme management
const theme = useTheme();
const currentTheme = computed(() => theme.global.name.value);

// Toggle theme function
const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "light" ? "dark" : "light";
};

// Component states
const tab = ref("1");
const toggle = ref("left");
const page = ref(3);
const rating = ref(4);
const selectedItem = ref(null);
const checkbox = ref(false);
const switch1 = ref(true);
const textField = ref("");
const selectField = ref(null);

// Complete theme colors from configuration
const themeColors = computed(() => {
  const isDark = currentTheme.value === "dark";
  return {
    // Base colors
    primary: isDark ? "#E8EDF4" : "#0A1628",
    "primary-variant": isDark ? "#B0C4DE" : "#1A2A4A",
    secondary: isDark ? "#4A9AD9" : "#0066B3",
    accent: isDark ? "#FF8A3C" : "#D45400",

    // Status colors
    success: isDark ? "#4CAF6A" : "#1E7B3A",
    warning: isDark ? "#FFA54A" : "#D97A00",
    error: isDark ? "#EF5350" : "#C62828",
    info: isDark ? "#4A9AD9" : "#0066B3",

    // Surface colors
    background: isDark ? "#0A0E1A" : "#F4F6FA",
    surface: isDark ? "#111827" : "#FFFFFF",
    "surface-bright": isDark ? "#1A2332" : "#FAFBFD",
    "surface-light": isDark ? "#151D2B" : "#EEF0F5",
    "surface-variant": isDark ? "#1E2A3D" : "#E4E7ED",

    // Text colors
    "on-background": isDark ? "#E8EDF4" : "#0A1628",
    "on-surface": isDark ? "#E8EDF4" : "#0A1628",
    "on-surface-bright": isDark ? "#E8EDF4" : "#0A1628",
    "on-surface-light": isDark ? "#E8EDF4" : "#0A1628",
    "on-surface-variant": isDark ? "#B0C4DE" : "#1A2A4A",
    "on-primary": isDark ? "#0A0E1A" : "#FFFFFF",
    "on-primary-variant": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "on-accent": isDark ? "#0A0E1A" : "#FFFFFF",
    "on-success": isDark ? "#0A0E1A" : "#FFFFFF",
    "on-warning": isDark ? "#0A0E1A" : "#FFFFFF",
    "on-error": "#FFFFFF",
    "on-info": "#FFFFFF",
  };
});

// Items for select
const items = ["Opcija A", "Opcija B", "Opcija C", "Opcija D"];
const tableItems = [
  { name: "Ana", status: "aktivan", statusColor: "success" },
  { name: "Marko", status: "čekanje", statusColor: "warning" },
  { name: "Jelena", status: "neaktivan", statusColor: "error" },
  { name: "Stefan", status: "aktivan", statusColor: "success" },
  { name: "Marija", status: "čekanje", statusColor: "warning" },
];
</script>

<template>
  <AppBoxBase
    class="component--AppUtilVuetifyConfig min-h-screen p-6 font-sans transition-colors duration-300"
    :style="{
      backgroundColor: themeColors.background,
      color: themeColors['on-background'],
    }"
  >
    <!-- Main Container -->
    <div class="max-w-7xl mx-auto">
      <!-- Header with Theme Toggle -->
      <div class="mb-8">
        <div class="flex justify-between items-start">
          <div>
            <h1
              class="text-4xl font-bold flex items-center gap-3"
              :style="{ color: themeColors.primary }"
            >
              <span class="text-4xl">⚡</span>
              Vuetify 3 · Nuxt 3 Demo
              <VChip
                :color="currentTheme === 'light' ? 'primary' : 'secondary'"
                size="small"
                class="ml-2"
              >
                {{ currentTheme }}
              </VChip>
            </h1>
            <p class="mt-2 text-lg" :style="{ color: themeColors.secondary }">
              Brzi pregled stilova, tema i nosećih Vuetify komponenti
            </p>
          </div>
          <VBtn
            :color="currentTheme === 'light' ? 'primary' : 'secondary'"
            variant="tonal"
            @click="toggleTheme"
            class="theme-toggle-btn"
          >
            <VIcon left>
              {{
                currentTheme === "light"
                  ? "mdi:weather-night"
                  : "mdi:weather-sunny"
              }}
            </VIcon>
            {{ currentTheme === "light" ? "Dark" : "Light" }} Mode
          </VBtn>
        </div>
        <VDivider class="mt-4" />
      </div>

      <!-- Section: Complete Color Palette -->
      <div class="grid grid-cols-1 gap-6 mb-8">
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h2
            class="text-xl font-semibold mb-4"
            :style="{ color: themeColors.primary }"
          >
            🎨 Kompletna paleta boja
          </h2>

          <!-- Primary & Variant -->
          <div class="mb-4">
            <h3
              class="text-sm font-medium mb-2"
              :style="{ color: themeColors['on-surface-variant'] }"
            >
              Primarne boje
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors.primary,
                  color: themeColors['on-primary'],
                }"
              >
                primary: {{ themeColors.primary }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors['primary-variant'],
                  color: themeColors['on-primary-variant'],
                }"
              >
                primary-variant: {{ themeColors["primary-variant"] }}
              </div>
            </div>
          </div>

          <!-- Secondary & Accent -->
          <div class="mb-4">
            <h3
              class="text-sm font-medium mb-2"
              :style="{ color: themeColors['on-surface-variant'] }"
            >
              Sekundarne & akcentne boje
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors.secondary,
                  color: themeColors['on-secondary'],
                }"
              >
                secondary: {{ themeColors.secondary }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors.accent,
                  color: themeColors['on-accent'],
                }"
              >
                accent: {{ themeColors.accent }}
              </div>
            </div>
          </div>

          <!-- Status Colors -->
          <div class="mb-4">
            <h3
              class="text-sm font-medium mb-2"
              :style="{ color: themeColors['on-surface-variant'] }"
            >
              Statusne boje
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors.success,
                  color: themeColors['on-success'],
                }"
              >
                success: {{ themeColors.success }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors.warning,
                  color: themeColors['on-warning'],
                }"
              >
                warning: {{ themeColors.warning }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors.error,
                  color: themeColors['on-error'],
                }"
              >
                error: {{ themeColors.error }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300"
                :style="{
                  backgroundColor: themeColors.info,
                  color: themeColors['on-info'],
                }"
              >
                info: {{ themeColors.info }}
              </div>
            </div>
          </div>

          <!-- Surface Colors -->
          <div class="mb-4">
            <h3
              class="text-sm font-medium mb-2"
              :style="{ color: themeColors['on-surface-variant'] }"
            >
              Površinske boje
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300 border"
                :style="{
                  backgroundColor: themeColors.background,
                  color: themeColors['on-background'],
                  borderColor: themeColors['surface-variant'],
                }"
              >
                background: {{ themeColors.background }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300 border"
                :style="{
                  backgroundColor: themeColors.surface,
                  color: themeColors['on-surface'],
                  borderColor: themeColors['surface-variant'],
                }"
              >
                surface: {{ themeColors.surface }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300 border"
                :style="{
                  backgroundColor: themeColors['surface-bright'],
                  color: themeColors['on-surface-bright'],
                  borderColor: themeColors['surface-variant'],
                }"
              >
                surface-bright: {{ themeColors["surface-bright"] }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300 border"
                :style="{
                  backgroundColor: themeColors['surface-light'],
                  color: themeColors['on-surface-light'],
                  borderColor: themeColors['surface-variant'],
                }"
              >
                surface-light: {{ themeColors["surface-light"] }}
              </div>
              <div
                class="px-4 py-2 rounded-lg flex items-center justify-center text-xs font-medium shadow transition-colors duration-300 border"
                :style="{
                  backgroundColor: themeColors['surface-variant'],
                  color: themeColors['on-surface-variant'],
                  borderColor: themeColors['surface-variant'],
                }"
              >
                surface-variant: {{ themeColors["surface-variant"] }}
              </div>
            </div>
          </div>
        </VCard>
      </div>

      <!-- Section: Typography & Basic Colors -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h2
            class="text-xl font-semibold mb-4"
            :style="{ color: themeColors.primary }"
          >
            📝 Tipografija & primeri
          </h2>
          <div class="space-y-2">
            <div
              class="text-4xl font-bold"
              :style="{ color: themeColors.primary }"
            >
              h4 · primary
            </div>
            <div
              class="text-3xl font-semibold"
              :style="{ color: themeColors.secondary }"
            >
              h5 · secondary
            </div>
            <div
              class="text-2xl font-semibold"
              :style="{ color: themeColors.accent }"
            >
              h6 · accent
            </div>
            <div
              class="text-xl font-semibold"
              :style="{ color: themeColors['primary-variant'] }"
            >
              subtitle-1 · primary-variant
            </div>
            <div class="text-base" :style="{ color: themeColors.success }">
              body-1 · success
            </div>
            <div class="text-sm" :style="{ color: themeColors.warning }">
              body-2 · warning
            </div>
            <div class="text-xs" :style="{ color: themeColors.error }">
              caption · error
            </div>
            <div class="text-xs" :style="{ color: themeColors.info }">
              caption · info
            </div>
          </div>
          <VDivider class="my-4" />
          <div class="flex flex-wrap gap-2">
            <VChip :color="themeColors.primary" class="text-white"
              >primary</VChip
            >
            <VChip :color="themeColors['primary-variant']" class="text-white"
              >primary-variant</VChip
            >
            <VChip :color="themeColors.secondary" class="text-white"
              >secondary</VChip
            >
            <VChip :color="themeColors.accent" class="text-white">accent</VChip>
            <VChip color="success">success</VChip>
            <VChip color="warning">warning</VChip>
            <VChip color="error" class="text-white">error</VChip>
            <VChip color="info" class="text-white">info</VChip>
          </div>
        </VCard>

        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h2
            class="text-xl font-semibold mb-4"
            :style="{ color: themeColors.primary }"
          >
            ⚙️ Kompletna tema konfiguracija
          </h2>
          <div
            class="p-4 rounded-lg font-mono text-xs overflow-x-auto transition-colors duration-300"
            :style="{
              backgroundColor: currentTheme === 'light' ? '#0A0E1A' : '#0A0E1A',
              color: '#E8EDF4',
            }"
          >
            <pre
              class="whitespace-pre-wrap"
            ><span class="text-purple-400">// Kompletna Vuetify 3 tema</span>
<span class="text-blue-300">export default</span> {
  <span class="text-yellow-300">theme</span>: {
    <span class="text-orange-300">defaultTheme</span>: <span class="text-green-400">'{{ currentTheme }}'</span>,
    <span class="text-orange-300">themes</span>: {
      <span class="text-orange-300">light</span>: {
        <span class="text-orange-300">dark</span>: <span class="text-blue-300">false</span>,
        <span class="text-orange-300">colors</span>: {
          <span class="text-orange-300">primary</span>: <span class="text-green-400">'#0A1628'</span>,
          <span class="text-orange-300">primary-variant</span>: <span class="text-green-400">'#1A2A4A'</span>,
          <span class="text-orange-300">secondary</span>: <span class="text-green-400">'#0066B3'</span>,
          <span class="text-orange-300">accent</span>: <span class="text-green-400">'#D45400'</span>,
          <span class="text-orange-300">success</span>: <span class="text-green-400">'#1E7B3A'</span>,
          <span class="text-orange-300">warning</span>: <span class="text-green-400">'#D97A00'</span>,
          <span class="text-orange-300">error</span>: <span class="text-green-400">'#C62828'</span>,
          <span class="text-orange-300">info</span>: <span class="text-green-400">'#0066B3'</span>,
          <span class="text-orange-300">background</span>: <span class="text-green-400">'#F4F6FA'</span>,
          <span class="text-orange-300">surface</span>: <span class="text-green-400">'#FFFFFF'</span>,
          <span class="text-orange-300">surface-bright</span>: <span class="text-green-400">'#FAFBFD'</span>,
          <span class="text-orange-300">surface-light</span>: <span class="text-green-400">'#EEF0F5'</span>,
          <span class="text-orange-300">surface-variant</span>: <span class="text-green-400">'#E4E7ED'</span>
        }
      },
      <span class="text-orange-300">dark</span>: {
        <span class="text-orange-300">dark</span>: <span class="text-blue-300">true</span>,
        <span class="text-orange-300">colors</span>: {
          <span class="text-orange-300">primary</span>: <span class="text-green-400">'#E8EDF4'</span>,
          <span class="text-orange-300">primary-variant</span>: <span class="text-green-400">'#B0C4DE'</span>,
          <span class="text-orange-300">secondary</span>: <span class="text-green-400">'#4A9AD9'</span>,
          <span class="text-orange-300">accent</span>: <span class="text-green-400">'#FF8A3C'</span>,
          <span class="text-orange-300">success</span>: <span class="text-green-400">'#4CAF6A'</span>,
          <span class="text-orange-300">warning</span>: <span class="text-green-400">'#FFA54A'</span>,
          <span class="text-orange-300">error</span>: <span class="text-green-400">'#EF5350'</span>,
          <span class="text-orange-300">info</span>: <span class="text-green-400">'#4A9AD9'</span>,
          <span class="text-orange-300">background</span>: <span class="text-green-400">'#0A0E1A'</span>,
          <span class="text-orange-300">surface</span>: <span class="text-green-400">'#111827'</span>,
          <span class="text-orange-300">surface-bright</span>: <span class="text-green-400">'#1A2332'</span>,
          <span class="text-orange-300">surface-light</span>: <span class="text-green-400">'#151D2B'</span>,
          <span class="text-orange-300">surface-variant</span>: <span class="text-green-400">'#1E2A3D'</span>
        }
      }
    }
  }
}</pre>
          </div>
          <div class="flex flex-wrap gap-2 mt-3">
            <VChip
              :color="currentTheme === 'light' ? 'primary' : 'secondary'"
              size="small"
              class="px-3 py-1 rounded-full text-xs"
            >
              {{ currentTheme }} tema aktivna
            </VChip>
            <VChip
              color="secondary"
              size="small"
              variant="outlined"
              class="px-3 py-1 rounded-full text-xs"
            >
              sve boje prikazane
            </VChip>
          </div>
        </VCard>
      </div>

      <!-- Section: Core Components -->
      <h2
        class="text-2xl font-bold mb-4"
        :style="{ color: themeColors.primary }"
      >
        🧰 Noseće Vuetify komponente
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Buttons -->
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h3
            class="text-lg font-semibold mb-3"
            :style="{ color: themeColors.secondary }"
          >
            🔘 Dugmad
          </h3>
          <div class="flex flex-wrap gap-2">
            <VBtn color="primary" variant="flat">primary</VBtn>
            <VBtn color="primary-variant" variant="flat">variant</VBtn>
            <VBtn color="secondary" variant="outlined">secondary</VBtn>
            <VBtn color="accent" variant="elevated">accent</VBtn>
            <VBtn color="success" variant="text">success</VBtn>
            <VBtn color="warning" variant="tonal">warning</VBtn>
            <VBtn color="error" size="small" icon>
              <span class="text-lg">❤️</span>
            </VBtn>
            <VBtn color="info" disabled>info</VBtn>
          </div>
        </VCard>

        <!-- Form -->
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h3
            class="text-lg font-semibold mb-3"
            :style="{ color: themeColors.secondary }"
          >
            ✏️ Forma
          </h3>
          <VTextField
            v-model="textField"
            label="Ime"
            variant="outlined"
            density="compact"
            class="mb-3"
            :color="themeColors.primary"
          />
          <VSelect
            v-model="selectField"
            label="Izbor"
            :items="items"
            variant="outlined"
            density="compact"
            class="mb-3"
            :color="themeColors.primary"
          />
          <VCheckbox
            v-model="checkbox"
            label="Prihvatam uslove"
            hide-details
            density="compact"
            class="mb-2"
            :color="themeColors.primary"
          />
          <VSwitch
            v-model="switch1"
            label="Obaveštenja"
            color="success"
            density="compact"
            class="mb-3"
          />
          <VBtn :color="themeColors.accent" variant="flat" block>
            Pošalji sa accent
          </VBtn>
        </VCard>

        <!-- Table -->
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h3
            class="text-lg font-semibold mb-3"
            :style="{ color: themeColors.secondary }"
          >
            📊 Tabela
          </h3>
          <VTable density="compact" hover class="w-full text-sm">
            <thead>
              <tr :style="{ backgroundColor: themeColors['surface-variant'] }">
                <th class="text-left p-2">Ime</th>
                <th class="text-left p-2">Status</th>
                <th class="text-left p-2">Akcija</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in tableItems"
                :key="item.name"
                class="border-b transition-colors duration-300"
                :style="{
                  borderColor: themeColors['surface-variant'],
                }"
              >
                <td class="p-2">{{ item.name }}</td>
                <td class="p-2">
                  <VChip
                    :color="item.statusColor"
                    size="x-small"
                    class="px-2 py-0.5 rounded-full text-xs"
                  >
                    {{ item.status }}
                  </VChip>
                </td>
                <td class="p-2">
                  <VBtn
                    size="x-small"
                    variant="text"
                    icon
                    :color="themeColors.primary"
                  >
                    <span class="text-sm">✏️</span>
                  </VBtn>
                  <VBtn size="x-small" variant="text" icon color="error">
                    <span class="text-sm">🗑️</span>
                  </VBtn>
                </td>
              </tr>
            </tbody>
          </VTable>
          <div class="flex flex-wrap gap-2 mt-3">
            <VChip
              :color="themeColors.primary"
              variant="flat"
              size="small"
              class="px-3 py-1 rounded-full text-xs"
            >
              filter
            </VChip>
            <VChip
              :color="themeColors.secondary"
              variant="outlined"
              size="small"
              class="px-3 py-1 rounded-full text-xs"
            >
              svi
            </VChip>
            <VChip
              :color="themeColors.accent"
              variant="tonal"
              size="small"
              class="px-3 py-1 rounded-full text-xs"
            >
              aktuelni
            </VChip>
          </div>
        </VCard>
      </div>

      <!-- Section: Additional Components -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h3
            class="text-lg font-semibold mb-3"
            :style="{ color: themeColors.secondary }"
          >
            📌 Dodatni elementi
          </h3>
          <VAlert
            type="success"
            variant="tonal"
            class="mb-3 p-3 border-l-4 rounded"
            :style="{ borderColor: themeColors.success }"
          >
            <strong :style="{ color: themeColors.success }">✅ Uspeh!</strong>
            Radnja je izvršena.
          </VAlert>
          <VAlert
            type="warning"
            variant="outlined"
            class="mb-3 p-3"
            :style="{ borderColor: themeColors.warning }"
          >
            ⚠️ Upozorenje: proverite unos.
          </VAlert>
          <VAlert
            type="info"
            variant="tonal"
            class="mb-3 p-3 border-l-4 rounded"
            :style="{ borderColor: themeColors.info }"
          >
            ℹ️ Informacija: ažuriranje je dostupno.
          </VAlert>
          <VProgressLinear
            indeterminate
            :color="themeColors.primary"
            class="mt-3"
          />
          <div class="flex items-center gap-3 mt-3">
            <span class="text-2xl">🏠</span>
            <span class="text-2xl">👤</span>
            <span class="text-2xl">✅</span>
            <span class="text-2xl">⚠️</span>
            <span class="text-2xl">❌</span>
            <span class="text-2xl">ℹ️</span>
            <div class="relative">
              <span class="text-2xl">🔔</span>
              <span
                class="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full px-1.5 py-0.5"
              >
                3
              </span>
            </div>
          </div>
          <VRating
            v-model="rating"
            :color="themeColors.warning"
            :active-color="themeColors.warning"
            class="mt-2"
          />
          <div class="flex gap-2 mt-2">
            <VProgressCircular
              indeterminate
              :color="themeColors.primary"
              size="32"
            />
            <VProgressCircular
              indeterminate
              :color="themeColors.secondary"
              size="32"
            />
            <VProgressCircular
              indeterminate
              :color="themeColors.accent"
              size="32"
            />
            <VProgressCircular indeterminate color="success" size="32" />
          </div>
        </VCard>

        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm transition-colors duration-300"
        >
          <h3
            class="text-lg font-semibold mb-3"
            :style="{ color: themeColors.secondary }"
          >
            📐 Layout & navigacija
          </h3>
          <VTabs
            v-model="tab"
            :color="themeColors.primary"
            align-tabs="center"
            class="mb-2"
          >
            <VTab value="1">📄 Tab 1</VTab>
            <VTab value="2">⚙️ Tab 2</VTab>
            <VTab value="3">🔧 Tab 3</VTab>
          </VTabs>
          <VWindow
            v-model="tab"
            class="mt-2 p-3 rounded-lg transition-colors duration-300"
            :style="{ backgroundColor: themeColors.surface }"
          >
            <VWindowItem value="1">
              Sadržaj prvog taba – osnovne informacije.
            </VWindowItem>
            <VWindowItem value="2">
              Drugi tab – detalji konfiguracije.
            </VWindowItem>
            <VWindowItem value="3"> Treći tab – dodatne opcije. </VWindowItem>
          </VWindow>
          <VDivider class="my-3" />
          <VBtnToggle
            v-model="toggle"
            divided
            :color="themeColors.primary"
            group
          >
            <VBtn value="left" variant="outlined">
              <span class="text-lg">⬅️</span>
            </VBtn>
            <VBtn value="center" variant="outlined">
              <span class="text-lg">⬛</span>
            </VBtn>
            <VBtn value="right" variant="outlined">
              <span class="text-lg">➡️</span>
            </VBtn>
          </VBtnToggle>
          <VDivider class="my-3" />
          <VPagination
            v-model="page"
            :length="5"
            rounded="circle"
            size="small"
            :color="themeColors.primary"
          />
          <div class="flex gap-2 mt-3">
            <VBreadcrumbs
              :items="[
                { title: 'Početna', to: '#' },
                { title: 'Kategorija', to: '#' },
                { title: 'Trenutna', to: '#' },
              ]"
              divider="/"
              class="text-sm"
              :color="themeColors.primary"
            />
          </div>
          <div class="flex flex-wrap gap-2 mt-3">
            <VChip :color="themeColors['primary-variant']" class="text-white"
              >variant</VChip
            >
            <VChip :color="themeColors.accent" class="text-white">accent</VChip>
            <VChip color="success">success</VChip>
            <VChip color="warning">warning</VChip>
          </div>
        </VCard>
      </div>

      <!-- Footer -->
      <VDivider class="pt-4" />
      <div class="pt-4 flex flex-wrap justify-between items-center">
        <span class="text-sm" :style="{ color: themeColors.secondary }">
          Vuetify 3 · Nuxt 3 · Tailwind CSS
        </span>
        <div class="flex flex-wrap gap-2">
          <VChip
            :color="themeColors.primary"
            size="small"
            variant="outlined"
            class="px-3 py-1 rounded-full text-xs"
          >
            v3.7.4
          </VChip>
          <VChip
            :color="themeColors.secondary"
            size="small"
            variant="text"
            class="px-3 py-1 rounded-full text-xs"
          >
            CDN
          </VChip>
          <VChip
            :color="
              currentTheme === 'light'
                ? themeColors.primary
                : themeColors.secondary
            "
            size="small"
            class="px-3 py-1 rounded-full text-xs"
          >
            {{ currentTheme }}
          </VChip>
          <VChip
            :color="themeColors.accent"
            size="small"
            class="px-3 py-1 rounded-full text-xs"
          >
            accent
          </VChip>
        </div>
      </div>
    </div>
  </AppBoxBase>
</template>

<style scoped>
.theme-toggle-btn {
  transition: all 0.3s ease;
}

.theme-toggle-btn:hover {
  transform: scale(1.05);
}

/* Smooth theme transitions */
.v-card,
.v-btn,
.v-chip,
.v-alert,
.v-window {
  transition: all 0.3s ease !important;
}

/* Custom scrollbar for dark mode */
:deep(.v-table) {
  transition: all 0.3s ease;
}

/* Improve contrast in dark mode */
.dark-mode .v-card {
  border-color: #1e2a3d;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .component--AppUtilVuetifyConfig {
    padding: 1rem;
  }
}

/* Color swatch hover effect */
.px-4.py-2.rounded-lg {
  transition: all 0.3s ease;
  cursor: default;
}

.px-4.py-2.rounded-lg:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
