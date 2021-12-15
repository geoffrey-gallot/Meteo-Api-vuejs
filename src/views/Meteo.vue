<template>
  <div id="meteoPage">
    <!-- InputSearch -->
    <form @submit="meteoGo">
      <b-field class="inputSearch is-dark">
        <b-input
          name="cityName"
          id="city"
          v-model="city"
          placeholder="Recherche"
          icon="account"
        >
        </b-input>
        <input
          type="submit"
          class="button is-dark validateSearch"
          value="Valider"
        />
      </b-field>
    </form>

    <!-- MeteoInfoDisplay -->
    <section class="meteoDisplay">
      <MeteoInfoDisplay
        v-bind:city="city"
        v-bind:info="info"
        v-bind:temp="temp"
        v-bind:humidity="humidity"
        v-bind:wind="wind"
      />
      <MeteoMap v-bind:lon="lon" v-bind:lat="lat" v-bind:apiKey="apiKey" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import MeteoInfoDisplay from "../components/meteo/MeteoInfoDisplay.vue";
import MeteoMap from "../components/meteo/MeteoMap.vue";
export default {
  name: "Meteo",
  data() {
    return {
      city: "",
      info: "",
      temp: null,
      humidity: null,
      wind: null,
      lon: null,
      lat: null,
      apiKey: "8fdfe3c8a43425543990416ac7b27c83"
    };
  },
  props: {},
  components: {
    MeteoInfoDisplay,
    MeteoMap
  },
  computed: {},
  methods: {
    meteoGo(e) {
      e.preventDefault();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=fr&appid=${this.apiKey}`;
      axios.get(url).then(response => {
        this.temp = response.data.main.temp;
        this.humidity = response.data.main.humidity;
        this.wind = response.data.wind.speed;
        this.info = response.data.weather[0].description;
        this.lon = response.data.coord.lon;
        this.lat = response.data.coord.lat;
      });
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        (this.lat = position.coords.latitude),
          (this.lon = position.coords.longitude);
      });
    }
  },
  beforeUpdate() {},
  updated() {},
  created(){
    this.geolocate();
  },
};
</script>

<style scoped>
#meteoPage {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 2.5%;
}
.meteoDisplay {
  display: flex;
  flex-direction: row;
}
.inputSearch {
  width: 300px;
  margin-bottom: 2.5%;
}
.validateSearch {
  margin-left: 5%;
}
.meteoCard {
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
