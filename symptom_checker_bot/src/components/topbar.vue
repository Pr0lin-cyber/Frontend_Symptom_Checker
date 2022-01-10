<template>
  <v-app-bar
      dense
      elevation="4"
      flat
      fixed
      app
  >
  <div class="buttons">
    <v-btn to="/settings" value="settings">
      <span>Einstellungen</span>
      <v-icon>mdi-settings</v-icon>
    </v-btn>

    <v-btn to="/profil" value="profil">
      <span>Profil</span>
      <v-icon>mdi-profile</v-icon>
    </v-btn>
  </div>
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