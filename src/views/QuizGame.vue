<template>
  <div class="flex flex-col justify-center items-center">
    <ProjectTitle title="Quiz Game" />
    <article class="bg-slate-200 p-5 my-5 rounded-xl w-600">
      <p class="font-medium text-3xl text-center">
        {{ currentQuestion }}
      </p>
    </article>
    <form class="w-600">
      <button
        v-for="answer in currentAnswers"
        :key="answer.ans"
        class="bg-pink-300 min-w-full text-center rounded-xl p-3 mb-5 hover:scale-105 transition-all cursor-pointer"
        @click="setAnswer(answer)"
      >
        <span class="font-medium text-lg">
          {{ answer.ans }}
        </span>
      </button>
    </form>
    <div class="bg-slate-200 rounded-xl mt-10 w-300 p-5">
      <div class="my-2 text-xl font-normal flex justify-between">
        <p class="flex">
          <img :src="correct" alt="correct" class="mx-2 w-30" />
          Correct
        </p>
        <span class="font-medium">{{ score.correct }}</span>
      </div>
      <div class="my-2 text-xl font-normal flex justify-between">
        <p class="flex">
          <img :src="wrong" alt="wrong" class="mx-2 w-30" />
          Wrong
        </p>
        <span class="font-medium"> {{ score.wrong }}</span>
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
      wrong: 0,
    },
    index: 0,
    currentQuestion: "",
    currentAnswers: {},
    quizQuestions: [
      {
        question:
          "What is the name of the main antagonist in the Shakespeare play Othello?",
        answers: [
          { ans: "Teo", is: false },
          { ans: "Jafar", is: false },
          { ans: "Iago", is: true },
          { ans: "Lio", is: false },
        ],
      },
      {
        question: "What language is spoken in Brazil?",
        answers: [
          { ans: "Brazilian", is: false },
          { ans: "Spanish", is: false },
          { ans: "Portuguese", is: true },
          { ans: "English", is: false },
        ],
      },
      {
        question:
          "Which southern Italian city is usually credited as the birthplace of the pizza?",
        answers: [
          { ans: "Milan", is: false },
          { ans: "Rome", is: false },
          { ans: "Turin", is: false },
          { ans: "Naples", is: true },
        ],
      },
      {
        question: "What are the five colours of the Olympic rings?",
        answers: [
          { ans: "Blue, Yellow, Black, Orange and Red", is: false },
          { ans: "Red, Blue, Yellow, Green and White", is: false },
          { ans: "Blue, Pink, Black, Green and Red", is: false },
          { ans: "Blue, Yellow, Black, Green and Red", is: true },
        ],
      },
      {
        question: "What is the capital of New Zealand?",
        answers: [
          { ans: "Wellington", is: true },
          { ans: "Auckland", is: false },
          { ans: "Hamilton", is: false },
          { ans: "Christchurch", is: false },
        ],
      },
      {
        question: "Which Disney Princess called Gus and Jaq friends?",
        answers: [
          { ans: "Belle", is: false },
          { ans: "Aurora", is: false },
          { ans: "Cinderella", is: true },
          { ans: "Mulan", is: false },
        ],
      },
      {
        question: "What is the smallest planet in our solar system?",
        answers: [
          { ans: "Uranus", is: false },
          { ans: "Mercury", is: true },
          { ans: "Venus", is: false },
          { ans: "Neptune", is: false },
        ],
      },
      {
        question: "What is the currency of Denmark?",
        answers: [
          { ans: "Gold", is: false },
          { ans: "Krone", is: true },
          { ans: "Crown", is: false },
          { ans: "Euro", is: false },
        ],
      },
    ],
  }),
  methods: {
    correctAnswer() {
      this.score.correct = this.score.correct + 1;
    },
    wrongAnswer() {
      this.score.wrong = this.score.wrong + 1;
    },
    setAnswer(ans) {
      if (ans.is) this.correctAnswer();
      else this.wrongAnswer();
      this.index = this.index + 1;
      this.currentQuestion = this.quizQuestions[this.index].question;
      this.currentAnswers = this.quizQuestions[this.index].answers;
    },
  },
  beforeMount() {
    this.currentQuestion = this.quizQuestions[this.index].question;
    this.currentAnswers = this.quizQuestions[this.index].answers;
  },
};
</script>
