export interface GetIdolsParams {
  cursor?: number;
  pageSize: number;
}

export interface IdolData {
  id: number;
  name: string;
  gender: string;
  group: string;
  profilePicture: string;
  totalVotes: number;
  teamId: number;
}

export interface IdolList {
  list: IdolData[];
  nextCursor: number;
}
