//[練習]async function
// async function asyncMain() {
//   const url = fetch("https://jsprimer.net/basic/async/");
//   const body = await url.text();
//   console.log((await url.text()).substring(0, 10));
//   return body;
// }
// console.log("before");
// asyncMain().then((body) => {
//   return console.log(body.substring(0, 20));
// });
// console.log("after");

//[宿題1]async_homework.jsをasync functionに書き換える
const urls = [
  "https://www.site1.com",
  "https://www.site2.com",
  "https://www.site3.com",
];
//1.asyncの中はPromiseが返ってきたらfetchを受取る
async function fetchUrl(url) {
  try {
    const response = await fetch(url); //← return fetch(url).then()と同じ
    const data = await response.text();
    console.log(`Fetch成功 ${url}`);
    console.log(data.substring(0, 10));
    return data;
  } catch (error) {
    //バトンのようなもの！try...catchで捕まえてthrow errorにバトンを渡すイメージ
    console.log(`Fetch失敗 ${url}:${error.message}`);
    throw error;
  }
}

// 並列実行 doParallel();
//  1.いくつか並列実行を飛ばす
//  2.Promise.all()の引数に入れる
//  3.async functionでrapし、その中でawaitする
async function doParallel() {
  const promises = urls.map((url) => fetchUrl(url)); //=>3回投げている
  const results = await Promise.all(promises);
  console.log("全リクエスト成功:", results);
}
doParallel();

//直列実行 doSeries();
//　1.doSeries関数内でfor...ofを使用
//　2.await fetchUrl(url);を使って順に非同期処理を実行
// [宿題2]エラーが出ても続行するには？
async function doSeries() {
  {
    try {
      for (const url of urls) {
        console.log("ログ：", url);
        await fetchUrl(url);
      }
    } catch (error) {
      console.log(`Fetch失敗 ${url}:${error.message}`);
    }
  }
}
doSeries();

//【try...catch構文】
//失敗するかもしれない時に捕まえるプログラム
try {
  //console.log("try節:この行は実行されます"); //⇒try節:この行は実行されます
  undefinedFunction();
  //console.log("call me?"); //⇒例外が発生したため、この行は実行されません
} catch (error) {
  //console.log("catch節:この行は実行されます"); //⇒catch節:この行は実行されます
  //console.log(error instanceof ReferenceError); // => true
  //console.log(error.message); // => "undefinedFunction is not defined"
} finally {
  //console.log("finally節:この行は実行されます"); //⇒finally節:この行は実行されます
}
