import _ from "lodash";
import "./kintone.css";
import { KintoneRestAPIClient } from "@kintone/rest-api-client"; //ライブラリ

kintone.events.on("app.record.index.show", (event) => {
  // 一覧画面で、ボタンを作成してクリックしたときにalertを表示
  const header = kintone.app.getHeaderMenuSpaceElement();

  // [Aボタン]業務開始もしくは業務終了に値がなければ、レコード番号をアラート表示
  const buttonA = createButton("業務時間確認", () => {
    const records = event.records;
    // console.log(records.length);
    const errorRecords = records.filter((r) => {
      return r.業務開始.value === "" || r.業務終了.value === ""; //OR
    });
    const errorRecordsIds = errorRecords.map((r) => {
      return r.レコード番号.value;
    });
    if (errorRecordsIds.length > 0) {
      alert(
        "業務時間の値がありません。レコード番号は" + errorRecordsIds + "です。"
      );
    }
  });

  // [Bボタン]
  const buttonB = createButton("thanksチェック", onButtonBClicked(event));

  // [Cボタン]
  const buttonC = createButton("全レコードチェック", onButtonCClicked(event));

  header.appendChild(buttonA);
  header.appendChild(buttonB);
  header.appendChild(buttonC);
});

//【関数】ボタン生成（引数で受取り）
function createButton(innerText, onclick) {
  const button = document.createElement("button");
  button.innerText = innerText;
  button.onclick = onclick;
  button.classList.add("kintoneplugin-button-normal");
  return button;
}

//【関数】Bクリック時のアクション
function onButtonBClicked(event) {
  return () => {
    // 全レコードの業務内容に"thanks"の文字があれば、
    //そのレコード数をカウントしてアラートを出す。
    const records = event.records;
    const keyword = "thanks";
    //初期化
    let foundCount = 0;
    let unFoundCount = 0;
    //レコードをループ
    records.forEach((record) => {
      //【for文の場合：for (let i = 0; i < records.length; i++) {console.log(records[i]);}】
      if (record.業務内容.value.toLowerCase().includes(keyword)) {
        foundCount++;
      } else {
        unFoundCount++;
      }
    });

    alert(`全レコードの内${foundCount}件にthanksが含まれています`);
    console.log(`残りの${unFoundCount}件にはthanksが含まれていません`);
  };
}

//【関数】Cクリック時のアクション
function onButtonCClicked(event) {
  return async () => {
    // 【asyncとawaitバージョン】
    const client = new KintoneRestAPIClient(); // KACライブラリを使う準備
    const res = await client.record.getAllRecords({ app: kintone.app.getId() }); // getAllRecordsを使って全レコードを取得する
    const okField = res.filter((r) => {
      return r.業務内容.value !== "";
    });
    console.log(okField); // コンソールに全レコードを表示

    // 【asyncと.thenバージョン】＊awaitを使わずに非同期処理
    // const res2 = client.record // [型：Promise]
    //   .getAllRecords({ app: kintone.app.getId() });
    // res2
    //   .then((res2) => {
    //     console.log(res2);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    return event;
  };
}
