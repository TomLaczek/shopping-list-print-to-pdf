import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const items = new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    ADD_TO_LIST(state, product){
      state.list.push(product);
    },
    REMOVE_ITEM_FROM_LIST(state,index){
      state.list.splice(index,1)
    }
  },
  actions: {
    addToList({commit},product){
      commit('ADD_TO_LIST',product)
    },
    removeItemFromList({commit},index){
      commit('REMOVE_ITEM_FROM_LIST',index)
    }
  },
  modules: {},
  getters:{
    shoppingList(state){
      return state.list.reverse()
    }
  }
})
export default items
