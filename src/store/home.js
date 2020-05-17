import { createStore } from 'vuex'
export default createStore({
  namespaced: true,
  state: {
    aaa: 123
  },
  actions: {
    aaa ({ commit }, value) {
      commit('aaa', value)
    }
  },
  mutations: {
    aaa (state, value) {
      state.aaa = value
    }
  },
  // getters: {
  //   aaa: (state) => state.aaa
  // }
  
})