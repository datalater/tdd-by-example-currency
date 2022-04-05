class Dollar {
  amount: number;

  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(other: Dollar) {
    return this.amount === other.amount;
  }
}

test("곱하기", () => {
  const five: Dollar = new Dollar(5);
  let product: Dollar;
  product = five.times(2);
  expect(product.amount).toBe(10);
  product = five.times(3);
  expect(product.amount).toBe(15);
});

test("값 동치성", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
