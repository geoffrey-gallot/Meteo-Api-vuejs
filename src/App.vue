<template>
  <div id="app">
    <div class="topPage">
      <NavBar />
    </div>
    <div class="mainPage">
      <SideBar />
      <router-view class="mainBody"></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  }
};
</script>

<style lang="scss">
body {
  background-color: #f1f1f1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
}
.mainPage {
  display: flex;
  flex-direction: row;
}
.mainBody{
  flex: 1;
}
</style>
