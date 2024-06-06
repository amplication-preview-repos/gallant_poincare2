import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TicketTitle } from "../ticket/TicketTitle";

export const AssignmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assignee" source="assignee" />
        <ReferenceInput source="ticket.id" reference="Ticket" label="ticket">
          <SelectInput optionText={TicketTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
