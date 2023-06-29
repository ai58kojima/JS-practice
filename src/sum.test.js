const sum = require("./sum");

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("プログラミングコメントの練習", () => {
  //エラーになるため実行させないようにコメントする
  //expect(sum(1,2)).toBe(4);
});

test("constの練習", () => {
  const bookTitle = "本";
  const bookPrice = 3000;
  //値の変更はエラー→実行されない　//bookTitle = "まんが"
  expect(bookTitle).toBe("本");
  expect(bookPrice).toBe(3000);
});

test("letの練習", () => {
  let bookTitle;
  expect(bookTitle).toBe(undefined);
  bookTitle = "本";
  expect(bookTitle).toBe("本");

  let bookPrice = 3000;
  expect(bookPrice).toBe(3000);

  bookPrice = 5000;
  expect(bookPrice).toBe(5000);
});

test("consoleの練習", () => {
  const total = 42 + 42; //=> 84
  //console.log(total);
});
//エラー：console.log(1; // => SyntaxError: missing ) after argument list
//const a = 1;
//const value = "値";
//console.log(x); // => ReferenceError: x is not defined

console.log(typeof "JavaScript"); // => "string"
const str = "文字列";
console.log(`これは${str}です`); //バッククォート「`」でないと動かない
expect(str).toBe("文字列"); //改行（\n）

test("文字列の練習", () => {
  //⑤データ型とリテラル
  const str1 = "文字列です";
  const str2 = "文字列です";
  expect(str1 === str2).toBe(true);
  const str3 = `これは
改行です`;
  //インデントが入ったらエラーとなる。
  const str4 = "これは\n改行です";
  expect(str3 === str4).toBe(true);
  const str5 = "これは${str1}。";
  const str6 = `これは${str2}。`;
  expect(str5).toBe("これは${str1}。");
  expect(str6).toBe(`これは文字列です。`);
});

test("オブジェクトの練習", () => {
  //⑤データ型とリテラルの続き
  const object = {
    address: "東京", // プロパティ: データ(値)　//文字列
    telephone: "000-0000", //文字列
    age: 20, //number
    hasLicense: true, //Boolean ブーリアン型
    nested: { value: 1 }, //入れ子=ネスト  掘り下げていける
  };
  expect(object.address).toBe("東京"); //ドット記法（オブジェクトの取出し方1）
  expect(object["telephone"]).toBe("000-0000"); //ブラケット記法（オブジェクトの取出し方2）
  expect(object.age).toBe(20);
  expect(object.hasLicense).toBe(true);
  expect(object.nested.value).toBe(1);
});

test("配列の練習", () => {
  // 配列（Arrayオブジェクト）
  const array123 = ["配列の練習", 111, true, { age: 20, address: "東京" }]; //ブラケット{}＝オブジェクトリテラル
  //console.log(array123[0]);
  expect(array123[0]).toBe("配列の練習");
  expect(array123[1]).toBe(111);
  expect(array123[2]).toBe(true);
  expect(array123[3].age).toBe(20);
  expect(array123[3].address).toBe("東京");
});

test("演算子の練習", () => {
  console.log(8 % 2); // => 0
  console.log(10 / 0); // => Infinity
  const foo = null; //nullは「値がない」ということを表現する値
  console.log(foo); // => null
  console.log(+"文字列"); // => NaN

  const array = [1, 2];
  // aには`array`の0番目の値、bには1番目の値が代入される
  const [a, b] = array;
  //console.log(a); // => 1
  //console.log(b); // => 2

  const obj = {
    key: "value",
  }; // プロパティ名`key`の値を、変数`key`として定義する
  const { key } = obj;
  console.log(key); // => "value"
});

//コツ！！　一個一個 区切り、法則に当てはめて解く
//const valueA = true ? "A" : "B";  => "A" 左を取得 =>結果 valueA =　Aとなる。
test("条件(三項)演算子の練習", () => {
  function addPrefix(text, prefix) {
    // `prefix`が指定されていない場合は"デフォルト:"を付ける
    const pre = typeof prefix === "string" ? prefix : "デフォルト";
    //const pre = ？？
    //1）typeof prefix === "string"  => falseと判定
    //2)"string" ? prefix : "デフォルト";  => falseは:の右側を取得 => "デフォルト"
    //3)const pre = "デフォルト";
    return pre + text;
    //return "デフォルト" + "abc"
  }
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix("abc")).toBe("デフォルトabc"); //"デフォルト:abc"
  expect(addPrefix("abc", "d")).toBe("dabc");
});

test("べき乗演算子の練習", () => {
  expect(3 ** 4).toBe(81);
  expect(Math.pow(3, 4)).toBe(81); //べき乗演算子と同じ動作をするMath.powメソッド
});

test("分割代入 配列", () => {
  const array = [1, 2, 3];
  const [a, b, c] = array; //分割代入

  expect(a).toBe(1);
  expect(b).toBe(2);
  expect(c).toBe(3);
});

test("分割代入 オブジェクト", () => {
  const obj = {
    key: "value",
  };
  const key = obj.key;
  expect(key).toBe("value");
});

test("分割代入 オブジェクト2", () => {
  const obj = {
    key1: "value1",
    key2: "value2",
  };
  const { key1, key2 } = obj;
  expect(key1).toBe("value1");
  expect(key2).toBe("value2");
  expect({ key1, key2 }).toStrictEqual(obj);
});

//➆暗黙的な型変換
test("Numberコンストラクタ関数の練習", () => {
  //文字列から数値へ明示的に変換する関数
  expect(Number.parseInt("10", 10)).toBe(10); //文字列の"10"を数字に変換するプログラム //toBeメソッドは、厳密等価演算子
  expect(Number.parseInt("10", 10)).not.toBe("10"); //「Number.parseInt」は文字列から整数だけをパースする
  expect(Number.parseInt("3.14", 10)).toBe(3);
  expect(Number.parseInt("10")).toBe(10);

  expect(Number.parseFloat("3.14", 10)).toBe(3.14); //「Number.parseFloat」は文字列から浮動小数点数をパースする
  expect(Number.parseFloat("3.14", 10)).not.toBe("10");
  expect(Number.parseFloat("3.14")).toBe(3.14);

  expect(Number.parseInt("文字")).toBe(NaN);
  expect(Number.isNaN(Number.parseInt("文字", 10))).toBe(true); //Number.isNaN(x):メソッド実際に値がNaNかを判定する //boolean：真偽値を返す　//NaNは[Not a Number]だけどNumber型
  //➀引数(Number.parseInt("文字",10))の評価結果をisNaN（）に渡す　➁isNaNは引き数（）内がNaNかどうかを判定　➂NaNなのでtrueが返ってくる
});

//➇関数と宣言
test("function関数の練習", () => {
  function double(num) {
    //function 関数名(仮引数1, 仮引数2) //関数宣言の時は「仮引数：値が入る変数」 //ここでは関数を定義している
    // ｛｝内は関数が呼び出されたときの処理
    return num * 2; // double関数の返り値、numに(10)を入れてreturnを実行されると、20が返ってくる
  }
  console.log(double(10)); //const (関数の結果) = 関数名(引数1, 引数2);　//関数呼び出しの時は「引数」//=> 関数の返り値
  expect(double(10)).toBe(20);
});

test("echo関数の練習", () => {
  function echo(x) {
    //引数として渡した値をそのまま返す「echo関数」
    return x;
  }
  expect(echo(1)).toBe(1);
  expect(echo()).toBe(undefined);
});

test("argumentsToArray関数の練習", () => {
  function argumentsToArray(x, y) {
    //2つの引数を受け取り、それを配列として返す「argumentsToArray関数」
    return [x, y];
  }
  expect(argumentsToArray(1, 2)).toBe[(1, 2)]; //expect関数　toBe関数?　Q！配列[] ()はいらない
  expect(argumentsToArray(1)).toBe[(1, undefined)];
});

test("デフォルト引数", () => {
  //「仮引数 = デフォルト値」
  function addPrefix2(text, prefix = "デフォルト:") {
    return prefix + text;
  }
  expect(addPrefix2("abc")).toBe("デフォルト:abc");
  expect(addPrefix2("abc", "d")).toBe("dabc");
});

test("可変長引数", () => {
  //「Math.max(...args引数)」受取引数の中で最大数値を返す関数
  const max = Math.max(10, 2, 3);
  expect(max).toBe(10);

  //Rest parametersは、仮引数名の前に...をつけた仮引数のことで、残余引数とも呼ばれる。
  function fn(...args) {
    expect(args).toBe[("a", "b", "c")]; //関数定義
  }
  fn("a", "b", "c"); //関数実行
});

test("Arrow Functionの書き方", () => {
  //関数を値として使う方法 //aを2乗する関数
  const a = function (x) {
    return x * x;
  };
  const b = (x) => {
    return x * x;
  };
  const c = (x) => x * x;
  expect(a(5)).toBe(25); //定数aに(x)5の引数を渡して、条件実行すると25になる想定。
  expect(b(5)).toBe(25);
  expect(c(5)).toBe(25);
});

test("コールバック関数とArrow Function練習", () => {
  //関数の引数に関数を返す
  const array = [1, 2, 3];
  const doubleArray = array.map((value) => value * 2); //「mapメソッド」…配列要素を順にコールバック関数へ渡し、その関数が返した値を新しい配列にして返すメソッド。
  // Arrow Functionは匿名関数。代入を矢印arrow => で表し、{ return x * x; } ＝ Arrow Functionのみ、returnとブロックを省略できる
  expect(doubleArray).toEqual([2, 4, 6]); //.toBeマッチャ―の一つ
});

const obj = {
  //メソッドの定義:オブジェクトのプロパティである関数  →　メソッド名(){ /*メソッドの処理*/ }
  method() {
    return "this is method";
  },
};
expect(obj.method()).toBe("this is method"); // 関数呼出しと同様「　オブジェクト.メソッド名()　」でメソッド呼出し

//➉条件分岐
test("else ifの練習", () => {
  //versionを引数として受け取る関数を定義
  const A = function (version) {
    //Aは関数
    if (version === "ES5") {
      return "ECMAScript 5"; //この後の処理は実行されずに、関数から抜ける処理になる
    } else if (version === "ES6") {
      return "ECMAScript 2015";
    } else if (version === "ES7") {
      return "ECMAScript 2016";
    }
    return "unknown";
  };
  //関数Aを呼び出して、返り値を確認する
  expect(A("ES5")).toBe("ECMAScript 5");
  expect(A("ES6")).toBe("ECMAScript 2015");
  expect(A("ES7")).toBe("ECMAScript 2016");
  expect(A(5)).toBe("unknown");
});

test("elseの練習1", () => {
  const isLeapYear = function (year) {
    //年数を引数にとって、うるう年だったらtrueを返し、そうでなければfalseを返す関数
    if (year % 4 === 0) {
      // 4で割り切れる
      if (year % 100 === 0) {
        // 100で割り切れる
        if (year % 400 === 0) {
          // 400で割り切れる
          //console.log(`${year}年はうるう年です`);
          return true;
        } else {
          //console.log(`${year}年はうるう年ではありません`);
          return false;
        }
      } else {
        //console.log(`${year}年はうるう年です`);
        return true;
      }
    } else {
      //console.log(`${year}年はうるう年ではありません`);
      return false;
    }
  };
  //isLeapYear (2000); //2000年はうるう年です
  expect(isLeapYear(2020)).toBe(true);
  expect(isLeapYear(2023)).toBe(false);
  expect(isLeapYear(2000)).toBe(true);
});

test("elseの練習2", () => {
  const Year2 = function (year) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };
  expect(Year2(2020)).toBe(true);
  expect(Year2(2023)).toBe(false);
  expect(Year2(2000)).toBe(true);
});

test("switchの練習1", () => {
  const A = function (version) {
    switch (version) {
      case "ES5":
        return "ECMAScript 5";
      case "ES6":
        return "ECMAScript 2015";
      case "ES7":
        return "ECMAScript 2016";
      default:
        return "unknown";
    }
  };
  expect(A("ES5")).toBe("ECMAScript 5");
});

//数字を入れて、余りが0だったら「グー」・余りが「1＝チョキ・2＝パー・3＝あいこ」と返す関数
test("switchの練習2", () => {
  const Janken = function (num) {
    switch (
      num % 4 //(式)
    ) {
      case 0: //引数の計算結果の余りが０になる場合
        return "グー";
      case 1:
        return "チョキ";
      case 2:
        return "パー";
      case 3:
        return "あいこ";
      default:
        return "unknown";
    }
  };
  expect(Janken(0)).toBe("グー");
  expect(Janken(1)).toBe("チョキ");
  expect(Janken(2)).toBe("パー");
  expect(Janken(3)).toBe("あいこ");
  expect(Janken(4)).toBe("グー");
});

//⑾ループと反復処理
test("反復処理の練習1", () => {
  //for文 (初期化式; 条件式; 増分式) {　}
  function sum(max) {
    let total = 0;
    for (let i = 0; i < max; i++) {
      total += i + 1; //total = total + i + 1
    }
    return total;
  }
  expect(sum(4)).toBe(10);
  expect(sum(10)).toBe(55);
});

//スコープが違うから、上記の定義は反映されない
test("反復処理の練習2", () => {
  function sum(numbers) {
    //15, 250, 350
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      //0<3 ➡　0.1.2
      //numbersが配列[object箱.lengthプロパティ=中身]・length:配列の長さ
      total = total + numbers[i]; //0=0+15[0]/0=0+250[1]//0=0+350[2]
    }
    return total;
  }
  expect(sum([])).toBe(0);
  expect(sum([1])).toBe(1);
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([15, 250, 350])).toBe(615);
});

test("break処理の練習", () => {
  //break文:if文の中で評価結果がtrueになった時点で、breakすると処理中のループを抜けられる。
  function isEvenIncluded(numbers) {
    let isEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        isEvenIncluded = true;
        break;
      }
    }
    return isEvenIncluded;
  }
  expect(isEvenIncluded([1])).toBe(false);
  expect(isEvenIncluded([])).toBe(false);
  expect(isEvenIncluded([1, 2, 3])).toBe(true);
});

test("breakからretureの書き換え練習", () => {
  //return文:ある条件になった場合に、現在の関数を終了させることができる(こちらがシンプルで推奨！)
  function isEvenIncluded(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        return true;
      }
    }
    return false;
  }
  expect(isEvenIncluded([1])).toBe(false);
  expect(isEvenIncluded([])).toBe(false);
  expect(isEvenIncluded([1, 2, 3])).toBe(true);
  //function some(callback) {　→　→　→　→　→コールバック関数：外で定義した関数を、引数として他の関数内で呼び出される関数。
  //for(let i = 0; i < array.length; i++) {
  //if(callback(array[i])) { return true; }
  //}
  //return false;}
});

test("some/filterの練習", () => {
  //2で割った余りが0かどうか
  const array = [1, 2, 3, 4, 5];
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];

  expect(
    array.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(true);
  expect(
    array1.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(false);
  expect(
    array2.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(true);

  expect(
    array.filter((number) => {
      return number % 2 === 0; //toStrictEqual:配列内の未定義(undefined)なプロパティを含む、厳密なオブジェクト評価
    })
  ).toStrictEqual([2, 4]);
  expect(
    array1.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([]);
  expect(
    array2.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([2, 4, 6, 8]);
  //arrayから奇数のみを集める
  expect(array.filter((number) => number % 2 !== 0)).toStrictEqual([1, 3, 5]); //
});

//⑿オブジェクト
test("オブジェクトの練習", () => {
  const obj = {};
  expect(Object.keys(obj)).toStrictEqual([]);
  const blueGreen = "blue-green";
  const colors = {
    red: "Red",
    green: "Green",
    blue: "Blue",
    [blueGreen]: "Blue-Green",
  };
  expect(Object.keys(colors).length).toStrictEqual(4);
  expect(colors.red).toStrictEqual("Red");
  expect(colors.green).toStrictEqual("Green");
  expect(colors.blue).toStrictEqual("Blue");
  expect(colors["blue-green"]).toStrictEqual("Blue-Green");

  //省略Ver.
  const AAA = "あああ";
  const A1 = {
    AAA: AAA,
  };
  const A2 = {
    AAA,
  };
  expect(A1.AAA === A2.AAA).toStrictEqual(true);
  expect(A1).toStrictEqual(A2);

  //プロパティの追加
  colors.orange = "Orange";
  expect(colors.orange).toStrictEqual("Orange");
  //colors["bule-green"]= "Bule-Green";
});

//(問1)undefinedでチェックする方法
//(問2)Object.hasOwnを呼び出す練習
//(問3)Object.keys, Object.values, Object.entiriesを呼び出してテストコードで動きを確認してみる
test("プロパティチェックの練習", () => {
  const obj = {
    one: 1,
  };
  expect(obj.one).toStrictEqual(1);
  expect(obj.two).toStrictEqual(undefined);
  expect(Object.hasOwn(obj, "one")).toStrictEqual(true); //Object.hasOwn = 真偽値で返す
  expect(Object.hasOwn(obj, "two")).toStrictEqual(false);
  expect(Object.keys(obj)).toStrictEqual(["one"]); //Object.keys = キーを返す
  expect(Object.values(obj)).toStrictEqual([1]); //Object.value = 値を返す
  expect(Object.entries(obj)).toStrictEqual([["one", 1]]); //Object.value = [キー,値]を配列にして返す
});
//(13)プロトタイプオブジェクト
test("Object.assignメソッド/spread構文の練習", () => {
  const a = {
    one: 1,
    two: 2,
    three: 3,
  };
  const b = {
    four: 4,
    five: 5,
    three: 30,
  };
  expect(Object.assign({}, a, b)).toStrictEqual({
    //マージされて3は上書きされる
    one: 1,
    two: 2,
    three: 30,
    four: 4,
    five: 5,
  });
  expect({ ...a, ...b, six: 6 }).toStrictEqual({
    one: 1,
    two: 2,
    three: 30,
    four: 4,
    five: 5,
    six: 6,
  });
});

//(14)配列
test("配列と分割代入の練習", () => {
  const array = [1, 2, 3];
  const [one, two, three] = array;
  expect(array[0]).toStrictEqual(1);
  expect(array[1]).toStrictEqual(2);
  expect(array[2]).toStrictEqual(3);
});
//[indexOf]引数と厳密等価演算子（===）が一致すればその要素、ない場合は-1を返す。
test("ArrayのindexOfメソッド", () => {
  const array = [1, 2, 3, "four"];
  expect(array.indexOf(0)).toStrictEqual(-1);
  expect(array.indexOf("one")).toStrictEqual(-1);
  expect(array.indexOf(3)).toStrictEqual(2);

  const obj = { Okinawa: "シーサー" };
  const array1 = [1, 2, 3, obj];
  expect(array1.indexOf({ Okinawa: "シーサー" })).toStrictEqual(-1);
  expect(array1.indexOf(obj)).toStrictEqual(3);
});

test("findIndex/findメソッドの練習", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];
  //[findIndex]プロパティ値が同じ要素を配列から見つけ、そのインデックス番号を取得
  expect(
    array.findIndex((o) => {
      return o.test === "中身";
    })
  ).toStrictEqual(3);
  //[find]要素そのものを返し、存在しない場合はundefinedを返す。
  expect(
    array.find((o) => {
      return o.test === "中身";
    })
  ).toStrictEqual(obj);
  expect(
    array.find((O) => {
      return false;
    })
  ).toStrictEqual(undefined);
});

test("slice/includes/someメソッド", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];
  //①[slice]指定範囲の要素を取得し"true"を返す
  expect(array.slice(0, 3)).toStrictEqual([1, 2, 3]);
  expect(array.slice(-1)).toStrictEqual([obj]);
  //②[includes]配列に指定要素が含まれているかを判定し"true"を返す
  expect(array.includes(obj)).toStrictEqual(true);
  //➂[some]テストするコールバック関数にマッチする要素があるならtrueを返す
  expect(
    array.some((obj) => {
      return obj.test === "中身";
    })
  ).toStrictEqual(true);
  //練習
  const fruits = { apple: "りんご" };
  const fruitsGrp = ["みかん", "もも", "ばなな", fruits];
  expect(fruitsGrp.slice(0, 3)).toStrictEqual(["みかん", "もも", "ばなな"]);
  expect(fruitsGrp.slice(-1)).toStrictEqual([fruits]);
  expect(fruitsGrp.includes("もも")).toStrictEqual(true);
  expect(
    fruitsGrp.some((fruits) => {
      return fruits.apple === "りんご";
    })
  ).toStrictEqual(true);
  expect(
    fruitsGrp.some((fruits) => {
      return fruits.apple === "もも";
    })
  ).toStrictEqual(false);
});
