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

//▼2024/05/ 「配列の反復処理から(map, filterから)~」
test("", () => {});
//▲
