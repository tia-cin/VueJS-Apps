<template>
  <div class="flex flex-col justify-center items-center">
    <ProjectTitle title="Quiz Game" />
    <article class="bg-slate-200 p-5 my-5 rounded-xl w-600">
      <p class="font-medium text-3xl text-center">{{ currentQuestion }}</p>
    </article>
    <section class="w-600">

      <div
        v-for="answer in currentAnswers"
        :key="answer.ans"
        class="bg-pink-300 text-center rounded-xl p-3 mb-5 hover:scale-105 transition-all cursor-pointer"
      >
        <span class="font-medium text-lg">{{ answer.ans }}</span>
      </div>
    </section>
    <div class="bg-slate-200 rounded-xl mt-10 w-300 p-5">
      <div class="my-2 text-xl font-normal flex justify-between">
        <p class="flex">
          <img :src="correct" alt="correct" class="mx-2 w-30" />
          Correct
        </p>
        <span class="font-medium">{{ score.correct}}</span>
      </div>
      <div class="my-2 text-xl font-normal flex justify-between">
        <p class="flex">
          <img :src="wrong" alt="wrong" class="mx-2 w-30" />
          Wrong
        </p>
        <span class="font-medium"> {{score.wrong}}</span>
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
    score: {
        correct: 0,
        wrong: 0
    },
    currentQuestion: "",
    currentAnswers: [],
    quizQuestions: [
      {
        question:
          "In which part of your body would you find the cruciate ligament?",
        answers: [
          { ans: "Knee", is: true },
          { ans: "Arm", is: false },
          { ans: "Hand", is: false },
          { ans: "Finger", is: false },
        ],
      },
    ],
  }),
  methods: {
    correctAnswer() {
        this.score.correct = this.score.correct + 1
    },
    wrongAnswer() {
        this.score.wrong = this.score.wrong + 1
    }
  },
  beforeMount() {
    this.currentQuestion = this.quizQuestions[0].question
    this.currentAnswers = this.quizQuestions[0].answers
  }
};
</script>
