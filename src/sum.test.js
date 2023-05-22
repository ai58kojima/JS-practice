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
  console.log(1); // => 1
  console.log(1 + 1); // => 2
  const total = 42 + 42; //=> 84
  console.log(total);
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
  const str30 = `これは
    改行です`; //インデントが入ったらエラーとなる。
  const str4 = "これは\n改行です";
  expect(str3 === str4).toBe(true);
  console.log(str4);
  console.log(str3);
  console.log(str30);

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
  expect(object.address).toBe("東京");
  expect(object["telephone"]).toBe("000-0000");
  expect(object.age).toBe(20);
  expect(object.hasLicense).toBe(true);
  expect(object.nested.value).toBe(1);
});

test("配列の練習", () => {
  // 配列（Arrayオブジェクト）
  const array123 = ["配列の練習", 111, true, { age: 20, address: "東京" }]; //ブラケット{}＝オブジェクトリテラル
  console.log(array123[0]);

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
  console.log(a); // => 1
  console.log(b); // => 2

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
test("else ifの練習", () => {//versionを引数として受け取る関数を定義
  const A = function (version) { //Aは関数
    if (version === "ES5"){
      return "ECMAScript 5";//この後の処理は実行されずに、関数から抜ける処理になる
    } else if(version === "ES6"){
      return "ECMAScript 2015";
    } else if (version === "ES7"){
      return "ECMAScript 2016";
    };
    return "unknown";
  };
    //関数Aを呼び出して、返り値を確認する
    expect(A("ES5")).toBe("ECMAScript 5");
    expect(A("ES6")).toBe("ECMAScript 2015");
    expect(A("ES7")).toBe("ECMAScript 2016");
    expect(A(5)).toBe("unknown");
});

test("条件分岐の練習", () => {
  const num = 1;
  if (num > 10) {
    console.log(`numは10より大きいです: ${num}`);
  } else {
    console.log(`numは10以下です: ${num}`);
  }
});

test("elseの練習", () => {
  const UruYear = function (year) {
    if (year % 4 === 0) {
      // 4で割り切れる
      if (year % 100 === 0) {
        // 100で割り切れる
        if (year % 400 === 0) {
          // 400で割り切れる
          console.log(`${year}年はうるう年です`);
          return true;
        } else {
          console.log(`${year}年はうるう年ではありません`);
          return false;
        }
      } else {
        console.log(`${year}年はうるう年です`);
        return true;
      }
    } else {
      console.log(`${year}年はうるう年ではありません`);
      return false;
    }
  };
  expect(UruYear(2020)).toBe(true);
  expect(UruYear(2023)).toBe(false);
  expect(UruYear(2000)).toBe(true);
  expect(UruYear(2100)).toBe(false);
});

test("switchの練習", () => {
  //0509
});
