<template>
  <!-- <v-alert type="info" variant="tonal" >
    <template v-slot:title ><p class="my-0">Outlined Alert</p> </template>
    <slot style="line-height: 0 !important;" class="my-0" />
  </v-alert> -->
  <v-card style="background-color: #E6F4EA;border: 1px solid #137333;" elevation="0" class="pa-3">
   <b>Note:</b>
    <p style="line-height: normal;padding: 0 !important;"><slot/></p>
  </v-card>
</template>