import Vue from 'vue';
import App from './App.vue';
import MyColor from 'plugin';

Vue.use(MyColor);

new Vue({
  el: '#app',
  render: h => h(App)
}); 