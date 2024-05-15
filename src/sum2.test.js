//☆★木曜勉強会スタート★☆

//▼2024/03/07 「関数の分割代入」
test("関数の分割代入", () => {
  //1)可変長引数　 *可変長引数とは、複数の引数を受け取れること
  //               *分割代入とは、配列から値を取り出して(or オブジェクトからプロパティを取り出して)、別の変数に代入する式のこと
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

  //)for文(配列ver)
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

//▼2024/04/11 「配列のforEachメソッド～for...in文」反復処理
test("配列の各メソッド（自作版）", () => {
  // 1)forEachを自作：引数2個の内、1個目が配列、2個目が関数を受け取る
  const forEachMaker = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i]);
    }
  };
  // forEachMaker関数を直接呼び出す
  forEachMaker([1, 2, 3, 4, 5], (x) => {
    console.log(x);
  });
  // 配列のメソッドforEachを使う
  [1, 2, 3, 4, 5].forEach((x) => {
    console.log(x);
  });

  // 2) someのbreak版を自作：配列の条件を満たす要素があるか判定し、trueになった時点で終了しtrueを返す関数
  const someMaker1 = (arr, fn) => {
    let ok = false; // 変数okを初期化
    for (let i = 0; i < arr.length; i++) {
      // 配列の各要素に対してループ
      const result = fn(arr[i]); // 関数fnを適用し、結果を取得
      if (result) {
        ok = true; // 条件を満たした場合、okをtrueに設定してループを抜ける
        break;
      }
    }
    return ok; // okを返す
  };

  expect(
    //条件式に基づいて要素を判定する方法を比較
    someMaker1([1, 3, 5, 8], (num) => {
      return num % 2 === 0;
    })
  ).toBe(
    [1, 2, 3, 4, 5].some((num) => {
      return num % 2 === 0;
    })
  );

  // 3) someのreturn版を自作
  const someMaker2 = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
      const result = fn(arr[i]);
      if (result) {
        return true;
      }
    }
    return false;
  };
  const isEven = (num) => {
    // 偶数かどうか判定関数
    return num % 2 === 0;
  };
  expect(someMaker2([1, 3, 5, 8], isEven)).toBe([1, 2, 3, 4, 5].some(isEven));

  // 4) filterを自作：値を絞込み、新しい配列を作る
  const filterMaker = (arr, fn) => {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
      const result = fn(arr[i]);
      if (!result) {
        //continue:失敗したら下記の処理をスキップしてfor文に戻る
        continue;
      }
      array.push(arr[i]); //成功したら要素を追加する
    }
    return array;
  };
  const isOdd = (num) => {
    // 奇数かどうか判定関数
    return num % 2 !== 0;
  };
  expect(filterMaker([1, 3, 5, 8, 10], isOdd)).toStrictEqual([1, 3, 5]);
  expect([1, 3, 5, 8, 10].filter(isOdd)).toStrictEqual([1, 3, 5]); //filterメソッド
});

// ※for...inは使わないこと。for...ofを使いましょう
// オブジェクトの各プロパティを取得する方法・種類
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log("Keys", Object.keys(obj)); //キー => [ 'a', 'b', 'c' ]
console.log("Values", Object.values(obj)); //値 => [ 1, 2, 3 ]
console.log("Entries", Object.entries(obj)); //配列[キー:値] => [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ]
//▲

//▼2024/04/18 「for...of：配列から値を取り出して反復処理できる」「オブジェクト」
test("for(const..of..)文", () => {
  //1)配列の中身を全て合計する関数
  const array = [1, 2, 3, 4, 5];
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  expect(sum).toBe(15);

  //2)オブジェクトの中身を合計する関数
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  let sum2 = 0;
  let keys = "";
  for (const [key, value] of Object.entries(obj)) {
    //console.log(key, value);
    sum2 += value;
    keys += key;
  }
  expect(sum2).toBe(6);
  expect(keys).toBe("abc");

  keys2 = "";
  value2 = 0;
  for (const key of Object.keys(obj)) {
    console.log(key);
    keys2 += key;
  }
  for (const value of Object.values(obj)) {
    console.log(value);
    value2 += value;
  }
  expect(keys2).toBe("abc");
  expect(value2).toBe(6);
});

//▼2024/04/25 「オブジェクト省略記法・プロパティへのアクセス」
//1)オブジェクトを宣言して中身を確認
test("オブジェクトの宣言", () => {
  const obj = {};
  expect(Object.entries(obj).length).toBe(0);

  const obj2 = {
    number: 100,
  };
  const obj2_entries = Object.entries(obj2);
  expect(obj2_entries.length).toBe(1);
  expect(obj2.number).toBe(100);
  expect(obj2_entries[0][0]).toBe("number");
});
//2)オブジェクトの省略記法
test("オブジェクトの省略記法", () => {
  const colors = {
    yellow: "黄色",
    red: "赤",
    blue: "青",
  };
  expect(colors.yellow).toBe("黄色");
  expect(colors.red).toBe("赤");
  expect(colors.blue).toBe("青");

  const yellow = "黄色";
  const red = "赤";
  const colors2 = {
    yellow,
    red,
    blue: "青",
  };
  expect(colors2.yellow).toBe("黄色");
  expect(colors2.red).toBe("赤");
  expect(colors2.blue).toBe("青");

  //3)特殊なキー名を利用した時のオブジェクト宣言と中身の確認
  const obj = {
    key: 1,
    123: 2,
    "my-prop": 3,
  };
  expect(obj.key).toBe(1);
  expect(obj[123]).toBe(2);
  expect(obj["my-prop"]).toBe(3);
});
//4)オブジェクトの分割代入
test("オブジェクト分割代入", () => {
  const colors = {
    yellow: "黄色",
    red: "赤",
    blue: "青",
  };
  const { yellow, red, blue } = colors; //オブジェクト分割代入 = オブジェクトリテラルのような構文
  expect(yellow).toBe(colors.yellow);
  expect(red).toBe(colors.red);
  expect(blue).toBe(colors.blue);

  //5)練習ネストされたオブジェクト:分割代入を使ってstudentオブジェクトからname, age, universityのnameを取り出してください
  const student = {
    name: "Alice",
    age: 25,
    university: {
      name: "Okinawa",
      location: "Awaji",
    },
  };
  const {
    name,
    age,
    university: { name: universityNameConst },
  } = student;
  expect(name).toBe(student.name);
  expect(age).toBe(student.age);
  expect(universityNameConst).toBe(student.university.name);

  //6)配列分割代入:分割代入を使ってnumbers配列から最初の要素と残りの要素を取り出してください
  const numbers = [1, 2, 3, 4, 5];
  const [firstNum, ...restNum] = numbers;
  expect(firstNum).toBe(numbers[0]);
  expect(restNum).toEqual([2, 3, 4, 5]);
});
//▲

//▼2024/05/9 「プロパティの追加~」
test("プロパティ・オブジェクトの練習", () => {
  //1) プロパティの追加：keyプロパティを追加して値を代入。プロパティが自動作成される。ブラケット記法object[式]
  const obj = {};
  obj.key = "value";
  obj["key2"] = "value2";
  console.log(obj.key);
  console.log(obj["key"]); // => "value"
  console.log(obj["key2"]); // => "value2"
  console.log(obj["key9"]); // => "undefined"
  //  undefined：存在しないプロパティ
  //  null：プロパティは存在しているけど値がない

  //2) オブジェクトの列挙 Object.keys,entries,valuesを書く
  const fruitObj = {
    apple: 1,
    banana: 2,
    orange: 3,
  };
  expect(Object.keys(fruitObj)).toStrictEqual(["apple", "banana", "orange"]);
  expect(Object.values(fruitObj)).toStrictEqual([1, 2, 3]);
  expect(Object.entries(fruitObj)).toStrictEqual([
    // データ型は配列。配列の入れ子[[n,x][n,x]]を2次元配列と呼ぶ
    // 基本的にオブジェクトのキーは文字列として扱われる
    ["apple", 1],
    ["banana", 2],
    ["orange", 3],
  ]);

  //3) Object.assignメソッド：あるオブジェクトを別のオブジェクトに代入(assign)し、オブジェクトの複製やマージができる。
  const objA = { apple: "りんご" };
  const objB = { banana: "バナナ" };
  const objC = { orange: "オレンジ" };
  expect(Object.assign({}, objA, objB, objC)).toStrictEqual({
    //空のオブジェクトにobjA~Cを代入してマージ完了
    apple: "りんご",
    banana: "バナナ",
    orange: "オレンジ",
  });

  //4) Objectのスプレッド構文「...」：オブジェクトリテラル{}の中に指定したオブジェクトのプロパティを展開できる
  const obj1 = { apple: "りんご" };
  const obj2 = { banana: "バナナ" };
  const obj3 = { orange: "オレンジ" };
  const objMarged = {
    ...obj1,
    ...obj2,
    ...obj3,
  };
  expect(objMarged).toStrictEqual({
    apple: "りんご",
    banana: "バナナ",
    orange: "オレンジ",
  });
});
//▲

//▼2024/05/15 「オブジェクトの複製~」
test("オブジェクトの複製", () => {
  //1)
});
//▲
