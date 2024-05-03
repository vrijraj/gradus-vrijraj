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
        <v-col md="11" class="px-0">
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
    <v-container fluid class="py-0">
      <!-- Search Header -->
      <v-row
        justify="center"
        align="center"
        class="bg-white"
        style="border-bottom: 1px solid #e8f0fe"
      >
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
            <v-col md="3" lg="2">
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

      <!-- All Data -->
      <v-row
        justify="center"
        align="center"
        class="px-0 mx-0 mt-5"
        v-if="Object.keys(res).length > 0"
      >
        <v-col md="11" class="px-0">
          <v-container fluid class="px-0">
            <v-row class="">
              <v-col
                md="3"
                lg="3"
                sm="4"
                cols="12"
                v-for="(article, index) in res.value"
                :key="index"
              >
                <CoreLabCard :item="article" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="px-0 mx-0 mt-3" v-else>
        <v-col md="11" class="px-0">
          <p>Nothing to show!</p>
        </v-col>
      </v-row>
      <!-- All Data -->

      <!-- All Data -- old -->
      <!-- <v-row
        justify="center"
        align="center"
        class="py-0 my-0 mt-5"
        v-if="!Object.keys(res).length || !search.length"
      >
        <v-col md="11" class="py-0 my-0">
          <v-row class="py-0 my-0">
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
      </v-row> -->
      <!-- All Data -->
    </v-container>
  </v-main>
  <!-- <v-footer class="bg-white d-none d-md-flex d-lg-flex d-lg-flex d-xxl-flex" height="45" style="width: 100%;border-top: 1px solid #e0e0e0;">
    <div class="d-flex justify-space-between mb-0 " style="width: 100%;">
      <v-sheet class="ma-0 pa-1 align-self-center">
      <a href="http://" target="_blank">
        <v-img width="130" :src="'/donotremove/build-with-gradus.svg'"></v-img>
      </a>
      </v-sheet>
      <v-sheet class="ma-0 pa-1 align-self-center">
        <NuxtLink style="font-size: 80%" class="ml-5" to='/'>Privacy & Policy</NuxtLink>
        <NuxtLink style="font-size: 80%" class="ml-5" to='/'>Terms & Conditions</NuxtLink>
      </v-sheet>
    </div>
  </v-footer> -->
</template>

<script setup>
import codeLabData from "/assets/data/core.json";
import { useDebounce } from "@vueuse/core";

const filter = ref([]);
const topics = ref(codeLabData.filters);
const search = ref("");
const debouncedSearch = useDebounce(search, 500);
const res = ref({});
const query = ref({});

const fetchData = async () => {
  const { data } = await useAsyncData("allData", () =>
    queryContent().where(query.value).sort({ title: 1 }).find()
  );

  res.value = data;
};

watchEffect(async () => {
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
