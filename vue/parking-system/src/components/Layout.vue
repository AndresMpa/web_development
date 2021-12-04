<template>
  <Navbar />
  <Parking />
</template>

<script>
import Parking from "./Parking.vue"
import Navbar from "./Navbar.vue"
export default {
  name: "Layout",
  components: {
    Parking,
    Navbar,
  }
};
</script>

<style lang="css" scoped></style>
