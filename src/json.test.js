//▼2024/09/12 「JSON」
test("JSONの練習", () => {
  expect(JSON.stringify(1)).toBe("1");
  expect(JSON.stringify("1")).toBe(`"1"`);
  expect(JSON.stringify("こんにちは")).toBe(`"こんにちは"`);
  expect(JSON.stringify([1, 2, 3, 4, 5])).toBe(`[1,2,3,4,5]`);
  expect(
    JSON.stringify({
      //JSは人が読みやすいように空白OK
      name: "ai",
      age: 32,
    })
  ).toBe(`{"name":"ai","age":32}`); //JSONは機械が読むので空白いらない
});

test("JSON.parseメソッド", () => {
  // JSON文字列をオブジェクトに変換する
  expect(JSON.parse("1")).toBe(1);
  expect(JSON.parse(`"1"`)).toBe("1");
  expect(JSON.parse(`"こんにちは"`)).toBe("こんにちは");
  expect(JSON.parse(`[1, 2, 3, 4, 5]`)).toStrictEqual([1, 2, 3, 4, 5]);
  const json = `{
  "name":"ai",
  "age":32
  }`;
  expect(JSON.parse(json)).toStrictEqual({
    name: "ai",
    age: 32,
  });
});

test(" toJSONメソッド", () => {
  // toJSONメソッドを使ったシリアライズ
  const json = {
    _name: "ai",
    _age: 32,
    _secret: "xxxxxx",
    toJSON() {
      return {
        name: this._name,
        age: this._age,
      };
    },
  };
  expect(JSON.stringify(json)).toBe(`{"name":"ai","age":32}`);
});
//▲
