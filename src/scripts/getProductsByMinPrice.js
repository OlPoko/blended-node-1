import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const products = JSON.parse(data);

    const filteredProducts = products.filter(
      (product) => product.price >= minPrice,
    );

    return filteredProducts;
  } catch (err) {
    console.error('Помилка при зчитуванні продуктів:', err.message);
    throw err;
  }
};

// Логування

const minPrice = 50;
getProductsByMinPrice(minPrice)
  .then((result) => console.log('Результат фільтрації:', result))
  .catch((err) => console.error('Помилка при виконанні функції:', err));
