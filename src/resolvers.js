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
      return dataSources.openSubtitleAPI.search({ tmdb_id, language });
    }
  }
};
