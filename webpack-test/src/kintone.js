import _ from "lodash";
import "./kintone.css";

kintone.events.on("app.record.index.show", (event) => {
  //一覧画面で、ボタンを作成してクリックしたときにalertを表示する
  const header = kintone.app.getHeaderMenuSpaceElement();
  const button = document.createElement("button");
  button.innerText = "クリックはこちら";
  button.onclick = () => {
    //業務開始もしくは業務終了に値がなければ、レコード番号をアラート表示する
    const records = event.records;
    const errorRecords = records.filter((r) => {
      return r.業務開始.value === "" || r.業務終了.value === "";
    });
    const errorRecordsIds = errorRecords.map((r) => {
      return r.レコード番号.value;
    });
    if (errorRecordsIds.length > 0) {
      alert(
        "レコードの値がおかしいです。レコード番号は" +
          errorRecordsIds +
          "です。"
      );
    }
  };
  button.classList.add("kintoneplugin-button-normal");
  header.appendChild(button);
});
