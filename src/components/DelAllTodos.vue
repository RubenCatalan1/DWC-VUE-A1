<script>
import { store } from '../store.js';
export default {
    data(){},
    methods: {
        deleteAll() {
            if(confirm("Quieres borrar todos los elementos?")) {
                store.deleteAll()
            }
        }
    }
}
</script>
<template>
    <button @click="deleteAll">Borrar todo</button>
</template>
