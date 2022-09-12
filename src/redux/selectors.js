import { createSelector } from "@reduxjs/toolkit";

export const contactSelector = (state) => state.contact.contactList;
export const searchFilterSelector = (state) =>
  state.contact.filter.searchFilter;

export const remainingContactListSelector = createSelector(
  contactSelector,
  searchFilterSelector,
  (contactList, search) => {
    const searchContacts = contactList.filter((contact) =>
      contact.name.includes(search)
    );
    return searchContacts;
  }
);
