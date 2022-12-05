<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-4xl font-semibold my-5">Calculator</h2>
    <div
      class="border-black border p-5 bg-slate-400 rounded w-300 text-white"
    >
      <span class="text-xl">{{ prev || '0'}}</span>
      <p class="text-5xl text-right">{{ result || "0" }}</p>
    </div>
    <section class="grid grid-cols-4 gap-0">
      <button :class="gray" @click="clear">AC</button>
      <button :class="gray" @click="sign">+/-</button>
      <button :class="gray" @click="percent">%</button>
      <button :class="orange" @click="divide">/</button>
      <button :class="classStyle" @click="append('7')">7</button>
      <button :class="classStyle" @click="append('8')">8</button>
      <button :class="classStyle" @click="append('9')">9</button>
      <button :class="orange" @click="times">*</button>
      <button :class="classStyle" @click="append('4')">4</button>
      <button :class="classStyle" @click="append('5')">5</button>
      <button :class="classStyle" @click="append('6')">6</button>
      <button :class="orange" @click="minus">-</button>
      <button :class="classStyle" @click="append('1')">1</button>
      <button :class="classStyle" @click="append('2')">2</button>
      <button :class="classStyle" @click="append('3')">3</button>
      <button :class="orange" @click="plus">+</button>
      <button :class="classStyle" @click="append('0')">0</button>
      <button :class="classStyle" @click="append('00')">00</button>
      <button :class="classStyle" @click="dot">.</button>
      <button :class="orange" @click="equal">=</button>
    </section>
  </div>
</template>

<script>
const classStyle = "text-2xl border-black border rounded p-5 cursor-pointer";
const orange =
  "text-2xl border-black border rounded p-5 cursor-pointer bg-orange-400";
const gray =
  "text-2xl border-black border rounded p-5 cursor-pointer bg-slate-300";

export default {
  name: "CalculatorApp",
  data: () => ({
    result: "0",
    operator: null,
    prev: null,
    opClicked: null,
    classStyle,
    orange,
    gray,
  }),
  methods: {
    clear() {
      this.result = "";
    },
    sign() {
        this.result = this.result.charAt(0) === '-' ? 
        this.result.slice(1) : '-' + this.result
    },
    percent() {
      this.result = `${parseFloat(this.result) / 10 }`
    },
    append(num) {
      if (this.opClicked) {
        this.result = ''
        this.opClicked = false
      } this.result = `${this.result}${num}`
    },
    dot() {
      !this.result.includes('.') && this.append('.')
    },
    setPrev() {
      this.prev = this.result;
      this.opClicked = true;
    },
    divide() {  
      this.operator = (a, b) => a / b;
      this.setPrev()
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrev()
    },
    plus() {
      this.operator = (a, b) => a + b;
      this.setPrev()
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrev()
    },
    equal() {
      this.result = `${this.operator(
        parseFloat(this.result), 
        parseFloat(this.prev)
        )}`
      this.prev = null
    }
  },
};
</script>
