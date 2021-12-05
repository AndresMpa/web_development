import { createStore } from "vuex";

export default createStore({
  state: {
    car: [],
    slot: -1,
  },
  mutations: {
    setCar(state, car) {
      state.car.push(car);
    },
    removeCar(state, car) {
      state.car.splice(car, 1);
    },
    setAvalibleSlot(state, avalibleSlot) {
      state.slot = avalibleSlot;
    },
  },
  actions: {
    addCar({ commit }, car) {
      commit("setCar", car);
      localStorage.setItem("register", JSON.stringify(this.state.car));
    },
    removeCar({ commit }, car) {
      let index = this.state.car.indexOf(car);
      if (index > -1) {
        commit("removeCar", index);
        localStorage.setItem("register", JSON.stringify(this.state.car));
      }
    },
    addSlot({ commit }) {
      commit("setAvalibleSlot", parseInt(this.state.slot) + 1);
      localStorage.setItem("avalible", this.state.slot);
    },
    removeSlot({ commit }) {
      commit("setAvalibleSlot", parseInt(this.state.slot) - 1);
      localStorage.setItem("avalible", this.state.slot);
    },
    loadAvalibleInfo({ commit }) {
      let storage = JSON.parse(localStorage.getItem("register"));
      if (this.state.car.length === 0 && storage !== null) {
        for (let item of storage) {
          commit("setCar", item);
        }
      }
    },
    loadAvalibleSlot({ commit }) {
      let avalible = parseInt(localStorage.getItem("avalible"));
      if (!isNaN(avalible)) {
        commit("setAvalibleSlot", avalible);
      }
      if (this.state.slot === -1) {
        commit("setAvalibleSlot", 100);
      }
    },
  },
  modules: {},
});
