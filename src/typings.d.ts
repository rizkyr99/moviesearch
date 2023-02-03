export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date: string;
  overview?: string;
  budget?: string;
  revenue?: string;
  status?: string;
  genres?: Array<{
    id: string;
    name: string;
  }>;
  vote_average?: number;
}
