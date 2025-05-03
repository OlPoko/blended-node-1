import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getUniqueCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const products = JSON.parse(data);

    const categories = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];

    return uniqueCategories;
  } catch (err) {
    console.error('Помилка при зчитуванні продуктів:', err.message);
    throw err;
  }
};

getUniqueCategories()
  .then((categories) =>
    console.log('Унікальні категорії продуктів:', categories),
  )
  .catch((err) => console.error('Помилка при виконанні функції:', err));
