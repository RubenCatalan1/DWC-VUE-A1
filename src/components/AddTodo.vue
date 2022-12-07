<script>
import { store } from "../store.js"
export default {
    data(){
        return {
            newTodo: ""
        }
    },
    methods: {
        nuevaTarea() {
            if(this.newTodo) {
                store.addTodo(this.newTodo)
            }
            this.newTodo = ""
        }
    }

}
</script>

<template>
    <form @submit.prevent="nuevaTarea">
        <input v-model="newTodo">
        <input type="submit" value="Añadir">
    </form>
</template>
