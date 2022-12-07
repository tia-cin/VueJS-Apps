<template>
  <div class="flex flex-col justify-center items-center">
    <ProjectTitle title="Quiz Game" />
    <article class="bg-slate-200 p-5 my-5 rounded-xl w-600">
      <p class="font-semibold text-4xl text-center">Question ?</p>
    </article>
    <section class="w-600">
      <div
        class="bg-pink-300 text-center rounded-xl p-3 mb-5 hover:scale-105 transition-all cursor-pointer"
      >
        <span class="font-medium text-lg"> Option 1</span>
      </div>
      <div
        class="bg-pink-300 text-center rounded-xl p-3 my-5 hover:scale-105 transition-all cursor-pointer"
      >
        <span class="font-medium text-lg"> Option 2</span>
      </div>
      <div
        class="bg-pink-300 text-center rounded-xl p-3 my-5 hover:scale-105 transition-all cursor-pointer"
      >
        <span class="font-medium text-lg"> Option 3</span>
      </div>
      <div
        class="bg-pink-300 text-center rounded-xl p-3 mt-5 hover:scale-105 transition-all cursor-pointer"
      >
        <span class="font-medium text-lg"> Option 4</span>
      </div>
    </section>
    <div class="bg-slate-200 rounded-xl mt-10 w-300 p-5">
      <div class="my-2 text-xl font-normal flex justify-between">
        <p class="flex">
          <img :src="correct" alt="correct" class="mx-2 w-30" />
          Correct
        </p>
        <span>0</span>
      </div>
      <div class="my-2 text-xl font-normal flex justify-between">
        <p class="flex">
          <img :src="wrong" alt="wrong" class="mx-2 w-30" />
          Wrong
        </p>
        <span>0</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTitle from "../components/Title.vue";

export default {
  name: "QuizGame",
  components: { ProjectTitle },
  data: () => ({
    wrong: require("../assets/wrong.png"),
    correct: require("../assets/correct.png"),
  }),
};
</script>
