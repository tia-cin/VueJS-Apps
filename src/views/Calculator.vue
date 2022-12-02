<template>
    <div class="flex flex-col justify-center items-center">
        <h2 class="text-4xl font-semibold my-5">Calculator</h2>
        <div class="border-black border p-5 bg-slate-400 text-5xl rounded w-300 text-white text-right">
            {{ result || '0' }}
        </div>
        <section class="grid grid-cols-4 gap-0">
                <button :class="gray">
                    AC
                </button>
                <button :class="gray">
                    +/-
                </button>
                <button :class="gray">
                    %
                </button>
                <button :class="orange">
                    /
                </button>
                <button :class="classStyle">
                    7
                </button>
                <button :class="classStyle">
                    8
                </button>
                <button :class="classStyle">
                    9
                </button>
                <button :class="orange">
                    *
                </button>
                <button :class="classStyle">
                    4
                </button>
                <button :class="classStyle">
                    5
                </button>
                <button :class="classStyle">
                    6
                </button>
                <button :class="orange">
                    -
                </button>
                <button :class="classStyle">
                    1
                </button>
                <button :class="classStyle">
                    2
                </button>
                <button :class="classStyle">
                    3
                </button>
                <button :class="orange">
                    +
                </button>
                <button :class="classStyle">
                    0
                </button>
                <button :class="classStyle">
                    00
                </button>
                <button :class="classStyle">
                    .
                </button>
                <button :class="orange">
                    =
                </button>
        </section>
    </div>
</template>

<script>
const classStyle = 'text-2xl border-black border rounded p-5 cursor-pointer';
const orange = 'text-2xl border-black border rounded p-5 cursor-pointer bg-orange-400'
const gray = 'text-2xl border-black border rounded p-5 cursor-pointer bg-slate-300'

export default {
    name: 'CalculatorApp',
    data: () => ({
        result: '123',
        classStyle,
        orange,
        gray
    }),
    methods: {
        clear: () => {
            this.result = ''
        }
    }
}
</script>