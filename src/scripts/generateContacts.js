import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }

    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(`${number} нових контактів успішно додано.`);
  } catch (err) {
    console.error('Помилка при генерації контактів:', err.message);
  }
};

generateContacts(5);
