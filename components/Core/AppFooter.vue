<template>
  <v-container
    fluid
    style="width: 100%; height: 45px; border-top: 1px solid #e8f0fe"
    class="mb-0 bg-white"
  >
    <v-row justify="center" align="center">
      <v-col md="6" cols="3">
        <a
          href="https://github.com/oss-labs/gradus"
          target="_blank"
          class="mt-3 mb-0"
        >
          <NuxtImg
            style="width: 15vh"
            :src="'/donotremove/build-with-gradus.svg'"
          />
        </a>
      </v-col>
      <v-col md="6" cols="9" class="text-right">
        <NuxtLink style="font-size: 80%" class="ml-5" to="/"
          >Privacy & Policy</NuxtLink
        >
        <NuxtLink style="font-size: 80%" class="ml-5" to="/"
          >Terms & Conditions</NuxtLink
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>