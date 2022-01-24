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
           width="150"
           height="150"
           alt="Logo.png">
    </div>
    <p class = text_mid>
      Möchtest du herausfinden, <br>
      welche Krankheit sich hinter deinen <br>
      Symptomen verbergen könnte? <br>
      Dann check deine Symptome. <br>
      <br>
      <br>
    </p>
    <p class="btnwrap">
    <button type="button">  Symptome checken  </button>
    </p>

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
  font-family: Roboto, serif;
  font-size: 40px;
  text-align: center; /*  centers element or text  */
  color: #676767; /*  sets the color to grey  */
}

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

.text_mid {
  display: block;
  font-family: Roboto,serif;
  font-size: 14px;
  text-align: center;
}
.middle_section{
  display: block;
  text-align: center;

}
</style>