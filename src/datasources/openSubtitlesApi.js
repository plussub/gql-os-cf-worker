const {RESTDataSource} = require('apollo-datasource-rest');

class OpenSubtitlesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opensubtitles.com/api/v1/';
    this.headers = {'Api-Key': OPEN_SUBTITLES_API_KEY};
  }

  async search({tmdb_id, language, season_number, episode_number}) {
    const seasonNumberObj = season_number ? {season_number} : {};
    const episodeNumberObj = episode_number ? {episode_number} : {};

    return this.get(`subtitles`, {
      tmdb_id,
      languages: language,
      ...seasonNumberObj,
      ...episodeNumberObj
    }, {headers: this.headers});
  }
}

module.exports = OpenSubtitlesApi;
