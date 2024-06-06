import { SortOrder } from "../../util/SortOrder";

export type AssignmentOrderByInput = {
  assignee?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
};
