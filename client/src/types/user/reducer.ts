import { User } from "./User";

export interface UserReducer {
  loading: boolean;
  err: boolean | string;
  user: User | null;
}
