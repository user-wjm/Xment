import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchdocumentlist:''
  },
  mutations: {
    setsearchdocumentlist(state,payload){
      this.state.searchdocumentlist = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
