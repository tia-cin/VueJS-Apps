<template>
    <div class="flex flex-col items-center">
        <ProjectTitle title="To Do List"/>
        <div class="flex justify-around">
            <form class="flex justify-between" @submit.prevent="addTodo">
                <input 
                    v-model="newTodo"
                    class="bg-slate-200 rounded-xl p-2" 
                    placeholder="New To Do" 
                    type="text" 
                    value=""
                /> 
                <button 
                    class="bg-yellow-400 rounded-xl p-2 mx-2 font-medium" 
                    type="submit"
                >
                    Add
                </button>
            </form>
            <button 
                @click="completeAll" 
                class="bg-blue-200 rounded-xl p-2 mx-5 font-medium"
            >
                Complete All
            </button>
        </div>
        <ul class="grid grid-cols-4 gap-2 mt-10">
            <li 
                class="flex justify-between items-center w-300" 
                v-for="todo in todos" 
                :key="todo.title"
            >
                <input type="checkbox" v-model="todo.done"/>
                <p class="capitalize font-semibold text-xl">{{todo.title}}</p>
                <button 
                    class="bg-red-500 p-2 rounded-xl font-medium" 
                    @click="removeTodo(todo.title)"
                >
                    Remove
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import ProjectTitle from '../components/Title.vue';

export default {
    name: 'ToDo',
    components: { ProjectTitle },
    data: () => ({
        newTodo: {
            title: '',
            done: false
        },
        todos: []
    }),
    methods: {
        addTodo() {
            this.todos.push(this.newTodo)
            this.newTodo.title = ''
        },
        removeTodo(todo) {
            const index = this.todos.forEach(t => t.indexOf(todo))
            this.todos.splice(index, 1)
        },
        completeAll() {
            this.todos.forEach(t => t.done = true)
        }
    }
}
</script>