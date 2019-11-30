import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from "firebase/app";
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDkibo5R4fIh3tUlLBkIdC4VQQcT7190Dk",
  authDomain: "vue-calendar-5f2ee.firebaseapp.com",
  databaseURL: "https://vue-calendar-5f2ee.firebaseio.com",
  projectId: "vue-calendar-5f2ee",
  storageBucket: "vue-calendar-5f2ee.appspot.com",
  messagingSenderId: "627357267885",
  appId: "1:627357267885:web:6b2dbc63a8250fd01f1324"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
