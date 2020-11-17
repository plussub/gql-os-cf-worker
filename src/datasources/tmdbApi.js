const { RESTDataSource } = require('apollo-datasource-rest');

class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3';
    this.api_key = THE_MOVIE_DB_API_KEY;
  }

  async search(query) {
    return (
      await this.get('search/multi', {
        query,
        include_adult: false,
        page: 1,
        api_key: this.api_key
      })
    ).results;
  }

  async movieInformation({ tmdb_id }) {
    return this.get(`movie/${tmdb_id}`, { api_key: this.api_key });
  }

  async tvInformation({ tmdb_id }) {
    return this.get(`tv/${tmdb_id}`, { append_to_response: 'external_ids', api_key: this.api_key });
  }
}

module.exports = TmdbAPI;
