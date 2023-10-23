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

//宿題は fetchを使って、いくつかのサイトにアクセスする
//1並列実行されるパターン
//2直列実行するパターン
//3失敗する(アクセスできないサイトをURLに指定する)
const yahooUrl = fetch("https://www.yahoo.co.jp/");
yahooUrl.then((resp) => {
  resp.clone();
  console.log("ok:" + resp.clone());
});
