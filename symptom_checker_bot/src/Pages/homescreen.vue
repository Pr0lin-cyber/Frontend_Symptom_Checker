<template>
  <div>
    <div>
      <div>
        <div id="topbar"><topbar></topbar></div>


        <div class="title">Willkommen bei Symptom-Checker</div>
      </div>
    </div>


    <div class="middle_section">
      <img id="logo"
           src=@/assets/Logo.png
           width="300"
           height="300"
           alt="Logo.png">
      <div>

      </div>
    </div>

    <div class="ground section">
      <Navibar></Navibar>
    </div>
  </div>

</template>

<script>
import Navibar from "@/components/Navibar";
import Topbar from "@/components/topbar";

export default {
name: "homescreen",
components: {Topbar, Navibar},

}
</script>

<style scoped>
.title {
  padding: 35px; /*  creates a padding of 23px around the object  */
  font-family: Roboto,serif;
  font-size: 40px;
  text-align: center; /*  centers element or text  */
  color: #676767; /*  sets the color to grey  */
}
#logo{
  padding: 10px;

}

.middle_section{
  position: center;

}
</style>