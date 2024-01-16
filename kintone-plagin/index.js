("use strict");
//1)When:レコード詳細画面を表示したとき What:コンソールを出す
kintone.events.on("app.record.detail.show", (event) => {
  console.log("event:" + event);
});

//2)When:レコード追加またはレコード編集画面で保存するとき What:値が数字かどうかチェック,違う時エラーメッセージを表示
const recordEditEvent = ["app.record.create.submit", "app.record.edit.submit"];
kintone.events.on(recordEditEvent, (event) => {
  const record = event.record;
  if (!record.数字チェック.value.match(/^[0-9]+$/)) {
    event.error = "数字を入力してください";
    return event;
  }
  debugger;
});

//3)When:レコード一覧画面を表示したとき
kintone.events.on("app.record.index.show", async (event) => {
  const record = event.record;
  const body = {
    app: kintone.app.getId(),
  };
  const result = await kintone.api(
    kintone.api.url("/k/v1/records.json", true),
    "GET",
    body
  );
  //What:タイトルに数字が入っていないレコードを抽出する
  const recordWithoutNumber = result.records.filter(
    (record) => !/^[0-9]+$/.test(record.数字チェック.value)
  );
  const recordIDs = recordWithoutNumber.map(
    (element) => element.レコード番号.value
  );
  console.log("レコード番号:" + recordIDs + "は、数字以外が含まれています。");
  //What:各要素のテキスト値とレコード値を比較し、数字が含まれているレコードの色を変える
  const elements = kintone.app.getFieldElements("レコード番号");
  elements.forEach((element) => {
    const recordNumber = element.textContent;
    const found = recordIDs.some((recordID) => recordID === recordNumber);
    if (found) {
      element.classList.add("warn");
    }
  });
});

//4)when:新規レコード追加画面でボタンがクリックしたとき
const editEvent = ["app.record.create.show", "app.record.edit.show"];
kintone.events.on(editEvent, (event) => {
  console.log("編集画面");
  //  what:全レコードのタイトルの最大値を取得し、その数字の最大値を取得
  //       最大値＋１を計算してタイトルに入力する

  // メニュー上側の要素取得・ボタン表示
  const element = kintone.app.record.getHeaderMenuSpaceElement();
  const button = document.createElement("button");
  button.textContent = "最大値＋１を計算";
  // ボタン押下処理に
  button.onclick = async () => {
    console.log("clicked");
    // 全レコードのタイトル取得
    const stringIDs = await getIDs();
    console.log(stringIDs);
    //レコードに値をセットする
    const maxID = getMaxID(stringIDs);
    const { record } = kintone.app.record.get();
    record["数字チェック"].value = maxID;
    kintone.app.record.set({ record });
  };
  element.appendChild(button);
});

//数字をチェックする関数
function inNumber(numberString) {}
// isNumber()を使ってnumberIDsを作成する
function getMaxID(IDs) {
  const numberIDs = IDs.map((ID) => Number.parseInt(ID)).filter(
    (n) => !Number.isNaN(n)
  );
  console.log(numberIDs);
  return Math.max(...numberIDs) + 1; //Math.max(a)は配列⇒spread構文にする...x　最大値を取得
}

//（レコードの一括取得）カーソルを作成する
async function getIDs() {
  let ID = "";
  {
    const body = {
      app: kintone.app.getId(),
      fields: ["数字チェック"],
      size: 5,
    };

    //（レコードの一括取得）カーソルからレコードを取得する
    const Response = await kintone.api(
      kintone.api.url("/k/v1/records/cursor.json", true),
      "POST",
      body
    );
    ID = Response.id;
    console.log(Response);
  }
  const IDs = [];

  //（レコードの一括取得）カーソルを削除する
  {
    const body = {
      id: ID,
    };

    let next = true;
    while (next) {
      const response = await kintone.api(
        kintone.api.url("/k/v1/records/cursor.json", true),
        "GET",
        body
      );
      next = response.next;
      IDs.push(response.records.map((r) => r.数字チェック.value));
      console.log(response);
    }
  }
  return IDs.flat();
}
