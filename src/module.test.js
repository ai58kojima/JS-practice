test("モジュールの練習", () => {
  const pattern = /^[0-9０-９]+$/;
  const string1 = pattern.test("abc");
  const string2 = pattern.test("123");
  expect(string1).toStrictEqual(false);
  expect(string2).toStrictEqual(true);
  expect(pattern.test("文字列")).toStrictEqual(false);
  expect(pattern.test(" 123")).toStrictEqual(false);
  expect(pattern.test("123 ")).toStrictEqual(false);
});
