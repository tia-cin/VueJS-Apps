<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-4xl font-semibold my-5">Countdown</h2>
    <section class="flex justify-evenly items-center">
      <div class="text-8xl">
        {{ currentDays }}
        <p class="text-xl">Days</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ currentHours }}
        <p class="text-xl">Hours</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ currentMinutes }}
        <p class="text-xl">Minutes</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ currentSeconds }}
        <p class="text-xl">Seconds</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CountDown",
  data: () => ({
    currentDays: 0,
    currentHours: 0,
    currentMinutes: 0,
    currentSeconds: 0,
  }),
  mounted() {
    this.display();
  },
  computed: {
      seconds: () => 1000,
      minutes: () => this.seconds * 60,
      hours: () => this.minutes * 60,
      days: () => this.hours * 24,
  },
  methods: {
    display() {
      const timer = setInterval(() => {
        // const second = () => 1000;
        // const minute =  () => second * 60;
        // const hour = () => minute * 60;
        // const day = () => hour * 24;

        const now = new Date();
        const end = new Date(2022, 12, 1, 1, 1, 1);
        const countdown = end.getTime() - now.getTime();

        if (countdown < 0) clearInterval(timer);

        // const days = Math.floor(countdown / day);
        // const hours = Math.floor((countdown % day) / hour);
        // const minutes = Math.floor((countdown % hour) / minute);
        // const seconds = Math.floor((countdown % minute) / second);

        const days = Math.floor(countdown / this.days);
        const hours = Math.floor((countdown % this.days) / this.hours);
        const minutes = Math.floor((countdown % this.hours) / this.minutes);
        const seconds = Math.floor((countdown % this.minutes) / this.seconds);

        this.currentSeconds = seconds < 10 ? "0" + seconds : seconds;
        this.currentMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.currentHours = hours < 10 ? "0" + hours : hours;
        this.currentDays = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
};
</script>
