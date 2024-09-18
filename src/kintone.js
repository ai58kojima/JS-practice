//▼2024/09/05 「Promise実用編とasync awaitの概念」
// kintoneのAPIを投げてPromiseを使っているケースを見てみる→開発ツールのネットワーク参照
// https://cybozu.dev/ja/kintone/docs/js-api/api/kintone-rest-api-request/

// ■ 非同期処理
(() => {
  function callApi(ID) {
    const body = {
      app: kintone.app.getId(),
      id: ID,
    };
    return kintone.api(kintone.api.url("/k/v1/record.json", true), "GET", body);
  }
  Promise.all([callApi(1), callApi(2)]).then((value) => {
    console.log(value);
  });
})();

// ■ 逐次処理
// 逐次処理で２レコード取得して、まとめてレスポンスに出す
// 同時に２レコード取得して、レスポンスをログに出す
(() => {
  function callApi(ID) {
    const body = {
      app: kintone.app.getId(),
      id: ID,
    };
    return kintone.api(kintone.api.url("/k/v1/record.json", true), "GET", body);
  }
  const results = [];
  callApi(1)
    .then((value) => {
      results.push(value);
      return callApi(2);
    })
    .then((value) => {
      results.push(value);
    })
    .then(() => {
      console.log(results);
    });
})();
//▲
