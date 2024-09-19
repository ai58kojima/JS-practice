//▼2024/09/19 「Math」
test("Mathの練習", () => {
  //◆数値の大小を比較する
  const mathMax = Math.max(1, 10);
  expect(mathMax).toBe(10);
  const mathMin = Math.min(1, 10);
  expect(mathMin).toBe(1);
  //◆数値を整数にする →数直線
  //　小数点以下を切り捨てるMath.floorメソッド
  const mathFloorPlus = Math.floor(1.5);
  expect(mathFloorPlus).toBe(1);
  const mathFloorMinus = Math.floor(-1.5);
  expect(mathFloorMinus).toBe(-2);

  //　小数点以下を切り上げるMath.ceilメソッド
  const mathCeilPlus = Math.ceil(1.5);
  expect(mathCeilPlus).toBe(2);
  const mathCeilMinus = Math.ceil(-1.5);
  expect(mathCeilMinus).toBe(-1);

  //　四捨五入するMath.roundメソッド
  const mathRoundPlus = Math.round(1.5);
  expect(mathRoundPlus).toBe(2);
  const mathRoundMinus = Math.round(-1.5);
  expect(mathRoundMinus).toBe(-1);
});
//▲
