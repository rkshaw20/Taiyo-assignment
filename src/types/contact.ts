import { STATUS } from "./status";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: STATUS;
}

export interface Contacts {
  contacts: Array<Contact>;
}
