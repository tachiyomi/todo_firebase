import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

console.log(process.env.FIRE_BASE);

var config = {
        apiKey: process.env.FIRE_BASE.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.FIRE_BASE.DATABASE_URL,
        projectId: process.env.FIRE_BASE.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDERID,
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
