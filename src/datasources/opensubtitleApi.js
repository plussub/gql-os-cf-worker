const {RESTDataSource} = require('apollo-datasource-rest');

class OpensubtitleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.opensubtitles.com/api/v1/';
    this.headers = {'Api-Key': OPEN_SUBTITLES_API_KEY};
  }

  async search({tmdb_id, language}) {
    return this.get(`subtitles`, {
      tmdb_id,
      languages: language
    }, {headers: this.headers});
  }

  async download({file_id}) {
    const headers = {
      ...this.headers,
      'Accept': '*/*',
      'Host': 'www.opensubtitles.com',
      'accept-encoding': 'gzip, deflate'
      // 'Authorization': token
    };
    console.warn(file_id)
    return this.post("download", {file_id}, {headers});
  }
}

module.exports = OpensubtitleAPI;
