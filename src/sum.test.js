const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('プログラミングコメントの練習',() => {
    //エラーになるため実行させないようにコメントする
    //expect(sum(1,2)).toBe(4);
});

test('constの練習',() => {
    const bookTitle ="本";
    const bookPrice =3000;
    expect(bookTitle).toBe("本");
    expect(bookPrice).toBe(3000);
});