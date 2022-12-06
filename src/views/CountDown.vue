<template>
  <div class="flex flex-col justify-center items-center">
    <ProjectTitle title="Countdown"/>
    <section class="flex justify-evenly items-center">
      <div class="text-8xl">
        {{ diff.year || 0 }}
        <p class="text-xl">Years</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.month || 0 }}
        <p class="text-xl">Months</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.day || 0 }}
        <p class="text-xl">Days</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.hour || 0 }}
        <p class="text-xl">Hours</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.minute || 0 }}
        <p class="text-xl">Minutes</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.second || 0 }}
        <p class="text-xl">Seconds</p>
      </div>
    </section>
    <button class="text-white bg-purple-500 mt-10 p-2 px-5 rounded-xl text-xl" @click="clearTime">Stop</button>
  </div>
</template>

<script>
import ProjectTitle from '../components/Title.vue';

const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    year: diff.getUTCFullYear() - 1970,
    month: diff.getUTCMonth(),
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
};

export default {
  name: 'CountDown',
  components: { ProjectTitle },
  data() {
    return {
      futureDate: new Date(2050, 0, 1),
      diff: {},
      timer: undefined,
    };
  },
  methods: {
    clearTime() {
      this.futureDate = new Date() - this.diff
    },
    getDiff() {
      this.diff = getDateDiff(new Date(), this.futureDate);
    },
    formatDate(date) {
      let d = new Date(date),
        month = (d.getMonth() + 1).toString(),
        day = d.getDate().toString(),
        year = d.getFullYear().toString();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
  },
  beforeMount() {
    this.timer = setInterval(this.getDiff, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }, 
}
</script>
