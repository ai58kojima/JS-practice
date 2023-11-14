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

//[宿題]async_homework.jsをasync functionに書き換える
const urls = [
  "https://www.site1.com",
  "https://www.site2.com",
  "https://www.site3.com",
];
//1.asyncの中はPromiseが返ってきたらfetchを受取る
async function fetchUrl(url) {
  const response = await fetch(url); //← return fetch(url).then()と同じ
  const data = await response.text();
  console.log(`Fetch成功 ${url}`);
  console.log(data.substring(0, 10));
  return data;
}
//Q)エラーメッセージ "TypeError: url.text is not a function"
//　エラーの命令が必要か
//　【試】catch(error) {
//   console.error(`Fetch失敗 ${url}:${error.message}`);
//   throw error;
// };

// 並列実行 doParallel();
//  1.いくつか並列実行を飛ばす
//  2.Promise.all()の引数に入れる
//  3.async functionでrapし、その中でawaitする
async function doParallel() {
  const promises = urls.map((url) => fetchUrl(url));
  const results = await Promise.all(promises);
  console.log("全リクエスト成功:", results);
}
doParallel();
//Q)エラーverはどうやって書くか

// Before)Promise.all(promises)
//   .then((results) => {
//     console.log("全リクエスト成功:", results);
//   })
//   .catch((error) => {
//     console.error("エラー発生:", error);
//   });

//直列実行 doSeries();
//　1.doSeries関数内でfor...ofを使用
//　2.await fetchUrl(url);を使って順に非同期処理を実行
async function doSeries() {
  for (const url of urls) {
    console.log("ログ：", url);
    await fetchUrl(url);
  }
}
doSeries();
// Before)let current = Promise.resolve();
// for (const url of urls) {
//   console.log("  ログ：", url);
//   current = current.then(() => fetchUrl(url)); }
