<template>
  <v-btn
    color="#252726"
    @click="dialog = true"
    class="mx-3"
    size="small"
    variant="text"
    rounded
    prepend-icon="mdi-share-variant-outline"
    style="text-transform: capitalize"
    >Share
  </v-btn>

  <v-dialog v-model="dialog" rounded max-width="500">
    <v-card style="border-radius: 12px !important">
      <v-card-title
        class="text-center"
        style="border-bottom: 1px solid #e0e0e0; font-weight: 400"
      >
        <v-icon size="18" class="">mdi-share-variant-outline</v-icon>
        <span class="ml-1">Share</span>
        <v-btn
          class="float-right"
          icon
          size="small"
          variant="flat"
          @click="dialog = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <div class="mb-4">
          <p style="font-size: 95%; font-weight: 500" class="mb-1">Share on</p>
          <v-btn
            @click="shareOnWhatsApp"
            variant="flat"
            size="small"
            class="mr-2"
            color="#DEE5F1"
            icon
          >
            <v-icon x-large color="#3D3D3D">mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn
            @click="shareOnTwitter"
            variant="flat"
            size="small"
            class="mr-2"
            color="#DEE5F1"
            icon
          >
            <v-icon x-large color="#3D3D3D">mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            @click="shareOnLinkedIn"
            variant="flat"
            size="small"
            class="mr-2"
            color="#DEE5F1"
            icon
          >
            <v-icon x-large color="#3D3D3D">mdi-linkedin</v-icon>
          </v-btn>
        </div>

        <p style="font-size: 90%; font-weight: 500" class="mb-2 mt-3">
          Share Link
        </p>
        <div class="d-flex align-center justify-space-between mb-2 mt-1">
          <v-text-field
            variant="outlined"
            v-model="url"
            rounded
            readonly
            outlined
            bg-color="#F5F8FC"
            base-color="#DEE5F1"
            density="compact"
          />
          <v-btn
            icon
            @click="copyLink"
            class="mt-n5 ml-3"
            size="small"
            color="#F5F8FC"
            style="border: 1px solid #dee5f1"
            variant="flat"
          >
            <v-icon @click="copyLink">mdi-content-copy</v-icon>
          </v-btn>
        </div>
        <!--  -->
        <v-alert
          v-if="alert.show"
          class="pa-2 mb-4 mt-n4"
          :type="alert.type"
          variant="outlined"
          rounded
          dense
          dismissible
        >
          {{ alert.message }}</v-alert
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
const dialog = ref(false);

const url = ref(window?.location.href);
const alert = ref({
  show: false,
  type: "",
  message: "",
});

const copyLink = () => {
  navigator.clipboard
    .writeText(url.value)
    .then(() => {
      alert.value = {
        show: true,
        type: "success",
        message: "Link copied to clipboard!",
      };
      setTimeout(() => (alert.value.show = false), 1000);
    })
    .catch((err) => {
      alert.value = { show: true, type: "error", message: "Failed to copy!" };
      setTimeout(() => (alert.value.show = false), 1000);
    });
};

const content = `
🎉 Exciting News! 🎉
I've just published a new codelab. 😃 #Gradus

If you want to learn through practice, join me in this interactive session!

Check it out here ➡️ ${url.value}
`;

const whatsappContent = `
Big Announcement Alert!

Breaking News!

I'm thrilled to share that a brand new codelab is now live! Dive into the world of #Gradus and join me for an engaging interactive session where we learn by doing!

Ready to embark on this coding adventure? Don't miss out! Check it out now: 
${url.value}
`;

const shareOnWhatsApp = () => {
  const encodedUrl = encodeURIComponent(whatsappContent);
  window.open(`https://wa.me/?text=${encodedUrl}`, "_blank");
};

const shareOnTwitter = () => {
  const encodedUrl = encodeURIComponent(content);
  window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}`, "_blank");
};

const shareOnLinkedIn = () => {
  const encodedUrl = encodeURIComponent(content);
  window.open(
    `https://www.linkedin.com/feed/?shareActive=true&text=${encodedUrl}`,
    "_blank"
  );
};
</script>
