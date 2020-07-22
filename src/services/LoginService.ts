import { BaseService } from './BaseService'
import { AxiosResponse } from 'axios'

class LoginService extends BaseService {
  public login (loginForm: any): Promise<AxiosResponse<any>> {
    const data = {
      ...loginForm,
      type: 0
    }
    return this.axios.post('/api/tmx/login', data)
  }
}

export default new LoginService()
