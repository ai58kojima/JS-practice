//[宿題1~3] fetchを使って、サイトにアクセスする

const urls = [
  "https://www.site1.com",
  "https://www.site2.com",
  "https://www.site3.com",
];
function fetchUrl(url) {
  // fetchUrl()各URLにアクセスするPromiseを生成する関数
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      console.log(`Fetch成功しました ${url}`);
      return data;
    })
    .catch((error) => {
      console.error(`Fetch失敗しました ${url}:${error}`);
      //return null;　　←これをするとpromiseはresolve扱いになり、成功したことになる
      throw error; //throwでちゃんと失敗扱いになる＝36行目の「.then()」は呼ばれない
    });
}

//1) 並列実行されるパターン　　★前の処理関係なくリクエストを一気に送るー[AFBEDC]
//　 非同期：取り出す順番はJSが決める(ランダムのように見える)
//const promises = urls.map((url) => fetchUrl(url));
const promises = [Promise.resolve()];
Promise.all(promises) //Promise.all()で並列実行.then(成功)と.catch(失敗)を返す
  .then((results) => {
    console.log("全リクエスト成功しました:", results); // 成功時処理：resultsには各URLの取得結果が順に格納されている
  })
  .catch((error) => {
    console.error("エラー発生しました:", error); // 3) 失敗時処理
  });

//2) 直列実行するパターン 　　★前の処理が完了した後に処理実行させるー[ABC→DEF]
let current = Promise.resolve(); //Promise.resolve()で初期化
for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  //または、const url of urls
  console.log("ログ：", url);
  current = current.then(() => fetchUrl(url)); //currentはプロミスにチェーンされ、前の処理完了するまで次の処理待機
}
