// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Materials from 'vue-materials';
import App from './App';
import 'materialize-css/sass/materialize.scss';
import './assets/css/materialize.css';

Vue.config.productionTip = false;

Vue.use(Materials);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
