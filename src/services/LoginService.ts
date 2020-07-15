import { BaseService } from "./BaseService";

class LoginService extends BaseService {

  public login(loginForm: any): Promise<any> {
    const data = {
      ...loginForm,
      type: 0
    }
    return this.axios.post('/api/tmx/login', data)
  }

}

export default new LoginService();