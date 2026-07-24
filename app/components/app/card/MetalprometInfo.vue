<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

// @@eos
</script>

<template>
  <div
    class="max-w-md mx-auto my-8 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1"
  >
    <img
      src="/metalni-profili.jpg"
      alt="Metalni profili - Metalpromet Mladenovac"
      class="w-full h-48 object-cover block bg-gray-200"
    />

    <div class="p-6 md:p-7">
      <h1
        class="text-2xl md:text-3xl font-semibold text-slate-800 mb-1 tracking-tight"
      >
        Metalpromet Mladenovac
      </h1>
      <p
        class="text-base text-gray-600 mb-4 pb-3 border-b-2 border-slate-100 font-medium"
      >
        Proizvodnja metalnih profila za građevinu
      </p>

      <div class="flex flex-col gap-2">
        <div class="flex items-baseline text-sm md:text-base">
          <span class="font-medium text-slate-600 min-w-[90px] flex-shrink-0"
            >Vlasnik:</span
          >
          <span class="text-slate-800 font-medium">Dušan Milenković</span>
        </div>
        <div class="flex items-baseline text-sm md:text-base">
          <span class="font-medium text-slate-600 min-w-[90px] flex-shrink-0"
            >Email:</span
          >
          <a
            href="mailto:dusan.milenkovic@metalpromet.rs"
            class="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
          >
            dusan.milenkovic@metalpromet.rs
          </a>
        </div>
        <div class="flex items-baseline text-sm md:text-base">
          <span class="font-medium text-slate-600 min-w-[90px] flex-shrink-0"
            >Kancelarija:</span
          >
          <a
            href="mailto:office@metalpromet.rs"
            class="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
          >
            office@metalpromet.rs
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
