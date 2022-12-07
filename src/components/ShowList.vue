<script>
import TodoItem from "./TodoItem.vue"
import { store } from "../store.js"
export default {
    components: {
        TodoItem
    },
    data(){
        return {
            todos: store.state.todos
        }
    },
    methods: {
        borraItem(id) {
            store.delTodo(id)
        },
        changeState(id) {
            store.changeState(id)
        }

        
    }
}
</script>
<template>
    <ul>
        <todo-item v-for="elem in todos" :key="elem.id" v-bind:elem="elem" @delItem="borraItem" @changeState="changeState"></todo-item>
    </ul>
    <p v-if="todos.length">Cosas para hacer: {{todos.filter(item => !item.done).length}}</p>
    <p v-else>No hay elementos</p>
</template>

