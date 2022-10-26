const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      surname: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    onClickAdd(num) {
      this.counter += num;
    },
    onClickRemove(num) {
      if (this.counter > 0) {
        this.counter -= num;
      }
    },
    setName(event, surname) {
      this.name = event.target.value;
      this.surname = surname;
    },
    submitForm() {
      alert("Form submitted!");
    },
  },
});

app.mount("#events");
