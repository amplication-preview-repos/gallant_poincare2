import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TicketWhereInput = {
  assignedTo?: StringNullableFilter;
  assignments?: AssignmentListRelationFilter;
  comments?: CommentListRelationFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
};
