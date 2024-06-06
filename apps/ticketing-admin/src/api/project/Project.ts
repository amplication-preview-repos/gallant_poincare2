import { Ticket } from "../ticket/Ticket";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
