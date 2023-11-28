import { timesTest as t } from "./module.mjs";

test("モジュールの練習", () => {
  expect(t(2, 3)).toEqual(6);
});
