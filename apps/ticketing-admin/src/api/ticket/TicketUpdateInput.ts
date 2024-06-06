import { AssignmentUpdateManyWithoutTicketsInput } from "./AssignmentUpdateManyWithoutTicketsInput";
import { CommentUpdateManyWithoutTicketsInput } from "./CommentUpdateManyWithoutTicketsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TicketUpdateInput = {
  assignedTo?: string | null;
  assignments?: AssignmentUpdateManyWithoutTicketsInput;
  comments?: CommentUpdateManyWithoutTicketsInput;
  createdBy?: string | null;
  description?: string | null;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
