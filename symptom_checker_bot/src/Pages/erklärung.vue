<template>
  <div>
   <div class = "top">
     <topbar></topbar>

     <div>
       <Navibar></Navibar>
     </div>
   </div>
 </div>
</template>

<script>
import Navibar from "@/components/Navibar";
import Topbar from "@/components/topbar";
export default {
name: "erklärung",
  components: {Topbar, Navibar}
}
</script>

<style scoped>

</style>