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

//▼2024/6/13 「正規表現」
test("正規表現オブジェクト", () => {
  //1)正規表現版Stringのsearchメソッド:パターンにマッチする電話番号の検索
  const pattern = /\d{3}-\d{4}-\d{4}/;
  expect("000-0000-0000".search(pattern)).toBe(0); //マッチするのでインデックス0を返す
  expect("000-000-000".search(pattern)).toBe(-1); //マッチしないので-1を返す
  expect("abc000-0000-0000".search(pattern)).toBe(3); //インデックス3からマッチするので3を返す

  //2)matchメソッド:  電話番号を含む文字列からの検索
  const str =
    "私の電話番号は000-0000-1111です。Aさんの電話番号は000-0000-9999です。";
  const pattern2 = /\d{3}-\d{4}-\d{4}/;
  const result2 = str.match(pattern2); //最初に一致する電話番号（[0]番目）を検索
  expect(result2.length).toBe(1);
  expect(result2[0]).toBe("000-0000-1111");

  //3)gフラグ（globalの略称）：正規表現のマッチした全ての文字列を含んだ配列を返す
  const pattern3 = /\d{3}-\d{4}-\d{4}/g;
  const result3 = str.match(pattern3);
  expect(result3.length).toBe(2); //マッチする文字列が全部で2つあるため
  expect(result3[0]).toBe("000-0000-1111");
  expect(result3[1]).toBe("000-0000-9999");

  //4)以下の文章から String.matchAllを使って英単語を取り出す
  const str4 = `吾輩わがはいはcatである。nameはyet 無い。
  whereでbornedとんとknowがつかぬ。何でも薄暗いhumidしたlocationで
  ニャーニャーcry事だけはremembered。`;
  const pattern4 = /[a-zA-Z]+/g;
  const results4 = str4.matchAll(pattern4);
  for (const result of results4) {
    //// matchAllはIteratorを返す(要素全体の情報の列挙)
    console.log(`match: "${result[0]}", index: "${result.index}"`);
  }
});
//▲

//▼2024/6/20 「マッチした文字列の一部を取得～」
test("文字列のキャプチャリング～", () => {
  //1)String.matchメソッドと(キャプチャリング)によって、数字(\d+)にマッチする部分のみを取り出す。
  const swPattern = /StarWars(\d+)/;
  const [all, capture1] = "StarWars1".match(swPattern); //分割代入 const[all,capture1,capture2]="文字列".match(/パターン(capture1)と(capture2)/)
  expect(all).toBe("StarWars1");
  expect(capture1).toBe("1");

  //2) matchAllで返ってきた結果(Iterator)を、配列に代入する
  const esPattern = /ES(\d+)/g;
  const esIterator = "ES2015、ES2016、ES2017".matchAll(esPattern);
  const result = [];
  //for (const value of array){...} 反復処理iterateで配列の値を列挙(1つずつ出力)
  for (const match of esIterator) {
    result.push(match);
  }
  expect(result.length).toBe(3);
  expect(result[0][0]).toBe("ES2015"); //result[0] = [[all, capture1],[all, capture2],[all, capture3]]
  expect(result[0][1]).toBe("2015");
  expect(result[1][0]).toBe("ES2016");
  expect(result[1][1]).toBe("2016");
  expect(result[2][0]).toBe("ES2017");
  expect(result[2][1]).toBe("2017");

  //3)testメソッド：電話番号がマッチするかテスト(真偽値を取得)
  const telPattern1 = /\d{3}-\d{4}-\d{4}/; //includes
  const telPattern2 = /^\d{3}-\d{4}-\d{4}/; //startsWith「^」先頭に一致
  const telPattern3 = /\d{3}-\d{4}-\d{4}$/; //endsWith「$」末尾に一致
  const telPattern4 = /^\d{3}-\d{4}-\d{4}$/; //all match

  const str1 = "私の電話番号は000-0000-1111です";
  expect(telPattern1.test(str1)).toBe(true);
  expect(telPattern2.test(str1)).toBe(false);
  expect(telPattern3.test(str1)).toBe(false);
  expect(telPattern4.test(str1)).toBe(false);

  const str2 = "090-0000-1111です。";
  expect(telPattern1.test(str2)).toBe(true);
  expect(telPattern2.test(str2)).toBe(true);
  expect(telPattern3.test(str2)).toBe(false);
  expect(telPattern4.test(str2)).toBe(false);

  const str3 = "私の番号は090-0000-1111";
  expect(telPattern1.test(str3)).toBe(true);
  expect(telPattern2.test(str3)).toBe(false);
  expect(telPattern3.test(str3)).toBe(true);
  expect(telPattern4.test(str3)).toBe(false);

  const str4 = "090-0000-1111";
  expect(telPattern1.test(str4)).toBe(true);
  expect(telPattern2.test(str4)).toBe(true);
  expect(telPattern3.test(str4)).toBe(true);
  expect(telPattern4.test(str4)).toBe(true);

  //4)replace/replaceAllメソッド:文字列の置換/削除
  const string = "ミッキーマウス";
  expect(string.replace(/ミッキー/, "ミニー")).toBe("ミニーマウス");

  const string2 = "090-0000-1111";
  expect(string2.replace(/\d{4}/g, "****")).toBe("090-****-****");

  const url = "https://jsprimer.net";
  expect(url.replaceAll(/https/g, "http")).toBe("http://jsprimer.net");

  const hello = "Hello, world!";
  expect(hello.replaceAll(/[aiueo]/g, "*")).toBe("H*ll*, w*rld!"); //[]内どれかと一致
});
//▲
