import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  createdBy?: string | null;
  ticket?: TicketWhereUniqueInput | null;
};
