import Vue from "vue"
import Vuex from 'vuex'
import * as types from './mutation-types'
import { actions } from './actions'
import { mutations } from './mutations'

import Gloab from "@store/states/Gloab"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store<Gloab>({
  // 状态不是由 mutation 函数引起则抛错,性能有损耗,发布环境改为false
  strict: debug,
  state: {
    token: ''
  },
  // 暴露给外界调用,更新state状态,必须是同步函数
  mutations: mutations,
  // 异步操作
  actions: actions,
  modules: {

  },
  // 实时计算并缓存状态
  getters: {
    [types.IS_LOGIN]: state => {
      return state.token != ''
    }
  }
})