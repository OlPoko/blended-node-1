import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
    throw err;
  }
};
