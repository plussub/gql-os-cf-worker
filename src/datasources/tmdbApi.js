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

  async seasons({ tmdb_id, language }) {
    return this.get(`tv/${tmdb_id}`, { api_key: this.api_key, language });
  }
}

module.exports = TmdbAPI;
