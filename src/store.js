import { reactive } from 'vue'
let id = 0
export const store = {
    state: {
        todos: reactive([
            {id: id++,
            name: "cosa 1",
            done: true},
            {id: id++,
            name: "cosa 2",
            done: false},
            {id: id++,
            name: "cosa 3",
            done: true}
        ]
    )},
    addTodo(title) {
        this.state.todos.push({
            id: id++,
            name: title,
            done: false
        })
    },
    deleteAll() {
        this.state.todos.splice(0, this.state.todos.length)
    },
    delTodo(id) {
        this.state.todos.splice(this.state.todos.findIndex(item => item.id === id), 1)
    },
    changeState(id) {
        let elem = this.state.todos.find(item => item.id === id)
        elem.done = !elem.done

    }
    

}