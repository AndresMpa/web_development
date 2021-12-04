<template>
  <div class="home">
    <Parking />
  </div>
</template>

<script>
// @ is an alias to /src
import Parking from "@/components/Parking.vue";

export default {
  name: "Home",
  components: {
    Parking,
  },
};
</script>
