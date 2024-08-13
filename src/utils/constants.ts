import { v4 as uuid } from "uuid";
import { STATUS } from "../types/status";
import { Contact } from "../types/contact";

export const initialContactData: Contact[] = [
  { id: uuid(), firstName: "Raj", lastName: "Shaw", status: STATUS.ACTIVE },
  {
    id: uuid(),
    firstName: "Aditi",
    lastName: "Gupta",
    status: STATUS.INACTIVE,
  },
  { id: uuid(), firstName: "Kiran", lastName: "Rao", status: STATUS.ACTIVE },
  {
    id: uuid(),
    firstName: "Nisha",
    lastName: "Kumar",
    status: STATUS.INACTIVE,
  },
  { id: uuid(), firstName: "Suresh", lastName: "Patel", status: STATUS.ACTIVE },
];
