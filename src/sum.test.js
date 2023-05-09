const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
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
//cosnt a = 1;
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
    address: "東京",
    telephone: "000-0000",
    age: 20,
    hasLicense: true,
    nested: { value: 1 }, //入れ子ネスト  掘り下げていける
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

function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト";
  //const pre = ？？
  //1）typeof prefix === "string"  => falseと判定
  //2)"string" ? prefix : "デフォルト";  => falseは:の右側を取得 => "デフォルト"
  //3)const pre = "デフォルト";
  return pre + text;
  //return "デフォルト" + "abc" =>"デフォルト:abc" =>expect(addPrefix("abc")).toBe("デフォルト:abc");
}
//コツ！！　一個一個 区切り、法則に当てはめて解く

test("条件(三項)演算子の練習", () => {
  //const valueA = true ? "A" : "B";  => "A" 左を取得 =>結果 valueA =　Aとなる。
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix("abc")).toBe("デフォルトabc");
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
test("Numberコンストラクタ関数の練習", () => {//文字列から数値へ明示的に変換する関数
  expect(Number.parseInt("10",10)).toBe(10);//文字列の"10"を数字に変換するプログラム //toBeメソッドは、厳密等価演算子
  expect(Number.parseInt("10",10)).not.toBe("10");//「Number.parseInt」は文字列から整数だけをパースする
  expect(Number.parseInt("3.14",10)).toBe(3);
  expect(Number.parseInt("10")).toBe(10);

  expect(Number.parseFloat("3.14",10)).toBe(3.14);//「Number.parseFloat」は文字列から浮動小数点数をパースする
  expect(Number.parseFloat("3.14",10)).not.toBe("10");
  expect(Number.parseFloat("3.14")).toBe(3.14);
  
  expect(Number.parseInt("文字")).toBe(NaN);
  expect(Number.isNaN(Number.parseInt("文字",10))).toBe(true); //Number.isNaN(x):メソッド実際に値がNaNかを判定する //boolean：真偽値を返す　//NaNは[Not a Number]だけどNumber型
  //➀引数(Number.parseInt("文字",10))の評価結果をisNaN（）に渡す　➁isNaNは引き数（）内がNaNかどうかを判定　➂NaNなのでtrueが返ってくる
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

test("switchの練習", () => {//0509
});
