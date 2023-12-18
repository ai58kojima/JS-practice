const pattern = /^[0-9０-９]+$/; //正規表現をログに出してみる
const string1 = pattern.test("abc");
const string2 = pattern.test("123");
console.log(string1);
console.log(string2);
console.log(string1 + string2);
