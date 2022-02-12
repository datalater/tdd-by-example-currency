class Dollar {
  amount: number;

  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier: number) {
    this.amount *= multiplier;
  }
}

test("곱하기", () => {
  const five: Dollar = new Dollar(5);
  five.times(2);
  expect(five.amount).toBe(10);
});
