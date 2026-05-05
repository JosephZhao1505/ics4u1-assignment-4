export type MoviesResponse = {
  results: Array<{
    id: number;
    original_title: string;
    poster_path: string;
  }>;
  total_pages: number;
};

export type TvsResponse = {
  results: Array<{
    id: number;
    original_name: string;
    poster_path: string;
  }>;
  total_pages: number;
};

export type MovieResponse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: string;
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
};

export type TvResponse = {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: string;
  name?: string;
  first_air_date?: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
    seasons?: Array<{
    id: number;
    name: string;
    air_date?: string;
    poster_path: string;
    season_number: number;
  }>;
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
};

export type SeasonResponse = {
  name: string;
  season_number: number;
  air_date?: string;
  overview: string;
  episodes: Array<{
    id: number;
    name: string;
    air_date: string;
    still_path: string;
  }>;
};

export type CreditsResponse = {
  cast: Array<{
    id: number;
    name: string;
    profile_path: string | null;
    character: string;
  }>;
};

export type ReviewsResponse = {
  results: Array<{
    id: string;
    author: string;
    content: string;
  }>;
};

export type SearchResponse = {
  results: Array<{
    id: number;
    name: string;
    profile_path: string | null;
  }>;
  total_pages: number;
  total_results: number;
};
