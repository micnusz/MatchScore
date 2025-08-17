export interface FixturesResponse {
  data: FixtureData[];
  pagination: Pagination;
  meta: Meta;
}

export interface FixtureData {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface Fixture {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number | null;
  second: number | null;
}

export interface Venue {
  id: number | null;
  name: string | null;
  city: string | null;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number | null;
  extra: number | null;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
  round: string;
  standings: boolean;
}

export interface Teams {
  home: Team;
  away: Team;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export interface Goals {
  home: number | null;
  away: number | null;
}

export interface Score {
  halftime: ScoreDetails;
  fulltime: ScoreDetails;
  extratime: ScoreDetails;
  penalty: ScoreDetails;
}

export interface ScoreDetails {
  home: number | null;
  away: number | null;
}

export interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Meta {
  cached: boolean;
  itemCount: number;
}
