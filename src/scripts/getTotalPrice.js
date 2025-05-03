import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const products = JSON.parse(data);
    const totalPrice = products.reduce(
      (sum, product) => sum + Number(product.price),
      0,
    );
    return totalPrice;
  } catch (err) {
    console.error('Помилка при зчитуванні продуктів:', err.message);
    throw err;
  }
};

// Логування

getTotalPrice()
  .then((total) => console.log('Загальна вартість усіх продуктів:', total))
  .catch((err) => console.error('Помилка при виконанні функції:', err));
