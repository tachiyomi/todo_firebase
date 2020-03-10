import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
        apiKey: "AIzaSyBs3EkI7xTbHdOpHlrgvpg_7uMapxcBPp0",
        authDomain: "githubpages-todo-fb.firebaseapp.com",
        databaseURL: "https://githubpages-todo-fb.firebaseio.com",
        projectId: "githubpages-todo-fb",
        storageBucket: "githubpages-todo-fb.appspot.com",
        messagingSenderId: "866981490178",
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
