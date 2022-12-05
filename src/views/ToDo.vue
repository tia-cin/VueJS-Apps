<template>
    <div class="flex flex-col items-center">
        <ProjectTitle title="To Do List"/>
        <div class="flex justify-around">
            <form class="flex justify-between">
                <input 
                    class="bg-slate-200 rounded-xl p-2" 
                    placeholder="New To To" 
                    name="newTodo" 
                    type="text" 
                    value=""
                /> 
                <button class="bg-yellow-400 rounded-xl p-2 mx-2 font-medium" type="submit">Add</button>
            </form>
            <button class="bg-blue-200 rounded-xl p-2 mx-5 font-medium">Complete All</button>
        </div>
        <ul class="grid grid-cols-4 gap-2 mt-10">
            <li class="flex justify-between items-center w-300">
                <input type="checkbox"/>
                <p class="capitalize font-semibold text-xl">todo</p>
                <button class="bg-red-500 p-2 rounded-xl font-medium">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import ProjectTitle from '../components/Title.vue';

export default {
    name: 'ToDo',
    components: { ProjectTitle }
}
</script>