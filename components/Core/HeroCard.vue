<template>
  <v-container fluid style="background-color: #e8f0fe">
    <v-row justify="center" align="center">
      <v-col md="11" class="px-0">
        <v-container fluid>
          <v-row justify="center" align="center">
            <v-col md="8" cols="12">
              <h1 style="font-size: xx-large">Welcome to {{ config.name }}</h1>
              <p class="mb-3">
                {{ config.dsec }}
              </p>
              <CoreSocialMedia :social="config.social" />
            </v-col>
            <v-col md="4" cols="12" class="text-center">
              <NuxtImg
                width="300"
                :src="'/donotremove/gradus-background.svg'"
              />
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