const {gql} = require('apollo-server-cloudflare');

module.exports = gql`
    type VideoSearchResult {
        entries: [VideoSearchResultEntry!]!
    }

    type VideoSearchResultEntry {
        tmdb_id: ID!
        "e.g: /IfB9hy4JH1eH6HEfIgIGORXi5h.jpg"
        poster_path: String
        adult: Boolean
        "e.g: Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever."
        overview: String
        "e.g: 2016-10-19"
        release_date: String
        genre_ids: [Int]
        "e.g: Jack Reacher: Never Go Back"
        original_title: String
        "e.g: en"
        original_language: String
        "e.g: Jack Reacher: Never Go Back"
        title: String!
        "e.g: /4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
        backdrop_path: String
        "e.g: 26.818468"
        popularity: Float
        "e.g: 201"
        vote_count: Int
        video: Boolean
        "e.g: 4.19"
        vote_average: Float,
        "e.g. tv or movie"
        media_type: String!
    }

    type SeasonsResult {
        seasons: [Seasons!]!
    }
    
    type Seasons {
        id: Int!,
        season_number: Int!,
        episode_count: Int!
    }
    
    type SubtitleSearchResult {
        total_pages: Int!,
        total_count: Int!,
        page: Int!,
        data: [SubtitleSearchResultData!]!
    }

    type SubtitleSearchResultData {
        id: String!,
        type: String!,
        attributes: SubtitleSearchResultDataAttributes!
    }

    type SubtitleSearchResultDataAttributes {
        subtitle_id: String,
        language: String!,
        download_count: Int,
        new_download_count: Int,
        hearing_impaired: Boolean!,
        hd: Boolean,
        format: String,
        fps: Int,
        votes: Int,
        points: Float,
        ratings: Float!,
        from_trusted: Boolean,
        foreign_parts_only: Boolean,
        auto_translation: Boolean,
        ai_translated: Boolean,
        machine_translated: Boolean,
        upload_date: String,
        release: String,
        comments: String,
        legacy_subtitle_id: String,
        uploader: SubtitleSearchResultDataAttributesUploader,
        feature_details: SubtitleSearchResultDataAttributesFeatureDetails,
        url: String!,
        related_links: SubtitleSearchResultDataAttributesRelatedLinks,
        files: [SubtitleSearchResultDataAttributesFiles!]!
    }


    type SubtitleSearchResultDataAttributesUploader {
        uploader_id: Int,
        name: String,
        rank: String
    }

    type SubtitleSearchResultDataAttributesFeatureDetails {
        feature_id: Int,
        feature_type: String,
        year: Int,
        title: String,
        movie_name: String,
        imdb_id: Int,
        tmdb_id: Int
    }

    type SubtitleSearchResultDataAttributesRelatedLinks {
        label: String,
        url: String,
        img_url: String
    }

    type SubtitleSearchResultDataAttributesFiles {
        file_id: Int!,
        cd_number: Int,
        file_name: String
    }

    type LegacySubtitleSearchResult {
        entries: [LegacySubtitleSearchResultEntry!]!
    }

    type LegacySubtitleSearchResultEntry {
        "e.g: 60"
        IDMovie: Int
        "e.g: 110912"
        IDMovieImdb: Int
        "e.g: 0"
        IDSubMovieFile: Int
        "e.g: 5773582"
        IDSubtitle: Int
        "e.g: 1954351726"
        IDSubtitleFile: Int
        "e.g: en"
        ISO639: String
        "e.g: BluRay"
        InfoFormat: String
        "e.g: "
        InfoOther: String
        "e.g: YIFY"
        InfoReleaseGroup: String
        "e.g: English"
        LanguageName: String!
        "e.g: imdbid"
        MatchedBy: String
        "e.g: 0"
        MovieByteSize: Int
        "e.g: 0.000"
        MovieFPS: String
        "e.g: 0"
        MovieHash: String
        "e.g: 8.9"
        MovieImdbRating: Float
        "e.g: movie"
        MovieKind: String
        "e.g: Pulp Fiction"
        MovieName: String
        "e.g: "
        MovieNameEng: String
        "e.g: Pulp.Fiction.1994.720p.BrRip.x264.YIFY"
        MovieReleaseName: String
        "e.g: 0"
        MovieTimeMS: Int
        "e.g: 1994"
        MovieYear: Int
        "e.g: 1"
        QueryCached: Int
        "e.g: 0"
        QueryNumber: Int
        "e.g:  36.2645"
        Score: Float
        "e.g: 0"
        SeriesEpisode: Int
        "e.g: 0"
        SeriesIMDBParent: String
        "e.g: 0"
        SeriesSeason: Int
        "e.g: 1"
        SubActualCD: Int
        "e.g: 2014-08-01 09:00:17"
        SubAddDate: String
        "e.g: "
        SubAuthorComment: String
        "e.g: 0"
        SubAutoTranslation: Int
        "e.g: 0"
        SubBad: Int
        "e.g: 0"
        SubComments: Int
        "e.g: https://dl.opensubtitles.org/en/download/src-api/vrf-19b00c54/filead/1954351726.gz"
        SubDownloadLink: String!
        "e.g: 126450"
        SubDownloadsCnt: Int
        "e.g: UTF-8"
        SubEncoding: String
        "e.g: 0"
        SubFeatured: Int
        "e.g: Pulp.Fiction.1994.720p.BrRip.x264.YIFY.eng.srt"
        SubFileName: String!
        "e.g: 0"
        SubForeignPartsOnly: Int
        "e.g: srt"
        SubFormat: String!
        "e.g: 1"
        SubFromTrusted: Int
        "e.g: 1"
        SubHD: Int
        "e.g: db22e66b48e765c6ae0ed126844befa4"
        SubHash: String!
        "e.g: 0"
        SubHearingImpaired: Int
        "e.g: eng"
        SubLanguageID: String
        "e.g: 02:29:10"
        SubLastTS: String
        "e.g: 10.0"
        SubRating: Float!
        "e.g: 198268"
        SubSize: Int
        "e.g: 1"
        SubSumCD: Int
        "e.g: 1"
        SubSumVotes: Int
        "e.g: 0"
        SubTSGroup: Int
        "e.g: 0cc04c5b35d71615bedbab9edfbe6919"
        SubTSGroupHash: String
        "e.g: "
        SubTranslator: String
        "e.g: http://www.opensubtitles.org/en/subtitles/5773582/pulp-fiction-en"
        SubtitlesLink: String!
        "e.g: 1012060"
        UserID: Int
        "e.g: SuperMau"
        UserNickName: String
        "e.g: trusted"
        UserRank: String
        "e.g: https://dl.opensubtitles.org/en/download/src-api/vrf-f5660bbe/subad/5773582"
        ZipDownloadLink: String!
    }
    
    type Query {
        videoSearch(query: String!): VideoSearchResult!
        seasons(tmdb_id: String!, language: String!): SeasonsResult!
        subtitleSearch(tmdb_id: String!, language: String!, season_number: Int, episode_number: Int): SubtitleSearchResult!,
        legacySubtitleSearch(tmdb_id: String!, language: String!, media_type: String!): LegacySubtitleSearchResult!
    }
    
    type Mutation{
        track(origin: String!, source: String!, language: String!): String!
    }
`;
