import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContacts = createFakeContact();
    const updatedContacts = [...existingContacts, newContacts];
    await writeContacts(updatedContacts);

    console.log('Новий контакт успішно додано.');
  } catch (err) {
    console.error('Помилка при додаванні контакту:', err.message);
  }
};

addOneContact();
