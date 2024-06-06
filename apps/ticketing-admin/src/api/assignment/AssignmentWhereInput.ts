import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type AssignmentWhereInput = {
  assignee?: StringNullableFilter;
  id?: StringFilter;
  ticket?: TicketWhereUniqueInput;
};
