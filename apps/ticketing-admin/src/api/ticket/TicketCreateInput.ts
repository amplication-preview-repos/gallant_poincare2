import { AssignmentCreateNestedManyWithoutTicketsInput } from "./AssignmentCreateNestedManyWithoutTicketsInput";
import { CommentCreateNestedManyWithoutTicketsInput } from "./CommentCreateNestedManyWithoutTicketsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TicketCreateInput = {
  assignedTo?: string | null;
  assignments?: AssignmentCreateNestedManyWithoutTicketsInput;
  comments?: CommentCreateNestedManyWithoutTicketsInput;
  createdBy?: string | null;
  description?: string | null;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
