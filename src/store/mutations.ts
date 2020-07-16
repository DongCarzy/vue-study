import * as types from './mutation-types'
import gloab from './states/Gloab'

export const mutations = {

  [types.LOGIN_OUT](state: gloab) {
    state.token = ''
  },

  [types.LOGIN_SUC](state: gloab, token: string) {
    state.token = token
  }
}