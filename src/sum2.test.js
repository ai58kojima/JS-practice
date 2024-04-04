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

//▼2024/03/21 「コールバック関数、メソッド定義」
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

//▼2024/03/28 「条件分岐if文」
test("条件分岐if文", () => {
  //1)じゃんけん関数を作る
  const jyanken = function (hand) {
    if (hand === "グー") {
      return "あいこ";
    } else if (hand === "チョキ") {
      return "勝ち";
    } else if (hand === "パー") {
      return "負け";
    } else {
      return "分かりません";
    }
  };
  expect(jyanken("グー")).toBe("あいこ");
  expect(jyanken("チョキ")).toBe("勝ち");
  expect(jyanken("パー")).toBe("負け");
  expect(jyanken("手")).toBe("分かりません");

  //2)うるう年かどうか判定する関数
  const isUruYear = function (year) {
    //*複雑式の場合、まずtrue/falseで書いておく
    if (year % 400 === 0) {
      return `${year}年はうるう年です`; //true
    } else if (year % 100 === 0) {
      return `${year}年はうるう年ではありません`; //false
    } else if (year % 4 === 0) {
      return `${year}年はうるう年です`; //true
    } else {
      return `${year}年はうるう年ではありません`; //false
    }
  };
  expect(isUruYear(2024)).toBe("2024年はうるう年です");
  expect(isUruYear(2200)).toBe("2200年はうるう年ではありません");

  //3)1のじゃんけん関数をswich文で書く
  const jyanken2 = function (hand) {
    switch (hand) {
      case "グー":
        return "あいこ";
      case "チョキ":
        return "勝ち";
      case "パー":
        return "負け";
    }
  };
  expect(jyanken2("グー")).toBe("あいこ");
}); //▲

//▼2024/04/04 「ループと反復処理(while・for)」
test("ループと反復処理", () => {
  //1)無限ループ →ctrl+Cで停止
  // let x = 1;
  // while (true) {
  //   x += 1;
  //   console.log(x);
  // }

  //2)べき乗(引数に一番近い２のn乗を返したいので、base*2がnumを超えるまで継続する関数)
  const log2 = (num) => {
    let base = 1;
    let pow = 0;
    while (num > base * 2) {
      pow += 1;
      base *= 2;
    }
    return pow;
  };
  expect(log2(1)).toBe(0);
  expect(log2(17)).toBe(4);
  expect(log2(1023)).toBe(9);

  //3)for文：1から10までの値を合計する
  const sum = (num) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
      total += i + 1;
    }
    return total;
  };
  expect(sum(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 =15
  expect(sum(10)).toBe(55);

  //3)for文(配列ver)
  const sum2 = (nums) => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  };
  expect(sum2([0, 1, 2, 3])).toBe(6);
  expect(sum2([1, 0, -1])).toBe(0);
}); //▲
