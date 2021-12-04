import { createStore } from "vuex";

export default createStore({
  state: {
    car: [],
  },
  mutations: {
    setCar(state, car) {
      state.car.push(car);
    },
  },
  actions: {
    addCar({ commit }, car) {
      commit("setCar", car);
      localStorage.setItem("register", JSON.stringify(this.state.car));
    },
    loadRegisteredStorage({ commit }) {
      if (this.state.car.length === 0) {
        let storage = JSON.parse(localStorage.getItem("register"));
        for (let item of storage) {
          commit("setCar", item);
        }
      }
    },
  },
  modules: {},
});
