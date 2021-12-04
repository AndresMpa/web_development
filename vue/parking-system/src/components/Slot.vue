<template>
  <div>
    <section class="mx-auto w-80 m-3">
      <h1 class="m-3">Autos registrados</h1>
      <hr />
    </section>
    <section class="mx-auto w-90 mt-3">
      <article v-for="(ticket, index) in slot" :key="index">
        <div v-if="ticket.carType === 'Camión'" class="content">
          <p>
            <span>Tipo de auto: {{ ticket.carType }}</span>
            <span>Placa del auto: {{ ticket.address }}</span>
            <span>
              Aplica descuento: {{ discountAvailable(ticket.deposite) }}
            </span>
            <span>Número de ejes: {{ ticket.axis }}</span>
          </p>
          <p class="divider">
            <span>Hora de ingreso: {{ ticket.getInHour }}</span>
            <span>Fecha de ingreso: {{ ticket.getInDate }}</span>
          </p>
          <div class="divider">
            <i class="fas fa-truck-moving"></i>
          </div>
        </div>
        <div v-else class="content">
          <p>
            <span>Tipo de auto: {{ ticket.carType }}</span>
            <span>Placa del auto: {{ ticket.address }}</span>
            <span>
              Aplica descuento: {{ discountAvailable(ticket.deposite) }}
            </span>
          </p>
          <p class="divider">
            <span>Hora de ingreso: {{ ticket.getInHour }}</span>
            <span>Fecha de ingreso: {{ ticket.getInDate }}</span>
          </p>
          <div class="divider">
            <i class="fas fa-car-side"></i>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Slot",
  data() {
    return {
      slot: this.$store.state.car,
    };
  },
  methods: {
    discountAvailable(ticket) {
      return ticket ? "Si" : "No";
    },
  },
  created() {
    this.$store.dispatch("loadRegisteredStorage");
  },
};
</script>

<style lang="css" scoped>
i {
  font-size: 32px;
}

p {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  background-color: aliceblue;
  border-radius: 8px;
  border: 1px solid black;
  padding: 0.8%;
  margin-bottom: 12px;
}

.divider {
  margin-left: auto;
}

.w-90 {
  width: 90%;
}

.w-80 {
  width: 80%;
}

.mx-auto {
  margin: auto;
}

.m-3 {
  margin: 3%;
}
</style>
