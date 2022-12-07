<script>
import { store } from '../store.js';
export default {
    props: {
        elem: Object,
    }, 
    data() {
        
    },
    emits: ['delItem'],
    methods: {
        removeTodo() {
            if(confirm("Quieres borrar la tarea " + this.elem.name)) {
                this.$emit('delItem', this.elem.id) 
            }
        },
        changeState() {
            store.changeState(this.elem.id)
        }
    }
}
</script>
<template>
    <li @dblclick="removeTodo()">
        <input :checked="elem.done" @click="changeState()" type="checkbox">
        <del v-if="elem.done">{{elem.name}}</del>
        <span v-else>{{elem.name}}</span>
    </li>
</template>

