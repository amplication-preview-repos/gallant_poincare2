import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  ticket?: TicketWhereUniqueInput;
};
