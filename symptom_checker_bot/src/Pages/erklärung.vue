<template>
  <div>
   <div class = "top">
     <topbar></topbar>
     <div class="title">Willkommen bei Symptom-Checker</div>

     <div class="middle_section">
       <img id="logo"
            src=@/assets/Logo.png
            width="150"
            height="150"
            alt="Logo.png">
     </div>
   </div>
    <p class= text_mid>
      Hallo XY,
      der Symptom-Checker kann dir helfen, <br>
      deine Symptome einzuordnen und einem <br>
      Krankheitsbild zuzuordnen. <br>
      Dennoch ersetzt der Symptom-Checker <br>
      keinen Arztbesuch. <br>
      <br>
      Möchtest du dennoch fortfahren?
      <br>
      <br>
      <br>
      <br>
    </p>
    <p class="btnwrap">
    <button type="button">  Ja, ich akzeptiere die Nutzung.  </button>
    <br>
    <br>
    <button type="button">  Nein, ich gehe lieber direkt zum Arzt.  </button>
    </p>
    <div>
      <Navibar></Navibar>
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
name: "erklärung",
  components: {Topbar, Navibar}
}
</script>

<style scoped>
.btnwrap {
  text-align: center;
}

button {
  display: inline-block;
  font-family: Roboto,serif;
  border: 0.2px solid #FFC0CB;
  color: black;
  background-color: #FFE4E1;
  font-size: 14px;
  border-radius: 12px;
  padding: 2px 4px;
  text-align: center;
}
.title {
  padding: 35px; /*  creates a padding of 23px around the object  */
  font-family: Roboto, serif;
  font-size: 40px;
  text-align: center; /*  centers element or text  */
  color: #676767; /*  sets the color to grey  */
}
.text_mid {
  font-family: Roboto,serif;
  font-size: 14px;
  text-align: center;
}

.middle_section {
  display: block;
  text-align: center;
}


</style>