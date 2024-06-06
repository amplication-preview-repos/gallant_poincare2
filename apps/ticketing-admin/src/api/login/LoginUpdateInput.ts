import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoginUpdateInput = {
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
