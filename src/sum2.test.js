//☆★木曜勉強会スタート★☆

//▼2024/03/07 「関数の分割代入」
test("関数の分割代入", () => {
  //1)可変長引数　 *可変長引数とは、複数の引数を受け取れること
  expect(Math.max(10, 2, 3)).toBe(10); //Math.max(...args)
  expect(Math.min(10, 2, 3)).toBe(2);
  expect(Math.min(50)).toBe(50);

  function helloMessage({ firstname, familyname }) {
    // return "Hello" + familyname + firstname + "さん";
    return `Hello ${familyname} ${firstname} さん`;
  }
  const fullname = { familyname: "山田", firstname: "としお" };
  expect(helloMessage(fullname)).toBe("Hello 山田 としお さん");

  //2)分割代入の配列ver
  function multiply([x, y]) {
    return x * y;
  }
  expect(multiply([2, 3])).toBe(6);
}); //▲

//▼2024/03/14 「関数式・アロー関数」
test("アロー関数", () => {
  //　∟　memo: test変数,再帰的,カタマリで見る
  //1)1を返す関数
  const alwaysOne = () => {
    return 1;
  };
  expect(alwaysOne()).toBe(1);

  //2)引数を1個受け取って2倍にする関数
  const double = (num) => {
    return num * 2;
  };
  expect(double(5)).toBe(10);

  //3)引数を2個受け取って、それを足す関数
  const sum = (x, y) => {
    return x + y;
  };
  const sum2 = (a, b) => a + b; // *1行のみの場合は、returnとブロックを省略できる
  expect(sum(1, 3)).toBe(4);
  expect(sum2(1, 2)).toBe(3);

  //4)mapを使ったアロー関数の練習
  const array = ["あんぱん", "食パン", "カレーパン"];
  const nameArray = array.map((value) => {
    return value + "マン";
  });
  expect(nameArray).toStrictEqual([
    "あんぱんマン",
    "食パンマン",
    "カレーパンマン",
  ]);

  //5)引数を100倍にする関数
  const numArray = [1, 2, 3];
  const times100 = (num) => {
    return num * 100;
  };
  const numArray2 = numArray.map(times100);
  expect(numArray2).toStrictEqual([100, 200, 300]);
}); //▲

//▼2024/03/21 「コールバック関数」
test("コールバック関数、メソッド定義", () => {
  //1)オブジェクト内にメソッドを定義する方法
  const obj = {
    method1: function (value) {
      return value * 100;
    },
    method2: (x, y) => {
      return (x + y) * 100;
    },
  };
  expect(obj.method1(1)).toBe(100);
  expect(obj.method2(1, 2)).toBe(300);
}); //▲
