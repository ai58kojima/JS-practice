import _ from "lodash";
import "./kintone.css";
import { KintoneRestAPIClient } from "@kintone/rest-api-client"; //ライブラリ

kintone.events.on("app.record.index.show", (event) => {
  // 一覧画面で、ボタンを作成してクリックしたときにalertを表示
  const header = kintone.app.getHeaderMenuSpaceElement();

  // [Aボタン]業務開始もしくは業務終了に値がなければ、レコード番号をアラート表示
  const buttonA = createButton("業務時間確認", () => {
    const records = event.records;
    console.log(records.length);
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
  const buttonB = createButton("ボタンB", onButtonBClicked(event));

  header.appendChild(buttonA);
  header.appendChild(buttonB);
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
    console.log("ボタンBがクリックされました", event);
  };
}
