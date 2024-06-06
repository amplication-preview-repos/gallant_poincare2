import { Ticket } from "../ticket/Ticket";

export type Comment = {
  content: string | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  ticket?: Ticket | null;
  updatedAt: Date;
};
