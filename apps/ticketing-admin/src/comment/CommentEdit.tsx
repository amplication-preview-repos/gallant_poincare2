import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TicketTitle } from "../ticket/TicketTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="createdBy" source="createdBy" />
        <ReferenceInput source="ticket.id" reference="Ticket" label="ticket">
          <SelectInput optionText={TicketTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
