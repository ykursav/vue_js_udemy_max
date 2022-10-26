const app = Vue.createApp({
  data() {
    return {
      currentValue: "",
      confirmedValue: "",
    };
  },
  methods: {
    setValueEntered(event) {
      this.confirmedValue = event.target.value;
    },
    setValueKeyDown(event) {
      this.currentValue = event.target.value;
    },
    showAlert() {
      alert("Button clicked!");
    },
  },
});

app.mount("#assignment");
