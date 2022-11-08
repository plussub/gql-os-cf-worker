import { RESTDataSource } from 'apollo-datasource-rest';


export class TrackApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://heapanalytics.com';
  }

  async track({origin, language, source}) {
    return this.post('/api/track', {
      app_id: HEAP_APP_ID,
      event: "track",
      identity: "unknown",
      properties: {
        origin,
        source,
        language
      }
    });
  }
}