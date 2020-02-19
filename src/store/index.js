import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  key: '_session',
  storage: window.localStorage,
  modules: ['user']
})

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user
  },
  plugins: [ vuexLocal.plugin]
})
