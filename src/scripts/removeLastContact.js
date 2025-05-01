import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Нема що видаляти — масив вже порожній :)');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);
    console.log('Останній контакт успішно видалено.');
  } catch (err) {
    console.error('Помилка при видаленні контакту:', err.message);
    throw err;
  }
};

removeLastContact();
