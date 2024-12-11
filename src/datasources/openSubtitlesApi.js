import { RESTDataSource } from 'apollo-datasource-rest';


export class OpenSubtitlesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opensubtitles.com/api/v1/';
    this.headers = {
      'Api-Key': OPEN_SUBTITLES_API_KEY,
      'User-Agent': 'opensubtitles-extension-1.1.0'
    };
  }

  async listContentLanguages() {
    try{
      return this.get(`infos/languages`, null, { headers: this.headers });
    } catch {
      return {
        data: []
      }
    }
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