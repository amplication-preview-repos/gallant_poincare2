import { Login } from "../login/Login";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  logins?: Array<Login>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
