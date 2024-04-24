<template>
  <Head>
      <Title>Gradus</Title>
      <Meta name="description" content="This is Descriptions" />
  </Head>

  <v-main>
    <v-app-bar :elevation="0">
      <!-- <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template> -->

      <v-app-bar-title>
        <v-img src="/donotremove/logo.svg" width="120"></v-img>
      </v-app-bar-title>
    </v-app-bar>
    <v-container fluid style="background-color: #e8f0fe">
      <v-row justify="center" align="center">
        <v-col md="11">
          <v-container fluid>
            <v-row justify="center" align="center">
              <v-col md="8" cols="12">
                <h1 style="font-size: xx-large">Welcome to CodeLabs</h1>
                <p class="mb-3">
                  This is a collection of well curated articles
                </p>

                <v-btn variant="flat" size="small" class="mr-2 mb-2" icon
                  ><v-icon size="large">mdi-linkedin</v-icon></v-btn
                >
                <v-btn variant="flat" size="small" class="mr-2 mb-2" icon
                  ><v-icon size="large">mdi-twitter</v-icon></v-btn
                >
                <v-btn variant="flat" size="small" class="mr-2 mb-2" icon
                  ><v-icon size="large">mdi-github</v-icon></v-btn
                >
                <v-btn variant="flat" size="small" class="mr-2 mb-2" icon
                  ><v-icon size="large">mdi-web</v-icon></v-btn
                >
                <v-btn variant="flat" size="small" class="mr-2 mb-2" icon
                  ><v-icon size="large">mdi-youtube</v-icon></v-btn
                >
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
        <v-col md="11">
          <v-row>
            <v-col md="2">
              <v-text-field
                v-model="search.value"
                hide-details="auto"
                rounded
                variant="outlined"
                clearable
                bg-color="#E8F0FE"
                append-inner-icon="mdi-magnify"
                density="compact"
                label="Search for any topic"
              ></v-text-field>
            </v-col>
            <v-col md="2">
              <v-select
                label="Choose Topic"
                density="compact"
                variant="outlined"
                multiple
                rounded
                dense
                bg-color="#E8F0FE"
                prepand-inner-icon="mdi-magnify"
                :items="['firebase', 'nodejs']"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- Search Header -->

      <!-- Search -->
      <v-row justify="center" align="center">
        <v-col md="11">
          <v-container fluid>
            <div v-if="Object.keys(res).length > 0">
              <v-row>
                <v-col md="4" v-for="article in res.value" :key="index">
                  <v-card>
                    <v-img :src="article.image"></v-img>
                    <v-card-title>{{ article.title }}</v-card-title>
                    <v-card-text>
                      <p>{{ article.description }}</p>
                      <v-chip
                        v-for="(tag, index) in article.tags"
                        :key="index"
                        >{{ tag }}</v-chip
                      >
                      <br />
                      <br />
                      <NuxtLink :to="article._path"
                        ><v-btn variant="tonal">asd</v-btn></NuxtLink
                      >
                    </v-card-text>
                    <!-- {{ article }} -->

                    <!-- <v-btn :to="article._path"></v-btn> -->
                  </v-card>
                </v-col>
              </v-row>
              <!-- <NuxtLink v-for="r in res.value" :to="r.id">{{ r.title }}</NuxtLink> -->
            </div>
          </v-container>
        </v-col>
      </v-row>
      <!-- Search -->

      <!-- All Data -->
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="11" class="py-0 my-0">
          <v-row class="py-0 my-0">
            <ContentList path="/" v-slot="{ list }" :query="{ draft: false }">
              <v-col
                md="2"
                cols="12"
                v-for="article in list"
                :key="article._path"
              >
                <v-card elevation="0">
                  <v-img :src="article.image"></v-img>
                  <v-card-title>{{ article.title }}</v-card-title>
                  <v-card-text>
                    <p class="mb-2">{{ article.description }}</p>
                    <v-chip
                      size="small"
                      class="mr-2"
                      v-for="(tag, index) in article.tags"
                      :key="index"
                      >{{ tag }}</v-chip
                    >
                    <br />
                    <br />
                    <NuxtLink :to="article._path"
                      ><v-btn variant="tonal">asd</v-btn></NuxtLink
                    >
                  </v-card-text>
                  <!-- {{ article }} -->

                  <!-- <v-btn :to="article._path"></v-btn> -->
                </v-card>
              </v-col>
            </ContentList>
          </v-row>
        </v-col>
      </v-row>
      <!-- All Data -->
    </v-container>
  </v-main>
</template>

<script setup>
import debounce from "lodash.debounce";

//Filter by tags
const data = await queryContent("")
  .where({ tags: ["firebase", "node.js"] })
  .find();

const search = reactive({
  value: "",
});
const res = ref([]);
watch(
  search,
  debounce(async () => {
    if (search.value.length < 3) {
      res.value = [];
      return;
    }
    res.value = await searchContent(search.value);
    console.log(res.value);
  }, 500)
);
</script>

<style></style>
