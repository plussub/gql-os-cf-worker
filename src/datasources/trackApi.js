import { RESTDataSource } from 'apollo-datasource-rest';


export class TrackApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://le4lquqmc1.execute-api.eu-west-1.amazonaws.com';
  }

  async track({origin, language, source}) {
    return this.post('/', {
      origin,
      source,
      language
    });
  }
}