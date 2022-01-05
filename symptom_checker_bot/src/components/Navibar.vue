<template>
  <v-bottom-navigation
      class = "navigation_bar"
      grow
      fixed
      app
  >


    <!-- Homebutton -->
    <v-btn to="/" value="home">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <!-- Erklärungsbutton -->
    <v-btn to="/Erklärung" value="erklärung">
      <span>Scan</span>
      <v-icon>mdi-camera</v-icon>
    </v-btn>

    <!-- Chatbot Button -->
    <v-btn to="/Chatbot" value="chatbot">
      <span></span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Tab_bar",
  data: () => ({ value: 1 }),                  //defines value for switching the active button
}
</script>

<style scoped>
</style>