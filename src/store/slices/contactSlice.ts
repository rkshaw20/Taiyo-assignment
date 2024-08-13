import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialContactData } from "../../utils/constants";
import { Contact, Contacts } from "../../types/contact";

const initialState: Contacts = { contacts: initialContactData };

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // create contact
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    // edit contact
    editContact: (state, action: PayloadAction<Contact>) => {
      const updatedContact = action.payload;
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      state.contacts = updatedContacts;
    },
    // delete contact
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
