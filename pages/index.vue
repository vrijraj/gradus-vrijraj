<template>
  <v-app-bar :elevation="0">
    <v-app-bar-title>
      <NuxtImg src="/donotremove/logo.svg" width="120" />
    </v-app-bar-title>
    <v-progress-linear
      :active="appLoading"
      :indeterminate="true"
      color="primary"
      absolute
      bottom
    ></v-progress-linear>
  </v-app-bar>
  <v-main>
    <CoreAppBanner v-if="config.config.banner.status" />
    <CoreHeroCard />
    <v-container
      class="bg-white"
      fluid
      style="border-bottom: 1px solid #e8f0fe !important"
    >
      <v-row justify="center" align="center">
        <v-col md="11">
          <v-row>
            <v-col md="3" lg="2">
              <v-text-field
                v-model="search"
                hide-details="auto"
                rounded
                variant="outlined"
                clearable
                bg-color="#E8F0FE"
                append-inner-icon="mdi-magnify"
                density="compact"
                @click:clear="search = ''"
                label="Search for any topic"
              ></v-text-field>
            </v-col>
            <v-col md="3" lg="3">
              <v-select
                v-model="filter"
                chips
                closable-chips
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
    </v-container>
    <v-container fluid class="my-0 py-0">
      <!-- Loading -->
      <v-row
        justify="center"
        align="center"
        class="px-0 mx-0 mt-3"
        v-if="loading"
      >
        <v-col md="11" class="px-0">
          <span style="font-size: 80%">Getting data..</span>
          <v-progress-linear
            rounded
            indeterminate
            color="primary"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <!-- loading -->

      <!-- Cards -->
      <v-row
        justify="center"
        align="center"
        class="px-0 mx-0 mt-5"
        v-else-if="res != null && Object.keys(res).length"
      >
        <v-col md="11" class="px-0">
          <v-container fluid class="px-0">
            <v-row class="">
              <v-col
                md="3"
                lg="3"
                sm="4"
                cols="12"
                v-for="(article, index) in res"
                :key="index"
              >
                <CoreLabCard :item="article" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <!-- Cards -->

      <!-- No Data -->
      <v-row justify="center" align="center" class="mx-0 mt-3" v-else>
        <v-col md="11" class="px-0">
          <p>
            <v-icon class="mt-n1 mr-2">mdi-alert-octagram-outline</v-icon>No
            Data Found!
          </p>
        </v-col>
      </v-row>
      <!-- No Data -->
    </v-container>
  </v-main>

  <!-- Footer -->
  <CoreAppFooter />
  <!-- Footer -->
</template>

<script setup>
import { config } from "../assets/config.js";
import { useDebounce } from "@vueuse/core";

useHead({
  title: `${config.name} - Gradus`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",

  meta: [
    { name: "description", content: config.desc },
    { property: "og:title", content: config.name + " - Gradus" },
    {
      property: "og:description",
      content: config.desc,
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: config.hostUrl,
    },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: config.thumbnail },
  ],
});

const filter = ref([]);
const topics = ref(config.filters);
const search = ref("");
const debouncedSearch = useDebounce(search, 500);
const res = ref({});
const query = ref({});
const loading = ref(false);

const appLoading = useAppLoading();

const fetchData = async () => {
  const { data } = await useAsyncData("allData", () =>
    queryContent().where(query.value).sort({ date: -1 }).find()
  );

  res.value = data._rawValue;
  loading.value = false;
  appLoading.value = false;
};

watchEffect(async () => {
  loading.value = true;
  appLoading.value = true;
  const conditions = [{ draft: false }];

  if (debouncedSearch.value.length >= 3) {
    conditions.push({
      $or: [
        { title: { $icontains: debouncedSearch.value } },
        { description: { $icontains: debouncedSearch.value } },
      ],
    });

    if (filter.value.length) {
      conditions.push({ $or: [{ tags: { $contains: filter.value } }] });
    }
  } else if (filter.value.length) {
    conditions.push({ $or: [{ tags: { $contains: filter.value } }] });
  }

  query.value = conditions.length > 1 ? { $and: conditions } : conditions[0];
  fetchData();
});

onMounted(async () => {
  fetchData();
});
</script>

<style></style>
