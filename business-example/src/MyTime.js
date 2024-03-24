import { format, set } from "date-fns"; //date-fnsライブラリの読み込み
import "./MyTime.css";
import { useState, useEffect } from "react";
import { utcToZonedTime } from "date-fns-tz";

function MyTime(props) {
  //  ステートを定義　now:初期値
  const [now, setNow] = useState(getTime()); //setNow:更新の関数

  useEffect(() => {
    //初期化と終了処理を書きたい時
    //ここに初回に実行したいコードを記述（RENDERING(書き直し)後に実行）
    const timerid = setInterval(() => {
      //一定時間(1000ミリ秒)毎に実行するタイマー処理
      setNow(getTime());
    }, 1000); //

    //タイマーを終了する関数を返す
    return () => {
      clearTimeout(timerid);
    };
  }, []); //[]は初期値に実行するため

  function getTime() {
    //⑴引数を指定する
    //現在の日本時間
    //const now = new Date();
    //現在のニューヨーク時間
    const now = utcToZonedTime(new Date(), props.zone);
    return format(now, "HH;mm;ss");
  }

  return (
    <div className="time">
      <div className="area">{props.area}</div>
      {now}
    </div>
  ); //ステートの参照
}

export default MyTime;
