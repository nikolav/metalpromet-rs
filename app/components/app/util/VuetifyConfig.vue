<script setup lang="ts">
const tab = ref("1");
const toggle = ref("left");
const page = ref(3);
const rating = ref(4);
</script>

<template>
  <AppBoxBase
    class="component--AppUtilVuetifyConfig min-h-screen bg-grey-lighten-4 p-6 font-sans"
  >
    <!-- Glavni kontejner -->
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold flex items-center gap-3">
          <span class="text-4xl">⚡</span>
          Vuetify 3 · Nuxt 3 demo
        </h1>
        <p class="text-grey-darken-2 mt-2 text-lg">
          Brzi pregled stilova, tema i nosećih Vuetify komponenti
        </p>
        <div class="h-px bg-grey-lighten-2 mt-4"></div>
      </div>

      <!-- Sekcija: Tipografija i boje -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm border border-grey-lighten-2"
        >
          <h2 class="text-xl font-semibold mb-4 text-grey-darken-3">
            🎨 Tipografija & boje
          </h2>
          <div class="space-y-2">
            <div class="text-4xl font-bold text-primary">h4 · primary</div>
            <div class="text-3xl font-semibold text-secondary">
              h5 · secondary
            </div>
            <div class="text-2xl font-semibold text-success">h6 · success</div>
            <div class="text-xl text-warning">subtitle-1 · warning</div>
            <div class="text-base text-info">body-1 · info</div>
            <div class="text-sm text-error">body-2 · error</div>
            <div class="text-xs text-grey-darken-1">caption · grey</div>
          </div>
          <div class="h-px bg-grey-lighten-2 my-4"></div>
          <div class="flex flex-wrap gap-3">
            <div
              class="w-16 h-16 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-medium shadow"
            >
              primary
            </div>
            <div
              class="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center text-white text-xs font-medium shadow"
            >
              secondary
            </div>
            <div
              class="w-16 h-16 rounded-lg bg-success flex items-center justify-center text-white text-xs font-medium shadow"
            >
              success
            </div>
            <div
              class="w-16 h-16 rounded-lg bg-warning flex items-center justify-center text-white text-xs font-medium shadow"
            >
              warning
            </div>
            <div
              class="w-16 h-16 rounded-lg bg-info flex items-center justify-center text-white text-xs font-medium shadow"
            >
              info
            </div>
            <div
              class="w-16 h-16 rounded-lg bg-error flex items-center justify-center text-white text-xs font-medium shadow"
            >
              error
            </div>
            <div
              class="w-16 h-16 rounded-lg bg-surface border border-grey-lighten-2 flex items-center justify-center text-grey-darken-3 text-xs font-medium shadow"
            >
              surface
            </div>
            <div
              class="w-16 h-16 rounded-lg bg-grey-lighten-5 border border-grey-lighten-2 flex items-center justify-center text-grey-darken-3 text-xs font-medium shadow"
            >
              bg
            </div>
          </div>
        </VCard>

        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm border border-grey-lighten-2"
        >
          <h2 class="text-xl font-semibold mb-4 text-grey-darken-3">
            ⚙️ Tema konfiguracija
          </h2>
          <div
            class="bg-grey-darken-4 text-grey-lighten-1 p-4 rounded-lg font-mono text-sm overflow-x-auto"
          >
            <pre
              class="whitespace-pre-wrap"
            ><span class="text-purple-400">// Nuxt 3 · Vuetify 3 tema</span>
<span class="text-blue-300">export default defineNuxtConfig</span>({
  <span class="text-yellow-300">vuetify</span>: {
    <span class="text-green-300">theme</span>: {
      <span class="text-orange-300">defaultTheme</span>: <span class="text-green-400">'light'</span>,
      <span class="text-orange-300">themes</span>: {
        <span class="text-orange-300">light</span>: {
          <span class="text-orange-300">dark</span>: <span class="text-blue-300">false</span>,
          <span class="text-orange-300">colors</span>: {
            <span class="text-orange-300">primary</span>: <span class="text-green-400">'#1976D2'</span>,
            <span class="text-orange-300">secondary</span>: <span class="text-green-400">'#424242'</span>,
            <span class="text-orange-300">success</span>: <span class="text-green-400">'#4CAF50'</span>,
            <span class="text-orange-300">warning</span>: <span class="text-green-400">'#FFC107'</span>,
            <span class="text-orange-300">info</span>: <span class="text-green-400">'#2196F3'</span>,
            <span class="text-orange-300">error</span>: <span class="text-green-400">'#FF5252'</span>
          }
        }
      }
    }
  }
})</pre>
          </div>
          <div class="flex gap-2 mt-3">
            <VChip
              color="primary"
              size="small"
              class="bg-primary text-white px-3 py-1 rounded-full text-xs"
              >light tema</VChip
            >
            <VChip
              color="secondary"
              size="small"
              class="bg-secondary text-white px-3 py-1 rounded-full text-xs"
              >podrazumevana</VChip
            >
          </div>
        </VCard>
      </div>

      <!-- Sekcija: Noseće komponente -->
      <h2 class="text-2xl font-bold text-grey-darken-3 mb-4">
        🧰 Noseće Vuetify komponente
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Dugmad -->
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm border border-grey-lighten-2"
        >
          <h3 class="text-lg font-semibold mb-3 text-grey-darken-2">
            🔘 Dugmad
          </h3>
          <div class="flex flex-wrap gap-2">
            <VBtn color="primary" variant="flat">primarni</VBtn>
            <VBtn color="secondary" variant="outlined">outline</VBtn>
            <VBtn color="success" variant="elevated">elevated</VBtn>
            <VBtn color="warning" variant="text">text</VBtn>
            <VBtn color="error" size="small" icon>
              <span class="text-lg">❤️</span>
            </VBtn>
            <VBtn color="info" disabled>disabled</VBtn>
            <VBtn color="primary" variant="tonal">tonal</VBtn>
          </div>
        </VCard>

        <!-- Forma -->
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm border border-grey-lighten-2"
        >
          <h3 class="text-lg font-semibold mb-3 text-grey-darken-2">
            ✏️ Forma
          </h3>
          <VTextField
            label="Ime"
            variant="outlined"
            density="compact"
            class="mb-3"
          />
          <VSelect
            label="Izbor"
            :items="['Opcija A', 'Opcija B', 'Opcija C']"
            variant="outlined"
            density="compact"
            class="mb-3"
          />
          <VCheckbox
            label="Prihvatam uslove"
            hide-details
            density="compact"
            class="mb-2"
          />
          <VSwitch
            label="Obaveštenja"
            color="success"
            density="compact"
            class="mb-3"
          />
          <VBtn color="primary" variant="flat" block>Pošalji</VBtn>
        </VCard>

        <!-- Tabela -->
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm border border-grey-lighten-2"
        >
          <h3 class="text-lg font-semibold mb-3 text-grey-darken-2">
            📊 Tabela
          </h3>
          <VTable density="compact" hover class="w-full text-sm">
            <thead>
              <tr class="bg-grey-lighten-5">
                <th class="text-left p-2">Ime</th>
                <th class="text-left p-2">Status</th>
                <th class="text-left p-2">Akcija</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-grey-lighten-2">
                <td class="p-2">Ana</td>
                <td class="p-2">
                  <VChip
                    color="success"
                    size="x-small"
                    class="bg-success text-white px-2 py-0.5 rounded-full text-xs"
                    >aktivan</VChip
                  >
                </td>
                <td class="p-2">
                  <VBtn size="x-small" variant="text" icon>
                    <span class="text-sm">✏️</span>
                  </VBtn>
                </td>
              </tr>
              <tr class="border-b border-grey-lighten-2">
                <td class="p-2">Marko</td>
                <td class="p-2">
                  <VChip
                    color="warning"
                    size="x-small"
                    class="bg-warning text-white px-2 py-0.5 rounded-full text-xs"
                    >čekanje</VChip
                  >
                </td>
                <td class="p-2">
                  <VBtn size="x-small" variant="text" icon>
                    <span class="text-sm">✏️</span>
                  </VBtn>
                </td>
              </tr>
              <tr>
                <td class="p-2">Jelena</td>
                <td class="p-2">
                  <VChip
                    color="error"
                    size="x-small"
                    class="bg-error text-white px-2 py-0.5 rounded-full text-xs"
                    >neaktivan</VChip
                  >
                </td>
                <td class="p-2">
                  <VBtn size="x-small" variant="text" icon>
                    <span class="text-sm">✏️</span>
                  </VBtn>
                </td>
              </tr>
            </tbody>
          </VTable>
          <div class="flex flex-wrap gap-2 mt-3">
            <VChip
              color="primary"
              variant="flat"
              size="small"
              class="bg-primary text-white px-3 py-1 rounded-full text-xs"
              >filter</VChip
            >
            <VChip
              color="secondary"
              variant="outlined"
              size="small"
              class="border-secondary text-secondary px-3 py-1 rounded-full text-xs"
              >svi</VChip
            >
            <VChip
              color="success"
              variant="tonal"
              size="small"
              class="bg-success-lighten-5 text-success px-3 py-1 rounded-full text-xs"
              >aktuelni</VChip
            >
          </div>
        </VCard>
      </div>

      <!-- Sekcija: Dodatne komponente -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm border border-grey-lighten-2"
        >
          <h3 class="text-lg font-semibold mb-3 text-grey-darken-2">
            📌 Dodatni elementi
          </h3>
          <VAlert
            type="success"
            variant="tonal"
            class="mb-3 p-3 bg-success-lighten-5 border-l-4 border-success rounded"
          >
            <strong class="text-success">✅ Uspeh!</strong> Radnja je izvršena.
          </VAlert>
          <VAlert
            type="warning"
            variant="outlined"
            class="mb-3 p-3 border-warning rounded"
          >
            ⚠️ Upozorenje: proverite unos.
          </VAlert>
          <VProgressLinear indeterminate color="primary" class="mt-3" />
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
                >3</span
              >
            </div>
          </div>
          <VRating
            v-model="rating"
            color="warning"
            active-color="warning"
            class="mt-2"
          />
        </VCard>

        <VCard
          variant="outlined"
          class="p-4 rounded-xl shadow-sm border border-grey-lighten-2"
        >
          <h3 class="text-lg font-semibold mb-3 text-grey-darken-2">
            📐 Layout & navigacija
          </h3>
          <VTabs
            v-model="tab"
            color="primary"
            align-tabs="center"
            class="mb-2 border-b border-grey-lighten-2"
          >
            <VTab value="1">📄 Tab 1</VTab>
            <VTab value="2">⚙️ Tab 2</VTab>
            <VTab value="3">🔧 Tab 3</VTab>
          </VTabs>
          <VWindow v-model="tab" class="mt-2 p-3 bg-grey-lighten-5 rounded-lg">
            <VWindowItem value="1"
              >Sadržaj prvog taba – osnovne informacije.</VWindowItem
            >
            <VWindowItem value="2"
              >Drugi tab – detalji konfiguracije.</VWindowItem
            >
            <VWindowItem value="3">Treći tab – dodatne opcije.</VWindowItem>
          </VWindow>
          <div class="h-px bg-grey-lighten-2 my-3"></div>
          <VBtnToggle v-model="toggle" divided color="primary" group>
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
          <div class="h-px bg-grey-lighten-2 my-3"></div>
          <VPagination
            v-model="page"
            :length="5"
            rounded="circle"
            size="small"
            color="primary"
          />
        </VCard>
      </div>

      <!-- Footer -->
      <div
        class="border-t border-grey-lighten-2 pt-4 flex flex-wrap justify-between items-center"
      >
        <span class="text-sm text-grey-darken-1"
          >Vuetify 3 · Nuxt 3 · Tailwind CSS</span
        >
        <div class="flex gap-2">
          <VChip
            color="primary"
            size="small"
            variant="outlined"
            class="border-primary text-primary px-3 py-1 rounded-full text-xs"
            >v3.7.4</VChip
          >
          <VChip
            color="secondary"
            size="small"
            variant="text"
            class="text-grey-darken-1 px-3 py-1 rounded-full text-xs"
            >CDN</VChip
          >
        </div>
      </div>
    </div>
  </AppBoxBase>
</template>
