<template>
  <b-navbar class="fixed-top is-dark navBar">

    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img class="logo"
          src="../../public/G²Logo.png"
        />
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item class="is-dark" tag="router-link" :to="{ path: '/about' }">
          About
      </b-navbar-item>
      <b-navbar-item class="is-dark" tag="router-link" :to="{ path: '/meteo' }">
          Météo
      </b-navbar-item>
    </template>

  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navBar{
  height: 10vh;
}
.navBar img {
  width: 100% !important;
  height: 100% !important;
}
</style>
