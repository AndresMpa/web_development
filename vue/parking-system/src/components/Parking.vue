<template>
  <section class="mx-auto w-60 mt-3">
    <h1>Registro de ingreso</h1>
    <form class="container">
      <article class="d-flex w-50">
        <div class="d-flex" v-if="bigCar">
          <input
            v-model.number="axis"
            class="w-50 mr-auto"
            type="number"
            name="axis"
            id="axis"
            min="1"
          />
          <label for="axis" class="mr-auto"> Número de llantas </label>
        </div>
        <div v-else>
          <select class="form-select" v-model="selected">
            <option
              v-for="(option, index) in options"
              v-bind:value="option.value"
              :key="index"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
      </article>

      <article class="d-flex w-50 text-right">
        <p class="text-right">{{ currentDate }} - {{ currentHour }}</p>
      </article>

      <article class="d-flex mt-6 w-100">
        <input id="camion" value="Camion" type="checkbox" v-model="bigCar" />
        <label for="camion" class="ml-8">De tipo camión</label>
        <label for="address" class="text-right">Placa del auto</label>
        <input
          type="text"
          class="ml-8"
          v-model="address"
          @click="clearAddress()"
        />
      </article>

      <article class="d-flex mt-6 w-100">
        <label for="deposite" class="text-right">Tiene deposito</label>
        <input type="checkbox" class="ml-8" v-model="deposite" />
      </article>

      <button class="mt-6 form-button" @click="addCar($event)">
        Agregar ticket
      </button>

      <button class="mt-6 form-button-clean" @click="clearRegister($event)">
        Limpiar ticket
      </button>
    </form>
    <hr class="divider" />

    <h1>Datos de ingreso</h1>
    <div class="ml-8">
      <br />
      <p>Placa: {{ address }}</p>
      <p v-if="bigCar">
        <span> Auto con ejes: Si </span> <br />
        <span> Número de ejes: {{ axis }} </span>
      </p>
      <p v-else>
        <span> Auto con ejes: No </span> <br />
        <span>Tipo de auto: {{ currentCarType }}</span>
      </p>
      <p>Aplica descuento {{ discountAvailable(deposite) }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Parking",
  data() {
    return {
      axis: 1,
      address: "",
      bigCar: false,
      deposite: false,
      selected: "turismo",
      currentCarType: "Turismo",
      options: [
        { text: "Turismo", value: "turismo" },
        { text: "Todo terreno", value: "todoTerreno" },
        { text: "Furgoneta", value: "furgoneta" },
      ],
    };
  },
  methods: {
    clearAddress() {
      this.address = ""
    },
    discountAvailable(ticket) {
      return ticket ? "Si" : "No";
    },
    clearRegister(event) {
      event.preventDefault();

      this.axis = 1;
      this.address = "";
      this.bigCar = false;
      this.deposite = false;
      this.selected = "turismo";
    },
    addCar(event) {
      event.preventDefault();

      if (this.address === "") {
        this.address = "Este campo es necesario";
      } else {
        let newCar;
        if (this.bigCar) {
          newCar = {
            axis: this.axis, //Ejes
            address: this.address, //Placa
            carType: "Camión", //Tipo de auto
            deposite: this.deposite, //Tiene deposito

            getInHour: this.currentHour, //Hora de entrada
            getInDate: this.currentDate, //Fecha de entrada
          };
        } else {
          newCar = {
            axis: this.axis, //Ejes
            address: this.address, //Placa
            deposite: this.deposite, //Tiene deposito
            carType: this.currentCarType, //Tipo de auto

            getInHour: this.currentHour, //Hora de entrada
            getInDate: this.currentDate, //Fecha de entrada
          };
        }

        this.$store.dispatch("addCar", newCar);
        this.clearRegister(event);
      }
    },
  },
  computed: {
    currentHour() {
      let today = new Date();
      let date =
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();
      return date;
    },
    currentDate() {
      let today = new Date();
      let date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      return date;
    },
  },
  watch: {
    selected() {
      this.options.forEach((item) => {
        if (this.selected === item.value) {
          this.currentCarType = item.text;
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
hr {
  width: 90%;
  height: 1px;
  border: none;
  margin: 3% auto;
  background-color: #2c3e50;
}

.container {
  background-color: aliceblue;
  font-weight: bold;
  color: black;

  border-radius: 5px;
  padding: 2.25%;
  margin: 2% auto;
  width: 75%;
}

.d-flex {
  display: inline-flex;
}

.form-select {
  background-color: aliceblue;
  font-size: 18px;
  border: none;
  width: 100%;
}

.form-button {
  transition: all 0.5s ease-out;
  background-color: #2c3e50;
  border-radius: 15px;
  padding: 0.8%;
  border: none;
  color: white;
}

.form-button:hover {
  background-color: darkgreen;
  border-radius: 5px;
  color: white;
}

.form-button-clean {
  transition: all 0.5s ease-out;
  background-color: #2c3e50;
  border-radius: 15px;
  margin-left: 12px;
  padding: 0.8%;
  border: none;
  color: white;
}

.form-button-clean:hover {
  background-color: darkred;
  border-radius: 5px;
  color: white;
}

.text-right {
  text-align: end;
  justify-content: flex-end;
  margin-left: auto;
}

.mx-auto {
  margin: 0 auto;
}

.mr-auto {
  margin-right: auto;
}

.w-60 {
  width: 60%;
}

.w-50 {
  width: 50%;
}

.w-100 {
  width: 100%;
}

.mt-12 {
  margin-top: 12%;
}

.mt-6 {
  margin-top: 6%;
}

.mt-3 {
  margin-top: 3%;
}

.ml-8 {
  margin-left: 8px;
}
</style>
