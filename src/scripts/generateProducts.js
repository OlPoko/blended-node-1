import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (number) => {
  try {
    const existingProducts = await readProducts();

    const newProducts = [];
    for (let i = 0; i < number; i++) {
      const product = createFakeProduct();
      newProducts.push(product);
    }

    const updatedContacts = [...existingProducts, ...newProducts];
    await writeProducts(updatedContacts);

    console.log(`${number} нових продуктів успішно додано.`);
  } catch (err) {
    console.error('Помилка при генерації продуків:', err.message);
  }
};

generateProducts(12);
