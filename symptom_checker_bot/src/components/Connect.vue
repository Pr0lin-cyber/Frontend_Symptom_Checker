<template>

</template>

<script>
import axios from 'axios';
export default {
  name: "Connect",
  data(){
    return{

    }
  },
  methods: {
    getResponse(){
      const path = 'http://localhost:5000/connect';
      axios.get(path)
      .then ((res) => {
        console.log(res.data)
        this.msg = res.data;
      })
      .catch ((err) => {
        console.error(err);
      })
    },
  },
  created(){
    this.getResponse();
  }
}
</script>

<style scoped>

</style>