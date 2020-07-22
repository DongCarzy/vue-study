import * as types from './mutation-types'
import { ActionContext } from 'vuex'
import gloab from './states/Gloab'

export const actions = {
  [types.LOGIN_OUT]: ({ commit }: ActionContext<gloab, any>) => {
    return commit(types.LOGIN_OUT)
  }
}
