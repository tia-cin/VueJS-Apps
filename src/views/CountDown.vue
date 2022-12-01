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
};
</script>
