// Interfaces 
import { IResponse, IMision } from '../interfaces/mainInterfaces';


const axios = require('axios').default;
const apiURL: string = process.env.API_URL || 'http://localhost:9001';


export default class NetworkManager {
  static async getHealth(): Promise<boolean> {
    try {
      const { data } = await axios.get(`${apiURL}/`);
      return data;
    } catch {
      return false;
    }
  };

  static async login(email: string, password: string): Promise<any> {

  };

  static async getMissions(): Promise<IResponse<IMision[]>> {
    try {
      const { data } = await axios.get(`${apiURL}/missions`);
      return data;
    } catch(error) {
      return { success: false, message: error.code, data: null };
    }
  };

  static async addMission(mission): Promise<any> {
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    return true;
  };
};

// folder struncture
// controllers - models - services - helpers