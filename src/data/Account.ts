import { ProfileType } from "./Profile";

export interface Account {
  id: string;
  email: string;
  profile?: ProfileType;
}
