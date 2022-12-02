<template>
    <div class="flex flex-col justify-center items-center">
        <h2 class="text-4xl font-semibold my-5">Calculator</h2>
        <div class="p-5 bg-slate-400 text-5xl rounded">0</div>
        <section class="grid grid-cols-4 gap-0">
            <div 
                v-for="button in buttons" 
                :key="button.value" 
                class="border-black border rounded p-5" 
                :class="((button.id === 'gray' && 'bg-gray-400') || (button.id === 'orange' && 'bg-orange-300'))"
            >
                <span class="text-center">{{ button.value }}</span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CalculatorApp',
    data: () => ({
        buttons: [
            {value: 'AC', id: 'gray'},
            {value: '+/-', id: 'gray'},
            {value: '%', id: 'gray'},
            {value: '/', id: 'orange'},
            {value: '7', id: ''},
            {value: '8', id: ''},
            {value: '9', id: ''},
            {value: '*', id: 'orange'},
            {value: '4', id: ''},
            {value: '5', id: ''},
            {value: '6', id: ''},
            {value: '-', id: 'orange'},
            {value: '1', id: ''},
            {value: '2', id: ''},
            {value: '3', id: ''},
            {value: '+', id: 'orange'},
            {value: '0', id: ''},
            {value: '00', id: ''},
            {value: '.', id: ''},
            {value: '=', id: 'orange'}
        ]
    })
}
</script>