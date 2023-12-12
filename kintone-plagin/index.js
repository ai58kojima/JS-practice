import { helloWorld } from "./sample.mjs";
kintone.events.on("app.record.detail.show", (event) => {
  console.log(event);
});

//レコードを保存した時に、
//レコードのフィールド値が数字であればOK、そうでなければエラーメッセージを表示する。
kintone.events.on("app.record.create.submit", (event) => {
  const pattern = /[0-9０-９]+/;
  console.log(event.record.数字チェック.value === pattern); //フィールド内の値を取得
  //debugger;
});
