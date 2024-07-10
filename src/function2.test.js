//▼2024/7/8 「関数とスコープ・クロージャ―～」
test("クロージャ―の練習", () => {
  //クロージャーを実装する。クロージャーを呼び出すたびに１ずつ増える
  // クロージャーを２個宣言して、片方は返り値が３まで呼び出し、もう片方は２まで呼び出す
  function countUp() {
    // const countUp = () => {
    let n = 1;
    return () => {
      n = n + 1;
      return n;
    };
  }
  const counter1 = countUp();
  const counter2 = countUp();

  expect(counter1()).toStrictEqual(2);
  expect(counter1()).toStrictEqual(3);
  expect(counter1()).toStrictEqual(4);
  expect(counter2()).toStrictEqual(2);
  expect(counter2()).toStrictEqual(3);
});
//▲
