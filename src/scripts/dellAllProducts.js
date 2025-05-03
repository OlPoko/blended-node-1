import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const dellAllProducts = async () => {
  try {
    const emptyArray = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyArray, null, 2), 'utf8');
    console.log('Усі продукти були успішно видалені.');
  } catch (err) {
    console.error('Помилка при очищенні файлу продуктів:', err.message);
    throw err;
  }
};

dellAllProducts();
