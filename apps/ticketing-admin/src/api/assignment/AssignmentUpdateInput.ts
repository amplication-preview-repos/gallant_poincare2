import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type AssignmentUpdateInput = {
  assignee?: string | null;
  ticket?: TicketWhereUniqueInput | null;
};
