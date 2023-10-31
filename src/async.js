//setTimeout(コールバック関数, delay);
console.log("a");
setTimeout(() => {
  console.log("1秒後に実行");
}, 1000);
console.log("b");

// asyncPromiseTask関数は、Promiseインスタンスを返す
function asyncPromiseTask() {
  return new Promise((resolve, reject) => {
    resolve({ a: "成功" });
    reject(new Error("失敗"));
  });
}
// asyncPromiseTask関数の非同期処理が成功した時、失敗した時に呼ばれる処理をコールバック関数として登録する
asyncPromiseTask()
  .then((num) => {
    console.log(num);
  })
  .catch(() => {});

const response = fetch("https://google.com"); //promiseが返ってくる
response.then((resp) => {
  resp.ok;
  console.log("ok:" + resp.ok);
  //console.log("ok:" + resp.text()); //非同期処理
  resp.text().then((text) => {
    console.log(text);
  });
});

//[宿題] fetchを使って、サイトにアクセスする
//1)並列実行されるパターン
const urls = [
  "https://www.site1.com", //urls配列内の各URLにアクセスするPromiseを生成
  "https://www.site2.com",
  "https://www.site3.com",
];
function fetchUrl(url) {
  // 各URLにアクセスするPromiseを生成する関数
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      console.log(`Fetched ${url}`);
      return data;
    })
    .catch((error) => {
      console.error(`Failed to fetch ${url}: ${error}`);
      return null;
    });
}
const promises = urls.map((url) => fetchUrl(url)); // 各URLの取得を並列実行
Promise.all(promises) //Promise.all()で並列実行
  .then((results) => {
    console.log("All requests completed:", results); // 成功：resultsには各URLの取得結果が順番に格納されています
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

//2直列実行するパターン
//3失敗する(アクセスできないサイトをURLに指定する)
