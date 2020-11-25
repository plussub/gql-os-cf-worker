const {gql} = require('apollo-server-cloudflare');

module.exports = gql`
    type VideoSearchResult {
        entries: [VideoSearchResultEntry]
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
        title: String
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
        media_type: String
    }

    type SubtitleSearchResult {
        total_pages: Int,
        total_count: Int,
        page: Int,
        data: [SubtitleSearchResultData]
    }

    type SubtitleSearchResultData {
        id: String,
        type: String,
        attributes: SubtitleSearchResultDataAttributes
    }

    type SubtitleSearchResultDataAttributes {
        subtitle_id: String,
        language: String,
        download_count: Int,
        new_download_count: Int,
        hearing_impaired: Boolean,
        hd: Boolean,
        format: String,
        fps: Int,
        votes: Int,
        points: Float,
        ratings: Float,
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
        url: String,
        related_links: SubtitleSearchResultDataAttributesRelatedLinks,
        files: [SubtitleSearchResultDataAttributesFiles]
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
        file_id: Int,
        cd_number: Int,
        file_name: String
    }
    
    type SubtitleDownloadResult {
        link: String,
        fname: String,
        requests: Int,
        allowed: Int,
        remaining: Int,
        message: String
    }
    
    type Query {
        videoSearch(query: String!): VideoSearchResult
        subtitleSearch(tmdb_id: String!, language: String!): SubtitleSearchResult
        subtitleDownload(file_id: Int!): SubtitleDownloadResult
    }
`;
