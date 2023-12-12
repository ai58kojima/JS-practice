import { helloWorld } from "./sample.mjs";
kintone.events.on("app.record.detail.show", (event) => {
  console.log(event);
});

//レコードを保存した時に、
//レコードのフィールド値が数字であればOK、そうでなければエラーメッセージを表示する。
kintone.events.on("app.record.create.submit", (event) => {
  const record = event.record;

  if (!record.数字チェック.value.match(/^[0-9０-９]+$/)) {
    window.alert("数字を入力してください");
    return false;
  }
  //console.log(event.record.数字チェック.value === pattern); //フィールド内の値を取得
  //debugger;
});
