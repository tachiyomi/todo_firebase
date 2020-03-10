<template>
  <div id="app">
    <h2>Tasks</h2>
    <ul>
      <li><button type="submit" @click="showTodoType = 'all'">All</button></li>
    </ul>
    <ul v-for="(todo, key) in filteredTodos">
      <li><input class="toggle" type="checkbox" v-model="todo.isComplete" >{{ todo.name }}</li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
  data(){
    return {
      database: null,
      todosRef: null,
      newTodoName: '',
      showTodoType: 'all',
      todos: []
    }
  },
  created: function(){
    this.database = firebase.database();

    var _this = this;
    this.todosRef.on('value', function(snapshot){
      _this.todos = snapshot.val();
    });
  },
  computed: {
    filteredTodos: function(){
      return this.todos;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
