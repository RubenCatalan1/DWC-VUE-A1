<script>
  import AddTodo from './components/AddTodo.vue';
  import AppTitle from './components/AppTitle.vue';
  import DelAllTodos from './components/DelAllTodos.vue';
  import ShowList from './components/ShowList.vue';
  export default {
    components: {
      AddTodo,
      AppTitle,
      DelAllTodos,
      ShowList
    }
  }

</script>

<template>
  <app-title title="Cosas que hacer este año"></app-title>
  <show-list></show-list>       
  <add-todo></add-todo>
  <del-all-todos></del-all-todos>
</template>
