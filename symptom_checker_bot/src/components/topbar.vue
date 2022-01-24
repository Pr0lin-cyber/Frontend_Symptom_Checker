<template>
  <v-app-bar
      dense
      elevation="4"
      flat
      fixed
      app
  >

    <v-btn to="/profil" value="profil">
      <span>Profil</span>
      <v-icon>mdi-profile</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: "topbar"
}
</script>

<style scoped>
.buttons{
  float: left;

}
</style>