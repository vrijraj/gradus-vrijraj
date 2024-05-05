<template>
  <v-navigation-drawer
    floating
    elevation="0"
    width="300"
	v-if="stepDrawer"
    style="background-color: #f5f8fc"
  >

	<slot></slot>
    <!-- Author -->
    <CoreAuthorCard :authors="authors" />
    <v-sheet class="d-flex mx-0 my-3" style="background-color: #f5f8fc">
      <v-sheet
        class="ma-0 pa-0 me-auto align-self-center"
        style="background-color: #f5f8fc"
      >
        <a href="http://" target="_blank">
          <NuxtImg width="130" :src="'/donotremove/build-with-gradus.svg'" />
        </a>
      </v-sheet>
      <v-sheet
        class="ma-0 pa-0 align-self-center"
        style="background-color: #f5f8fc"
      >
        <a
          href="mailto:vrijraj2396@gmail.com"
          class="mx-0"
          style="font-size: 80%"
        >
          <v-icon>mdi-bug-outline</v-icon> Report a Bug
        </a>
      </v-sheet>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script setup>
defineProps({
  toc: Object,
  authors: Array,
  stepDrawer: Boolean,
});
</script>
