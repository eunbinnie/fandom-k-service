export type IdolGender = 'female' | 'male';

export interface GetIdolsParams {
  cursor?: number;
  pageSize: number;
}

export interface IdolData {
  id: number;
  name: string;
  gender: IdolGender;
  group: string;
  profilePicture: string;
  totalVotes: number;
  teamId: number;
}

export interface IdolList {
  list: IdolData[];
  nextCursor: number;
}
