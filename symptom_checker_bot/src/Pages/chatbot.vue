<template>
  <div>
    <topbar></topbar>
  </div>
  <div>
    <Navibar></Navibar>
  </div>
</template>

<script>
import Navibar from "@/components/Navibar";
import Topbar from "@/components/topbar";
export default {
name: "chatbot",
  components: {Topbar, Navibar}
}
</script>

<style scoped>

</style>