import axios, { AxiosStatic } from "axios";

export class BaseService {

  public axios: AxiosStatic;

  constructor(){
    this.axios = axios;
  }

}