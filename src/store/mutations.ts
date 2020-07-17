import gloab from '@store//states/Gloab'
import * as types from "@store/mutation-types"

export const mutations = {

  [types.LOGIN_OUT](state: gloab) {
    state.token = ''
    // sessionStorage.clear()
  },

  [types.LOGIN_SUC](state: gloab, token: string) {
    state.token = token
    // sessionStorage.setItem('token', token)
  }
}