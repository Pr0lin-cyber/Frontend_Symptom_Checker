<template>
  <div>
    <div class = topsite>
      <div>
        <img id="logo"
             src=@/assets/Logo.png
             width="100"
             height="100"
             alt="Logo.png">

        <div class="title">Symptomchecker Chatbot</div>
      </div>
    </div>


    <div class="middle section">

    </div>

    <div class="ground section">
      <Navibar></Navibar>
    </div>
  </div>

</template>

<script>
import Navibar from "@/components/Navibar";

export default {
name: "homescreen",
components: {Navibar},

}
</script>

<style scoped>
.title {
  padding: 35px; /*  creates a padding of 23px around the object  */
  font-family: Roboto;
  font-size: 40px;
  text-align: center; /*  centers element or text  */
  color: #676767; /*  sets the color to grey  */
}
#logo{
  padding: 10px;
  float: left;
}
.topsite{
  text-align: center;           /*  aligns text to the left  */
  float: top;                 /*  moves components to the top  */
  position: fixed;            /*  fixed position  */
  width: 100%;                /*  component fills the whole width  */
  padding: 5px;               /*  creates a padding of 5px around the object  */
  background-color: white;    /*  sets the background color to white  */
  display: block;             /*  creates a block component  */
}
</style>