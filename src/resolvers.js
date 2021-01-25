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

    seasons: async(_source, {tmdb_id, language}, {dataSources}) => {
      const result = await dataSources.tmdbAPI.seasons({tmdb_id, language});
      return {
        ...result,
        seasons: result.seasons.filter(e => e.season_number > 0)
      };
    },

    subtitleSearch: async (_source, { tmdb_id, language, season_number, episode_number }, { dataSources }) => {
      return dataSources.openSubtitleAPI.search({ tmdb_id, language, season_number, episode_number });
    }
  }
};
