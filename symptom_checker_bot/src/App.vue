<template>
    <v-main>
      <router-view/>
    </v-main>
</template>

<script>

export default {
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },

  methods: {
    async accept() {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({type: "SKIP_WAITING"});
    }
  },
}

</script>
