kintone.events.on("app.record.detail.show", (event) => {
  console.log(event);
});

//レコードを保存した時に、値が数字かどうかチェックする。違う時はエラーメッセージを表示する。
const recordEditEvent = ["app.record.create.submit", "app.record.edit.submit"];
kintone.events.on(recordEditEvent, (event) => {
  const record = event.record;
  //kintoneのエラーダイヤルを出す（https://cybozu.dev/ja/kintone/docs/js-api/events/event-object-action）
  if (!record.数字チェック.value.match(/^[0-9０-９]+$/)) {
    event.error = "数字を入力してください";
    return event;
  }
});

//複数のレコードを取得する
//タイトルに数字が入っていないレコードを抽出する
kintone.events.on("app.record.index.show", async (event) => {
  console.log(event);
  //kintone REST API リクエストを送信する API を使ったリクエスト
  const body = {
    app: kintone.app.getId(4429),
  };
  const result = await kintone.api(
    kintone.api.url("/k/v1/records.json", true),
    "GET",
    body
  );
  //debugger;
  console.log(result);
});

//一覧でrecords.jsonを取得して特定の条件に満たないレコードを抽出する
