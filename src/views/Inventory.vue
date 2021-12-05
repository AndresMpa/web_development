<template>
  <Slot />
</template>

<script>
import Slot from "@/components/Slot.vue";
export default {
  name: "Inventory",
  components: {
    Slot,
  },
};
</script>

<style lang="css" scoped></style>
