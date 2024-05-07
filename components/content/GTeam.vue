<template>
  <v-container fluid class="pa-0 my-4">
    <v-row>
      <v-col md="12" sm="12" cols="12">
        <p style="font-size: 20px" class="mb-0">Meet the Team</p>
      </v-col>
      <v-col md="3" sm="4" cols="6" v-for="(item, index) in team" :key="index">
        <v-card
          rounded="lg"
          style="border: 1px solid #dee5f1; border-radius: 12px !important"
          elevation="0"
          class="text-center"
        >
          <v-avatar color="" size="70" class="mt-4">
            <v-img :src="'/donotremove/team/' + item.img"></v-img>
          </v-avatar>
          <p style="font-weight: 500" class="my-3">{{ item.name }}</p>
          <v-btn
            v-if="item.social.linkedin.length"
            :href="item.social.linkedin"
            target="_blank"
            variant="flat"
            size="x-small"
            class="mr-1 mb-1"
            icon
            ><v-icon size="large">mdi-linkedin</v-icon></v-btn
          >
          <v-btn
            v-if="item.social.twitter.length"
            :href="item.social.twitter"
            target="_blank"
            variant="flat"
            size="x-small"
            class="mr-1 mb-1"
            icon
            ><v-icon size="large">mdi-twitter</v-icon></v-btn
          >
          <v-btn
            v-if="item.social.github.length"
            :href="item.social.github"
            target="_blank"
            variant="flat"
            size="x-small"
            class="mr-1 mb-1"
            icon
            ><v-icon size="large">mdi-github</v-icon></v-btn
          >
          <v-btn
            v-if="item.social.website.length"
            :href="item.social.website"
            target="_blank"
            variant="flat"
            size="x-small"
            class="mr-1 mb-1"
            icon
            ><v-icon size="large">mdi-web</v-icon></v-btn
          >
          <div class="my-3"></div>
        </v-card>
      </v-col>

      <v-col md="12" sm="12" cols="12">
        <p style="font-size: 20px" class="mb-2 mt-4">
          Thanks to our contributors
        </p>
        <v-chip
          v-for="(item, index) in contributors"
          :key="index"
          :href="item.link"
          size="small"
          target="_blank"
          class="mr-2 mb-2"
          >{{ item.name }}</v-chip
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import team from "../../assets/data/team.json";
import contributors from "../../assets/data/contributors.json";
</script>

<style>
</style>