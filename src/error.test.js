//▼2024/7/25 「例外処理～」
test("try...catch構文・throw文", () => {
  //1)例外を出す関数を一つ作ってみる
  //2)try...catch節の中に書いてみたり、外に書いてみたりして動きを確かめてみる
  function checkEven(num) {
    if (num % 2 !== 0) {
      throw new Error(`${num}が偶数ではありませんでした`);
    }
  }
  checkEven(2);
  try {
    checkEven(3);
  } catch (error) {
    console.log(error.message);
    throw new Error("catchした後", { cause: error });
  }
  console.log("終わりました");
});
//▲
