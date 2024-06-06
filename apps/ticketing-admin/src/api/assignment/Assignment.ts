import { Ticket } from "../ticket/Ticket";

export type Assignment = {
  assignee: string | null;
  createdAt: Date;
  id: string;
  ticket?: Ticket | null;
  updatedAt: Date;
};
