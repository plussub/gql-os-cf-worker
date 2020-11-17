const iso639Map = require('./iso639Map.json');

module.exports = {
  Query: {
    videoSearch: async (_source, { query }, { dataSources }) => {
      const entries = (await dataSources.tmdbAPI.search(query))
        .filter((result) => result.media_type !== 'person')
        .map((result) => (result.media_type === 'movie' ? result : { ...result, title: result.name, release_date: result.first_air_date }))
        .map((result) => (result.poster_path === null ? result : { ...result, poster_path: `https://image.tmdb.org/t/p/w500/${result.poster_path}` }))
        .map((result) => ({...result, tmdb_id: result.id}));

      return {
        entries
      };
    },
    subtitleSearch: async (_source, { tmdb_id, language, media_type }, { dataSources }) => {
      const getImdb = async () =>
        media_type === 'tv'
          ? dataSources.tmdbAPI
              .tvInformation({ tmdb_id })
              .then(({ external_ids: { imdb_id } }) => imdb_id)
              .then((imdb_id) => imdb_id.replace('tt', ''))
          : dataSources.tmdbAPI.movieInformation({ tmdb_id }).then(({ imdb_id }) => imdb_id.replace('tt', ''));

      const imdbId = await getImdb();
      const entries = (await dataSources.openSubtitleAPI.search({ imdbId, language: iso639Map[language] }))
        .filter(({ SubFormat }) => {
          const format = SubFormat.toLowerCase();
          return format === 'srt' || format === 'vtt';
        })
        .sort((a, b) => parseInt(b.SubRating, 10) - parseInt(a.SubRating, 10))
      // (a, b) => a.SubRating.localeCompare(b.SubRating)
      return {
        entries
      };
    }
  }
};
