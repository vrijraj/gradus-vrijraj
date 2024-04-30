<template>
  <Head>
    <Title>{{ codeLabData.name }} | Gradus</Title>
    <Meta name="description" :content="codeLabData.desc" />
  </Head>
  <v-app-bar :elevation="0">
    <v-app-bar-title>
      <v-img src="/donotremove/logo.svg" width="120"></v-img>
    </v-app-bar-title>
  </v-app-bar>
  <v-main>
    <v-container fluid style="background-color: #e8f0fe">
      <v-row justify="center" align="center">
        <v-col md="11">
          <v-container fluid>
            <v-row justify="center" align="center">
              <v-col md="8" cols="12">
                <h1 style="font-size: xx-large">
                  Welcome to {{ codeLabData.name }}
                </h1>
                <p class="mb-3">
                  {{ codeLabData.dsec }}
                </p>
                <CoreSocialMedia :social="codeLabData.social" />
              </v-col>
              <v-col md="4" cols="12" class="text-center">
                <v-img
                  width="70%"
                  :src="'/donotremove/gradus-background.svg'"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <!-- Search Header -->
      <v-row
        justify="center"
        align="center"
        style="border-bottom: 1px solid #e8f0fe"
      >
        <v-col md="11" class="red">
          <v-row>
            <!-- <v-col md="2">
              <v-text-field
                v-model="search"
                hide-details="auto"
                rounded
                variant="outlined"
                clearable
                bg-color="#E8F0FE"
                append-inner-icon="mdi-magnify"
                density="compact"
                label="Search for any topic"
              ></v-text-field>
            </v-col> -->
            <v-col md="2">
              <v-select
                v-model="filter"
                label="Choose Topic"
                density="compact"
                variant="outlined"
                clearable
                rounded
                multiple
                bg-color="#E8F0FE"
                dense
                :items="topics"
                class="custom-bg-color"
                hide-details
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- Search Header -->

      <!-- Search -->
      <!-- <v-row justify="center" align="center">
        <v-col md="11">
          <v-container fluid>
            <div v-if="Object.keys(res).length > 0">
              <v-row>
                <v-col
                  md="4"
                  v-for="(article, index) in res.value"
                  :key="index"
                >
                  <CoreLabCard :item="article" />
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-col>
      </v-row> -->
      <!-- Search -->

      <!-- All Data -->
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="11" class="py-0 my-0">
          <v-row class="py-0 my-0">
            <!-- <CoreTaskbar /> -->
            <ContentList
              path="/"
              :query="{
                where: query,
              }"
            >
              <template v-slot="{ list }">
                <v-col
                  md="3"
                  lg="3"
                  sm="4"
                  cols="12"
                  v-for="article in list"
                  :key="article._path"
                >
                  <CoreLabCard :item="article" />
                </v-col>
              </template>
            </ContentList>
          </v-row>
        </v-col>
      </v-row>
      <!-- All Data -->
    </v-container>
  </v-main>
</template>

<script setup>
import codeLabData from "/assets/data/core.json";

const filter = ref([]);
const topics = ref(codeLabData.filters);

const query = ref({
  $and: [
    { draft: false },
    {
      $or: [{ tags: { $contains: filter } }],
    },
  ],
});

</script>

<style></style>
