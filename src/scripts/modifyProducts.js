import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const modifyProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const products = JSON.parse(data);
    const updatedProducts = products.map(({ description, ...rest }) => rest);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedProducts, null, 2),
      'utf8',
    );
    console.log(
      'Файл успішно оновлено: поле "description" видалено з усіх продуктів.',
    );
  } catch (err) {
    console.error('Помилка при оновленні файлу продуктів:', err.message);
    throw err;
  }
};

modifyProducts();
