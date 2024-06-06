import { Assignment as TAssignment } from "../api/assignment/Assignment";

export const ASSIGNMENT_TITLE_FIELD = "assignee";

export const AssignmentTitle = (record: TAssignment): string => {
  return record.assignee?.toString() || String(record.id);
};
