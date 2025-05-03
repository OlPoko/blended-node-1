import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const groupProductsByCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const products = JSON.parse(data);

    const grouped = products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product.name);
      return acc;
    }, {});

    return grouped;
  } catch (err) {
    console.error('Помилка при зчитуванні продуктів:', err.message);
    throw err;
  }
};

groupProductsByCategories()
  .then((result) => console.log('Продукти, згруповані за категоріями:', result))
  .catch((err) => console.error('Помилка при виконанні функції:', err));
