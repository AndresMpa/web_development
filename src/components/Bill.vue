<template>
  <section class="bill" v-if="this.$store.state.car.length > 0">
    <article class="bill-create">
      <h2>Factura a pagar</h2>
      <form action="" class="bill-form mt-3">
        <select class="bill-form-select" v-model="selected">
          <option
            v-for="(address, index) in registeredAddress"
            v-bind:value="address.value"
            :key="index"
          >
            {{ address.text }}
          </option>
        </select>

        <figure>
          <div
            v-if="this.currentCar.carType === 'Camión'"
            class="bill-car-type"
          >
            <i class="fas fa-truck-moving"></i>
          </div>
          <div v-else class="bill-car-type">
            <i class="fas fa-car-side"></i>
          </div>

          <p>
            <span> Este auto es de tipo: </span>
            <span> {{ currentCar.carType }} </span>
          </p>
          <p>
            <span> Ingreso a la hora: {{ currentCar.getInHour }} </span>
            <span> Ingreso la fecha: {{ currentCar.getInDate }} </span>
          </p>
          <p v-if="currentCar.deposite">Se le aplica descuento</p>
          <p v-else>No tiene descuentos</p>

          <button class="create-bill" @click="getBill($event)">
            Generar factura
          </button>
        </figure>
      </form>
    </article>

    <article class="bill-preview">
      <h2>Vista previa del recibo</h2>
      <hr class="bill-divider mt-3" />
      <div class="preview">
        <h3 class="center">Black Car Parking</h3>
        <p>
          <span> Minutos de uso: </span>
          <span> {{ usedFor }} </span>
        </p>
        <p>
          <span> Tarifa de cobro: </span>
          <span> {{ carType }} </span>
        </p>
        <p>
          <span> Subtotal: </span>
          <span> {{ subtotal }} </span>
        </p>

        <hr class="bill-divider center" />

        <p>
          <span> Total a pagar: </span>
          <span> {{ total }} </span>
        </p>
        <cite>
          Gracias por confiar la seguridad de su auto a Black Car, vuelva pronto
        </cite>
      </div>
    </article>
  </section>
  <section v-else>
    <article class="no-cars">
      <hr class="bill-divider mt-3" />
      <h2>No hay autos aún</h2>
      <hr class="bill-divider mt-3" />
    </article>
  </section>
</template>

<script>
export default {
  name: "Bill",
  data() {
    return {
      currentCar: Object,
      selected: "",
      usedFor: "",
      carType: "",
      subtotal: "",
      total: "",
    };
  },
  methods: {
    getCar() {
      this.$store.state.car.forEach((item) => {
        if (item.address === this.selected) {
          this.currentCar = item;
        }
      });
    },
    getUsedHour(flag = true) {
      const today = new Date();
      const checkin = this.currentCar.getInHour;
      const usedSince = this.currentCar.getInDate;
      let hour =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

      let usedHour, usedMin, usedSec;
      usedSec =
        parseInt(hour.substring(hour.lastIndexOf(":") + 1, hour.length)) -
        parseInt(
          checkin.substring(checkin.lastIndexOf(":") + 1, checkin.length)
        );

      if (usedSec < 0) {
        usedHour + 1;
        usedSec += 60;
      }

      usedMin =
        parseInt(hour.substring(hour.indexOf(":") + 1, hour.lastIndexOf(":"))) -
        parseInt(
          checkin.substring(checkin.indexOf(":") + 1, checkin.lastIndexOf(":"))
        );

      if (usedMin < 0) {
        usedMin + 1;
        usedMin += 60;
      }

      usedHour =
        parseInt(hour.substring(0, hour.indexOf(":"))) -
        parseInt(checkin.substring(0, checkin.indexOf(":")));
      if (flag) {
        return usedMin + usedHour * 60 + "min " + usedSec + "sec ";
      } else {
        return usedMin + usedHour * 60 + usedSec / 60;
      }
    },
    getSubtotal() {
      switch (this.currentCar.carType) {
        case "Turismo": {
          return (this.getUsedHour(false) * 1.5) / 60;
        }
        case "Todo terreno": {
          return (this.getUsedHour(false) * 2.5) / 60;
        }
        case "Furgoneta": {
          return (this.getUsedHour(false) * 3.5) / 60;
        }
        case "Camión": {
          if (this.currentCar.axis <= 3) {
            return (this.getUsedHour(false) * 4.5) / 60;
          } else {
            return (this.getUsedHour(false) * 6.5) / 60;
          }
        }
      }
    },
    getTotal() {
      let subtotal = this.getSubtotal();
      if (this.currentCar.deposite) {
        return (subtotal -= subtotal * 0.4);
      } else {
        return subtotal;
      }
    },
    getBill(event) {
      event.preventDefault();
      this.usedFor = this.getUsedHour();
      this.carType = this.currentCar.carType;
      this.subtotal = "$" + Math.ceil(this.getSubtotal()) + ".00";
      this.total = "$" + Math.ceil(this.getTotal()) + ".00";
      this.$store.dispatch("removeCar", this.currentCar)
      this.$store.dispatch("addSlot");
    },
  },
  computed: {
    registeredAddress() {
      let addressList = [];
      this.$store.state.car.forEach((item) => {
        addressList.push({
          text: item.address,
          value: item.address,
        });
      });
      this.selected = addressList[0].value;
      return addressList;
    },
  },
  watch: {
    selected() {
      this.getCar();
    },
  },
};
</script>

<style lang="css" scoped>
cite {
  padding: 3% 1.2%;

  display: flex;
  justify-content: flex-end;
}

p {
  display: grid;
  padding: 2% 5%;
  grid-template-columns: auto auto;
}

p span:nth-child(2) {
  text-align: end;
}

.mt-3 {
  margin: 3% 0%;
}

.center {
  margin: 1.8% auto;
  text-align: center;
}

.no-cars {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.bill {
  display: grid;
  grid-template-columns: auto auto;
  padding: 2.5% 2.5% 0;
}

.bill-divider {
  width: 80%;
  height: 1px;
  border: none;
  background-color: #2c3e50;
}

.bill-create {
  padding: 0% 4%;
}

.bill-form {
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  border: 1px solid #2c3e50;
  background-color: aliceblue;
}

.bill-form-select {
  width: 90%;
  border: none;
  margin: 2% auto;
  border-radius: 8px;
  background-color: aliceblue;
}

.bill-car-type {
  font-size: 14em;
  text-align: center;
}

.preview {
  width: 90%;
  padding: 2% 0% 0%;
  margin: 0% auto;
  border: 1px solid lightgray;
}

.create-bill {
  border: none;
  color: white;
  padding: 1.5%;
  border-radius: 8px;
  background-color: darkblue;

  display: flex;
  margin: 0 auto 5px;
  justify-self: center;
}
</style>
