<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-4xl font-semibold my-5">Countdown</h2>
    <section class="flex justify-evenly items-center">
      <div class="text-8xl">
        {{ diff.year }}
        <p class="text-xl">Years</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.month }}
        <p class="text-xl">Months</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.day }}
        <p class="text-xl">Days</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.hour }}
        <p class="text-xl">Hours</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.minute }}
        <p class="text-xl">Minutes</p>
      </div>
      <span class="text-4xl mx-5">:</span>
      <div class="text-8xl">
        {{ diff.second}}
        <p class="text-xl">Seconds</p>
      </div>
    </section>
  </div>
</template>

<script>
const futureDate = new Date(2050, 0, 1);
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
  data() {
    return {
      futureDate,
      diff: {},
      timer: undefined,
    };
  },
  methods: {
    getDiff() {
      this.diff = getDateDiff(new Date(), futureDate);
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
