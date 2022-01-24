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

    <!-- Chatbot Button -->
    <v-btn to="/Chatbot" value="chatbot">
      <span>Chatbot</span>
      <v-icon>mdi-robot</v-icon>
    </v-btn>

    <!-- Erklärungsbutton -->
    <v-btn to="/Erklärung" value="erklärung">
      <span>Discription</span>
      <v-icon>mdi-newspaper</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Navibar",
  data: () => ({ value: 1 }),                  //defines value for switching the active button
}
</script>

<style scoped>
</style>