<template>
  <nav class="navbar">
    <img
      alt="Parking"
      class="parking"
      src="../assets/logo.png"
      srcset="../assets/logo.png"
    />
    <div class="router">
      <router-link class="link" to="/">Registro</router-link>
      <router-link class="link" to="/check-in">Ingreso</router-link>
      <router-link class="link" to="/check-out">Salida & factura</router-link>
    </div>
    <p class="slots">Espacios: {{ this.$store.state.slot }}</p>
    <div class="navbar-right">
      <img
        alt="Parking"
        class="logout parking"
        src="../assets/logo.png"
        srcset="../assets/logout.png"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  beforeCreate() {
    this.$store.dispatch("loadAvalibleInfo");
    this.$store.dispatch("loadAvalibleSlot");
  },
};
</script>

<style lang="css" scoped>
.navbar {
  background-color: darkblue;
  padding: 1.25%;
  display: flex;
}

.parking,
.logout,
.link {
  color: white;
}

.parking {
  width: 35px;
  height: 30px;
}

.logout {
  margin-left: auto;
}

.router {
  display: flex;
  margin: 0% 15px;
  align-items: center;
}

.link {
  margin: 0% 8px;
  text-decoration: none;
}

.navbar-right {
  display: flex;
  margin-left: auto;
}

.slots {
  color: white;
  display: flex;
  align-items: center;
}
</style>
