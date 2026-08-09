<script setup lang="ts">
const icons = {
  calendar: "$calendar",
  cancel: "$cancel",
  checkboxIndeterminate: "$checkboxIndeterminate",
  checkboxOff: "$checkboxOff",
  checkboxOn: "$checkboxOn",
  clear: "$clear",
  close: "$close",
  complete: "$complete",
  delete: "$delete",
  delimiter: "$delimiter",
  dropdown: "$dropdown",
  edit: "$edit",
  error: "$error",
  expand: "$expand",
  file: "$file",
  first: "$first",
  info: "$info",
  last: "$last",
  loading: "$loading",
  menu: "$menu",
  minus: "$minus",
  next: "$next",
  plus: "$plus",
  prev: "$prev",
  radioOff: "$radioOff",
  radioOn: "$radioOn",
  ratingEmpty: "$ratingEmpty",
  ratingFull: "$ratingFull",
  ratingHalf: "$ratingHalf",
  sortAsc: "$sortAsc",
  sortDesc: "$sortDesc",
  subgroup: "$subgroup",
  success: "$success",
  unfold: "$unfold",
  warning: "$warning",
};
</script>
<template>
  <v-container>
    <v-row   dense>
      <v-col
        v-for="(icon, name) in icons"
        :key="name"
        cols="4"
        sm="3"
      >
        <v-card class="text-center pa-2" elevation="1">
          <div class="icon-wrapper">
            <IconX :icon="icon" size="32" />
          </div>
          <div class="mt-2 text-caption text--secondary">
            <code>{{ name }}</code>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
}

code {
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
}

.v-card:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>
