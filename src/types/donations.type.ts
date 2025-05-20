import type { IdolGender } from './idols.type';

interface DonationIdol {
  id: number;
  name: string;
  gender: IdolGender;
  group: string;
  profilePicture: string;
  totalVotes: number;
}

export interface DonationData {
  id: number;
  idolId: number;
  title: string;
  subtitle: string;
  targetDonation: number;
  receivedDonations: number;
  createdAt: string;
  deadline: string;
  status: boolean;
  idol: DonationIdol;
}

export interface DonationsList {
  list: DonationData[];
  nextCursor: number | null;
}
