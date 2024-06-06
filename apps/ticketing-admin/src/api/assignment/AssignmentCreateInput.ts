import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type AssignmentCreateInput = {
  assignee?: string | null;
  ticket?: TicketWhereUniqueInput | null;
};
