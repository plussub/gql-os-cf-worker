const {RESTDataSource} = require('apollo-datasource-rest');

class OpensubtitleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opensubtitles.com/api/v1/';
    this.headers = {'Api-Key': OPEN_SUBTITLES_API_KEY};
  }

  async search({tmdb_id, language}) {
    return this.get(`subtitles`, {
      tmdb_id,
      languages: language
    }, {headers: this.headers});
  }
}

module.exports = OpensubtitleAPI;
