import { nanoid } from 'nanoid';
import { createReducer } from '@reduxjs/toolkit';

export const addContact = createReducer(
  'contacts/addContact',
  (nameText, numberText) => {
    return {
      type: 'contacts/addContact',
      payload: {
        id: nanoid(),
        name: nameText,
        number: numberText,
      },
    };
  }
);
export const delContact = createReducer('contacts/deleteContact');
export const setFilter = createReducer('filter/setFilter');