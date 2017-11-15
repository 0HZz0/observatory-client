import Vue from 'vue'
import Vuex from 'vuex'
import achievement from './achievement'
import project from './project'
import post from './post'
import user from './user'
import notification from './notification'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    achievement,
    project,
    post,
    user,
    notification
  }
})
