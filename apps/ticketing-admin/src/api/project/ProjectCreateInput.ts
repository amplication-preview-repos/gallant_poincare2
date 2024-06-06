import { TicketCreateNestedManyWithoutProjectsInput } from "./TicketCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  tickets?: TicketCreateNestedManyWithoutProjectsInput;
};
