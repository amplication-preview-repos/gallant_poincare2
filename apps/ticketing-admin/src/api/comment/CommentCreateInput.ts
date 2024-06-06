import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  createdBy?: string | null;
  ticket?: TicketWhereUniqueInput | null;
};
