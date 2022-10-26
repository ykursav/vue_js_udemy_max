const app = Vue.createApp({
  data() {
    return {
      name: "Yunus",
      age: 31,
      image:
        "https://images.pexels.com/photos/13435572/pexels-photo-13435572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
