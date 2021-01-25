const { RESTDataSource } = require('apollo-datasource-rest');

class LegacyOpenSubtitlesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://rest.opensubtitles.org/search';
    this.headers = { 'X-User-Agent': 'TemporaryUserAgent' };
  }

  async search({ imdbId, language }) {
    return this.get(`https://rest.opensubtitles.org/search/imdbid-${imdbId}/sublanguageid-${language}`, undefined, { headers: this.headers });
  }
}

module.exports = LegacyOpenSubtitlesAPI;
