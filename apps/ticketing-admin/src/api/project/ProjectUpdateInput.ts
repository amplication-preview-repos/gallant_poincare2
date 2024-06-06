import { TicketUpdateManyWithoutProjectsInput } from "./TicketUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  tickets?: TicketUpdateManyWithoutProjectsInput;
};
