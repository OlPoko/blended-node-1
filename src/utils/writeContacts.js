import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const json = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err.message);
    throw err;
  }
};
