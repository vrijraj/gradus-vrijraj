<template>
  <v-container fluid class="bg-primary my-0 py-0">
    <v-row justify="center" align="center" class="my-0 py-0">
      <v-col md="11" class="ma-0 pa-0">
        <v-container fluid class="">
          <v-row justify="center" align="center">
            <v-col md="10" cols="9">
              <p style="font-size: 110%; font-weight: 500" class="mb-0">
                {{ config.config.banner.title }}
              </p>
              <p style="font-size: 90%">{{ config.config.banner.content }}</p>
            </v-col>
            <v-col md="2" cols="3">
              <v-btn
                :href="config.config.banner.link"
                size="x-small"
                rounded
                variant="tonal"
                target="_blank"
                >See More</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { config } from "../assets/config.js";
</script>

<style>
</style>