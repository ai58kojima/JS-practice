//▼2024/05/15 「配列~」
test("配列~", () => {
  //1)配列の作成とアクセス方法：2二元配列[0][0]、length-1、.at(0)末尾から要素取出しなどできる
  const array1 = [
    [1, "one"],
    [2, "two"],
  ];
  expect(array1[0]).toStrictEqual([1, "one"]);
  expect(array1[1]).toStrictEqual([2, "two"]);
  expect(array1[0][0]).toStrictEqual(1);
  expect(array1[1][0]).toStrictEqual(2);
  expect(array1[0][1]).toStrictEqual("one");
  expect(array1[1][1]).toStrictEqual("two");

  //2 配列と分割代入：変数を一度に作成できる
  const array2 = [1, 2, 3];
  const [one, two, three] = array2;
  expect(one).toStrictEqual(1);
  expect(two).toStrictEqual(2);
  expect(three).toStrictEqual(3);
});
//▲

//▼2024/05/23 「インデックスを取得~」
test("インデックスを取得", () => {
  //1)indexOfメソッド(位置情報)：引数と=== 一致する要素を先頭から検索し、該当インデックスを返す。ない場合は-1を返す。
  const numbers = [1, 3, 5, 7];
  expect(numbers.indexOf(1)).toBe(0);
  expect(numbers.indexOf(10)).toBe(-1);

  //2)配列findIndexメソッド(要素名取得):引数には配列の各要素のテスト関数をコールバック関数として渡す。
  const animals = [{ animal: "cat" }, { animal: "dog" }, { animal: "fox" }];
  expect(
    animals.findIndex((obj) => {
      return obj.animal === "dog";
    })
  ).toBe(1);
  expect(
    animals.findIndex((obj) => {
      return obj.animal === "cow";
    })
  ).toBe(-1);
});

test("条件に一致する要素を取得", () => {
  //3)findメソッド:返り値は要素そのもの、存在しない場合はundefinedを返す。
  const animals = [{ animal: "cat" }, { animal: "dog" }, { animal: "fox" }];
  expect(
    animals.find((obj) => {
      return obj.animal === "dog";
    })
  ).toStrictEqual({ animal: "dog" });
  expect(
    animals.find((obj) => {
      return obj.animal === "cow";
    })
  ).toStrictEqual(undefined);
});

test("真偽値を取得", () => {
  //4)includesメソッド:指定した要素が含まれているかだけを知りたい場合 => 真偽値
  const numbers = [1, 2, 5, 6, 8];
  expect(numbers.includes(1)).toStrictEqual(true);
  expect(numbers.includes(9)).toStrictEqual(false);

  //5)someメソッド:指定した要素が含まれているかだけを知りたい場合＆異なるオブジェクトだが値が同じもの => 真偽値
  const animals = [{ animal: "cat" }, { animal: "dog" }, { animal: "fox" }];
  expect(
    animals.some((obj) => {
      return obj.animal === "dog";
    })
  ).toStrictEqual(true);
  expect(
    animals.some((obj) => {
      return obj.animal === "cow";
    })
  ).toStrictEqual(false);
});

test("追加", () => {
  //6)pushメソッド(追加)：1つ要素を配列の末尾へ追加する←要素を直接変更している(破壊的)
  const numbers = [1, 2, 3];
  numbers.push(4);
  expect(numbers).toStrictEqual([1, 2, 3, 4]);
});

test("配列同士を結合", () => {
  //7)concatメソッド:配列と配列を結合した新しい配列を末尾に作成できます。←中身をコピーしてreturnしている(非破壊的)
  const animals = [{ animal: "cat" }, { animal: "dog" }, { animal: "fox" }];
  expect(animals.concat({ animal: "cow" }, { animal: "snake" })).toStrictEqual([
    { animal: "cat" },
    { animal: "dog" },
    { animal: "fox" },
    { animal: "cow" },
    { animal: "snake" },
  ]);
});

test("配列の展開,配列をフラット化", () => {
  //8)Spread構文(...)：配列リテラル中の指定したい位置に、既存の配列を展開できます。
  const animals = [{ animal: "cat" }, { animal: "dog" }, { animal: "fox" }];
  const newAnimals = [{ animal: "cow" }, ...animals];
  expect(newAnimals).toStrictEqual([
    { animal: "cow" },
    { animal: "cat" },
    { animal: "dog" },
    { animal: "fox" },
  ]);
  //9)flatメソッド：多次元配列をフラットな配列に変換できます。
  const numbers = [[[1], 2, 3], 4, 5];
  expect(numbers.flat()).toStrictEqual([[1], 2, 3, 4, 5]);
  expect(numbers.flat(2)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(numbers.flat(Infinity)).toStrictEqual([1, 2, 3, 4, 5]);
});
//▲

//▼2024/05/30 「配列の反復処理から(map, filter)～」
test("反復処理(map, filter)・メソッドチェーン", () => {
  //配列mapメソッド:配列要素を順番にコールバック関数へ渡し、同じ処理を反復的に実行できる
  //1)mapを使って名前の後ろに「くん」「さん」を追加する処理
  const names = ["太郎", "次郎", "三郎"];
  const newNames = names.map((name) => {
    return name + "さん";
  });
  expect(newNames).toStrictEqual(["太郎さん", "次郎さん", "三郎さん"]);

  //配列filterメソッド：コールバック関数がtrueを返した要素だけを集めた新しい配列を返す
  //2)filterを使って「女性」の要素だけを取り出し配列を作る処理
  const obj = [
    { name: "鈴木", gender: "男性" },
    { name: "田中", gender: "女性" },
    { name: "森山", gender: "男性" },
  ];
  const Female = obj.filter((person) => {
    return person.gender === "女性";
  });
  expect(Female).toStrictEqual([{ name: "田中", gender: "女性" }]);

  //メソッドチェーン:[配列].concat().concat() .で繋げて書くと、返り値を配列内に入れて返す
  //3)mapとfilterを使ったメソッドチェーンの練習：女性の場合は「＋さん」男性の場合は「＋くん」を返す処理
  const objPerson = [
    { name: "鈴木", gender: "男性" },
    { name: "田中", gender: "女性" },
    { name: "森山", gender: "男性" },
  ];
  const Male = objPerson
    .filter((person) => {
      // .filterで男性データの絞込み
      return person.gender === "男性";
    })
    .map((person) => {
      // .mapで要素から`name`プロパティに処理を加える
      return person.name + "くん";
    });
  expect(Male).toStrictEqual(["鈴木くん", "森山くん"]);

  const Female2 = objPerson
    .filter((person) => {
      return person.gender === "女性";
    })
    .map((person) => {
      return person.name + "さん";
    });
  expect(Female2).toStrictEqual(["田中さん"]);
});
//▲

//▼2024/6/6 「★文字列結合～」
test("文字列", () => {
  //文字列リテラルルール："" '' ``
  //エスケープシーケンス：決まった特殊文字のこと（`\n` = 改行）
  // テンプレートリテラル中に${変数名}  例:`Hello ${name}!`
  //Stringのatメソッド: str.at(-1)); =>文字列の“列”
  //ビット列の0と1,Unicodeという文字コード,人は10進数で処理し、コンピューターは2進数で処理している

  //1) 文字列を配列へ分解するsplitメソッド →データ型:配列
  const strings = "あ、い、う".split("、");
  expect(strings).toStrictEqual(["あ", "い", "う"]);

  //2) 結合して文字列にするjoinメソッド →データ型:文字列
  const strings2 = ["あ", "い", "う"].join("・");
  expect(strings2).toStrictEqual("あ・い・う");

  //3)正規表現で.split(/\s+/);　 例)/\s+/は1つ以上のスペースにマッチする正規表現  →データ型:配列
  const strings3 = "東京-123 港区-456 浅草".split(/[\s|\d|-]+/);
  expect(strings3).toStrictEqual(["東京", "港区", "浅草"]);

  //4)文字列indexOfメソッド：指定した文字列で検索し、最初に現れたインデックスを返す  →データ型:数値
  const url = "https://jsprimer.net/basic/string/";
  const index = url.indexOf("/b");
  const newUrl = url.slice(index);
  expect(newUrl).toStrictEqual("/basic/string/");

  //5)真偽値の取得：startsWith(先頭か),endsWith(末尾か),includes(含むか)  →データ型:数値
  const alphabet = "abcdefg";
  expect(alphabet.startsWith("abc")).toStrictEqual(true);
  expect(alphabet.startsWith("c")).toStrictEqual(false);
  expect(alphabet.endsWith("c")).toStrictEqual(false);
  expect(alphabet.includes("e")).toStrictEqual(true);
  expect(alphabet.includes("z")).toStrictEqual(false);
});
//▲
