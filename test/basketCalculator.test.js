import calculateTotalPrice from '../src/basketCalculator'

describe('basketCalculator', () => {

  describe('simple cases', () => {

    it('No books should cost 0 euro', () => {
      const totalPrice = calculateTotalPrice();

      expect(totalPrice).toBe(0);
    })

    it('One copy of any of the five books costs 8 EUR', () => {
      const basket = [
          1
        ];

      const totalPrice = calculateTotalPrice(basket);

      expect(totalPrice).toBe(8);
    })

    it('Two copies of the same of the five books costs 16 EUR', () => {
      const basket = [
          1, 1
        ];

      const totalPrice = calculateTotalPrice(basket);

      expect(totalPrice).toBe(16);
    })

    it('Two different books from the series, you get a 5% discount on those two books', () => {
      const basket = [
          1, 2
        ];

      const totalPrice = calculateTotalPrice(basket);

      expect(totalPrice).toBe(15.20);
    })
    
    it('3 different books, you get a 10% discount', () => {
      const basket = [
          1, 2, 3
        ];

      const totalPrice = calculateTotalPrice(basket);

      expect(totalPrice).toBe(21.60);
    })

    it('4 different books, you get a 20% discount', () => {
      const basket = [
          1, 2, 3, 4  
        ];

      const totalPrice = calculateTotalPrice(basket);

      expect(totalPrice).toBe(25.60);
    })

    it('whole hog, and buy all 5, you get a huge 25% discount', () => {
      const basket = [
        1, 2, 3, 4, 5
      ];

      const totalPrice = calculateTotalPrice(basket);

      expect(totalPrice).toBe(30);
    })

    // it('2 different books and 1 same you get a 5% discount on two first books, and the last one costs 8€', () => {
    //   const basket = [
    //       1, 2, 2
    //     ];

    //   const totalPrice = calculateTotalPrice(basket);

    //   expect(totalPrice).toBe(23.20);
    // })
  })
})
