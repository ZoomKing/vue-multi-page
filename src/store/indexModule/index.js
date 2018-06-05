import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

const indexModule ={
    state,actions,mutations
}

export default indexModule;