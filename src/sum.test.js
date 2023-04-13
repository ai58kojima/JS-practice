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
    //値の変更はエラー→実行されない　//bookTitle = "まんが"
    expect(bookTitle).toBe("本");
    expect(bookPrice).toBe(3000);
});

test('letの練習',() => {
    let bookTitle;
    expect(bookTitle).toBe(undefined);
    bookTitle = "本"
    expect(bookTitle).toBe("本");

    let bookPrice =3000;
    expect(bookPrice).toBe(3000);

    bookPrice = 5000;
    expect(bookPrice).toBe(5000);
});

test('consoleの練習',() => {
    console.log(1); // => 1
    console.log(1+1); // => 2
    const total = 42 + 42;//=> 84
    console.log(total);
});
//エラー：console.log(1; // => SyntaxError: missing ) after argument list
//cosnt a = 1;
//const value = "値";
//console.log(x); // => ReferenceError: x is not defined