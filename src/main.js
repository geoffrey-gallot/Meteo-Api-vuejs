import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(axios);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD91ngcao8lS1ayNiG00_VUw9bm22Qjr_w',
    libraries: 'places',
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');