import _ from "lodash";
import "./kintone.css";

kintone.events.on("app.record.index.show", () => {
  //一覧画面で、ボタンを作成してクリックしたときにalertを表示する
  const header = kintone.app.getHeaderMenuSpaceElement();
  const button = document.createElement("button");
  button.innerText = "click";
  button.onclick = () => {
    alert("クリックされました。");
  };
  button.classList.add("kintoneplugin-button-normal");
  header.appendChild(button);
});
