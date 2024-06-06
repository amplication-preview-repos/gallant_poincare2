import { Assignment } from "../assignment/Assignment";
import { Comment } from "../comment/Comment";
import { Project } from "../project/Project";

export type Ticket = {
  assignedTo: string | null;
  assignments?: Array<Assignment>;
  comments?: Array<Comment>;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  priority?: "Option1" | null;
  project?: Project | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
