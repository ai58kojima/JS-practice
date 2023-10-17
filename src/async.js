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
