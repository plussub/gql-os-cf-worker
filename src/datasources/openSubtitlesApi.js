const {RESTDataSource} = require('apollo-datasource-rest');

class OpenSubtitlesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opensubtitles.com/api/v1/';
    this.headers = {
      'Api-Key': OPEN_SUBTITLES_API_KEY,
      'User-Agent': 'plussub-1.1.0'
    };
  }

  async search({tmdb_id, language, season_number, episode_number}) {
    const seasonNumberObj = season_number ? {season_number} : {};
    const episodeNumberObj = episode_number ? {episode_number} : {};
    return this.get(`subtitles`, {
      ...episodeNumberObj,
      languages: language,
      order_by: 'ratings',
      ...seasonNumberObj,
      tmdb_id,
    }, {headers: this.headers});
  }
}

module.exports = OpenSubtitlesApi;
