import { RESTDataSource } from 'apollo-datasource-rest';


export class OpenSubtitlesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opensubtitles.com/api/v1/';
    this.headers = {
      'Api-Key': OPEN_SUBTITLES_API_KEY,
      'User-Agent': 'plussub_client v1',
      'Accept': 'application/json'
    };
  }

  async listContentLanguages() {
    return this.get(`infos/languages`)
      .catch((error) => {

        console.error(error);
        return ({ data: [] });
      });
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