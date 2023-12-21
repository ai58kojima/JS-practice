//When:レコード詳細画面を表示したとき
//kintone.events.on("app.record.detail.show", (event) => {
//What:コンソールを出す
// console.log("event:" + event);
//});

//When:レコード追加またはレコード編集画面で保存するとき
const recordEditEvent = ["app.record.create.submit", "app.record.edit.submit"];
kintone.events.on(recordEditEvent, (event) => {
  //What:値が数字かどうかチェックする。違う時はエラーメッセージを表示する
  const record = event.record;
  if (!record.数字チェック.value.match(/^[0-9]+$/)) {
    event.error = "数字を入力してください";
    return event;
  }
});

//When:レコード一覧画面を表示したとき
kintone.events.on("app.record.index.show", async (event) => {
  //What:タイトルに数字が入っていないレコードを抽出する
  // console.log(event.records);

  const body = {
    app: kintone.app.getId(),
  };

  const result = await kintone.api(
    kintone.api.url("/k/v1/records.json", true),
    "GET",
    body
  );
  // console.log(result);

  const recordWithoutNumber = result.records.filter(
    (record) => !/^[0-9]+$/.test(record.数字チェック.value)
  );
  //How:特定のクラス要素を取得し、各要素のテキスト値とレコード値を比較
  recordWithoutNumber.forEach((r) => {
    if (typeof r.数字チェック.value === "string") {
      const elements = document.querySelectorAll(".line-cell-gaia");
      console.log("これは文字列です");

      elements.forEach((element) => {
        const elementValue = element.textContent.trim();
        if (elementValue === r.数字チェック.value) {
          element.style.color = "red"; // 赤色に変更
          //console.log("赤文字にしました");
        }
      });
    }
  });

  //フィールド要素を取得
  // const elements = kintone.app.getFieldElement("数字チェック");
  //   elements.forEach((element) => {
  //   element.style.color = "red";
  // });
  // }
});
