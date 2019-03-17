<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Render :soul="soul"></Render>
    <!-- <Test></Test> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      msg: "hello"
    };
  },
  mounted() {
    setInterval(() => {
      // this.apples.push({
      //   id: Math.random(),
      //   price: Math.random() * 2 + 3
      // })
      this.$store.commit("modifyData", { key: "temp1", val: parseFloat(Math.random().toFixed(2)) });
      this.$store.commit("modifyData", { key: "temp2", val: parseFloat(Math.random().toFixed(2)) });
    }, 2000);
    // setTimeout(()=>{
    //   this.$store.commit('editComputed', '{"mean":"(function(){return this.x-this.y})"}')
    // }, 2000)
  },
  computed: {
    ...mapGetters(["soul"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
