//▼2024/7/8 「関数とスコープ・クロージャ―～」
test("クロージャ―の練習", () => {
  const countUp = () => {
    let count = 1;
    return () => {
      count = count + 1;
      return count;
    };
  };
  const counter1 = countUp();
  const counter2 = countUp();

  expect(counter1()).toStrictEqual(2);
  expect(counter1()).toStrictEqual(3);
  expect(counter2()).toStrictEqual(2);
});
//▲
