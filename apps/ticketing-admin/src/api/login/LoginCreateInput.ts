import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoginCreateInput = {
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
