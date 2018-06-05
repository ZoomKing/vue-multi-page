import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './indexModule'


Vue.use(Vuex);



const store = new Vuex.Store({
    modules :{
        indexModule:indexModule,
    }
  })
  export default store