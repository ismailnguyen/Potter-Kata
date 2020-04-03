
const unitBookPrice = 8;

const allSameBooks = books => books.every( book => book === books[0] )

const defaultQuantityByPrice = basket => basket.length * unitBookPrice;

function allDifferentBooks (basket) {
  const uniqueBooks = new Set(basket);

  return uniqueBooks.length === basket.length;
}

function getUniqueBooks (books) {
  return new Set(basket);
}

export default function calculateTotalPrice(basket)
{
  if (!basket)
    return 0;

  if (allSameBooks(basket))
    return defaultQuantityByPrice(basket);

  if (allDifferentBooks(basket))
    {
      if (basket.length === 2)
      return defaultQuantityByPrice(basket) * 0.95;

    if (basket.length === 3) {
      return defaultQuantityByPrice(basket) * 0.90;
    }

    if (basket.length === 4)
      return defaultQuantityByPrice(basket) * 0.80;

    return defaultQuantityByPrice(basket) * 0.75;
  }

  // const uniqueBooks = getUniqueBooks(basket);
  // const differentBooksPrice = calculateTotalPrice(uniqueBooks);
  // const sameBooks = basket.length - uniqueBooks.length;

  // [1, 1, 1, 2, 2, 2, 2, 3, 3]

  // uniqueBooks =  [1, 2, 3]
  // sameBooks = 6;

}
