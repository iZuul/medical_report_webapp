import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import Cookie from 'js-cookie'
import users from './modules/users'
import pasients from './modules/pasients'
import recaps from './modules/recaps'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersistence({
  key:'store',
  storage:window.localStorage,
  modules:['users']
})


export default new Vuex.Store({
  state:{

  },
  mutations:{

  },
  actions:{

  },
  modules: {
    pasients,
    users,
    recaps
  },
  plugins:[vuexLocalStorage.plugin],
  strict: process.env.NODE_ENV !== "production"
})
