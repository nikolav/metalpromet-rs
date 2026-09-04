<script setup lang="ts">
import { useDisplay } from "vuetify";
import { z } from "zod";

import { useDocs } from "~/composables/docs/use-docs";
import { useForm } from "~/composables/forms/use-form";

defineEmits<{
  close: [];
}>();

const { $$ } = useNuxtApp();
const d = useDisplay();
const ddInquiries = useDocs("inquiries");

const compact = (data: any) =>
  $$.transform(
    data,
    (res, value, field) => {
      if ($$.isPresent(value)) {
        res[field] = value;
      }
      return res;
    },
    <any>{},
  );

const form = useForm(
  "FORM:602904dc-da98-532f-866b-e1b37290c5ea",
  {
    name: z.string().nonempty(),
    body: z.string().nonempty(),
    email: z.nullish(z.email()),
    phone: z.nullish(z.string()),
  },
  {
    onSubmit: async (data) => {
      const dd = compact(data);
      $$.onDebug({ "form:data": dd });
      if ($$.isEmpty(dd)) return;
      await ddInquiries.commit(dd);
    },
  },
);

// @@eos
</script>

<template>
  <AppCardSectionPrimary
    class="component--AppFormContact"
    title="Kontakt"
    sub-title="Pošaljite upit"
    tile
    variant="text"
    :icon="{ icon: 'mdi:feather' }"
  >
    <AppBoxContainerCentered fluid>
      <VCardItem class="*pa-0">
        <template #prepend>
          <AppBtnPager
            @click="$emit('close')"
            prev
            variant="text"
            :props-icon="{
              size: '2rem',
            }"
            class="ma-2"
          />
        </template>
        <template #append v-if="!d.mobile.value">
          <AppBtnClose @click="$emit('close')" variant="text" />
        </template>
      </VCardItem>

      <VAlert
        type="info"
        tile
        :prominent="!d.mobile.value"
        color="surface-variant"
      >
        <template #text>
          <p class="indent-4">
            Pošaljite nam upit putem forme i otkrijte kako Metal-Promet može da
            unapredi vaš projekat. Naša ponuda obuhvata sve od izrade ograda,
            kapija, nadstrešnica i stepeništa, do uslužnog plastificiranja
            metala. Naš tim stručnjaka će vam rado pružiti rešenja po vašoj
            meri.
          </p>
        </template>
      </VAlert>

      <VForm
        id="FORM-00a06a3c-c117-5fb7-8503-c6c7f75cc38f"
        class="app-container-reset pa-0 ma-0"
        @submit.prevent="form.handle"
      >
        <VContainer fluid class="pa-0 ma-0">
          <VRow no-gutters>
            <VCol sm="4"
              ><VTextField
                placeholder="* Ime / Firma"
                type="text"
                variant="solo-filled"
                single-line
                clearable
                tile
                flat
                hide-details
                center-affix
                v-model="form.field.name!.value"
              >
                <template #prepend-inner>
                  <IconX icon="mdi:account" size="1.5rem" class="opacity-20" />
                </template> </VTextField
            ></VCol>
            <VCol sm="4"
              ><VTextField
                placeholder="Telefon"
                type="phone"
                variant="solo-filled"
                single-line
                clearable
                tile
                flat
                hide-details
                center-affix
                v-model="form.field.phone!.value"
              >
                <template #prepend-inner>
                  <IconX icon="mdi:phone" size="1.5rem" class="opacity-20" />
                </template> </VTextField
            ></VCol>
            <VCol sm="4"
              ><VTextField
                placeholder="Email"
                type="email"
                variant="solo-filled"
                single-line
                clearable
                tile
                flat
                hide-details
                center-affix
                v-model="form.field.email!.value"
              >
                <template #prepend-inner>
                  <IconX icon="mdi:at" size="1.5rem" class="opacity-20" />
                </template> </VTextField
            ></VCol>
          </VRow>
        </VContainer>

        <VTextarea
          auto-grow
          clearable
          tile
          flat
          hide-details
          variant="solo-filled"
          placeholder="* Upit..."
          v-model="form.field.body!.value"
        >
          <template #prepend-inner>
            <IconX icon="$edit" size="1.5rem" class="opacity-20" />
          </template>
        </VTextarea>

        <VCardActions
          class="pa-5"
          :class="{
            'justify-center !gap-16': !d.mobile.value,
            'flex-col items-center !gap-4 pb-12': d.mobile.value,
          }"
        >
          <VBtn variant="plain" type="button" @click="form.clear">
            <template #prepend>
              <IconX icon="$close" size="1.22rem" />
            </template>
            Poništi
          </VBtn>
          <VBtn
            class="px-4"
            size="large"
            variant="elevated"
            type="submit"
            :disabled="!form.valid.value"
          >
            <template #prepend>
              <IconX
                icon="mdi:send"
                size="1.33rem"
                class="-rotate-45 -translate-y-[2px]"
              />
            </template>
            Pošalji upit
          </VBtn>
        </VCardActions>
      </VForm>
    </AppBoxContainerCentered>
  </AppCardSectionPrimary>
</template>
<style lang="scss">
#FORM-00a06a3c-c117-5fb7-8503-c6c7f75cc38f .v-field__input {
  padding-inline-start: 1.22rem;
}
</style>
