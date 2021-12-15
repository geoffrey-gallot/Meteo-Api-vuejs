<template>
  <div>
    <div class="card meteoCard" aria-id="contentIdForA11y3">
      <div class="card-header" role="button" aria-controls="contentIdForA11y3">
        <p class="card-header-title">city name : {{ city }}</p>
      </div>
      <div class="card-content">
        <div class="content">
          <p>Temperature Exterieur : {{temp}} °C</p>
          <p>Humidité : {{ humidity }} %</p>
          <p>vitesse du vent : {{ wind }} km/h</p>
          <p>temps : {{ info }}</p>
        </div>
      </div>
      <footer class="card-footer">
      </footer>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "MeteoInfoDisplay",
  data(){
      return {
          
      }
  },
  props: ["city", "info", "temp", "humidity", "wind"],
  computed: {
  },
  methods: {

  },
};
</script>

<style scoped>
.meteoCard {
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
