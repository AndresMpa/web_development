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
    <img
      alt="Parking"
      class="divider logout parking"
      src="../assets/logo.png"
      srcset="../assets/logout.png"
    />
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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
  width: 50px;
  height: 45px;
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
</style>
