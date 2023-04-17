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

console.log(typeof "JavaScript"); // => "string"
const str = "文字列";
console.log(`これは${str}です`);//バッククォート「`」でないと動かない
expect(str).toBe("文字列");//改行（\n）


test('文字列の練習',() => {
    const str1 = "文字列です";
    const str2 = '文字列です';
    expect(str1 === str2).toBe(true);

    const str3 = `これは
改行です`;
    const str30 = `これは
    改行です`;//インデントが入ったらエラーとなる。
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