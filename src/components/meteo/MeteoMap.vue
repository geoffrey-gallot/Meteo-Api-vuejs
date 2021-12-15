<template>
  <div>
    <div class="card meteoCardMap" aria-id="contentIdForA11y3">
      <div class="card-header" role="button" aria-controls="contentIdForA11y3">
        <p class="card-header-title">
          longitude : {{ lon }} | latitude : {{ lat }}
        </p>
      </div>
      <div class="card-content">
        <GmapMap
          :center="center"
          :zoom="12"
          style="width:100%;  height: 300px;"
        />
      </div>
      <footer class="card-footer"></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeteoMap",
  props: ["lon", "lat", "apiKey"],
  components: {},
  data() {
    return {
      layer: "clouds_new",
      zoom: "10",
      center: {}
    };
  },
  methods: {},
  computed: {},
  beforeUpdate() {
    this.center = { lat: this.lat, lng: this.lon };
  },
  updated() {},
  beforeCreate() {},
  created() {},
};
</script>

<style scoped>
.meteoCardMap {
  width: 500px;
  height: 400px;
  margin-left: 5%;
}
</style>
