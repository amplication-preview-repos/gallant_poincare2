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

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="createdBy" source="createdBy" />
        <ReferenceInput source="ticket.id" reference="Ticket" label="ticket">
          <SelectInput optionText={TicketTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
