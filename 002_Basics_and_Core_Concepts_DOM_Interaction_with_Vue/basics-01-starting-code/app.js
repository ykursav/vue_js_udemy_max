const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish course this week and learn Vue :D",
      //   courseGoalB: "<h2>Master Vue and build amazing apps :D</h2>",
      courseGoalB: "Master Vue and build amazing apps :D",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
