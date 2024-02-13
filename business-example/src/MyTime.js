import { format } from "date-fns"; //date-fnsライブラリの読み込み
import "./MyTime.css";
import { useState } from "react";

function MyTime() {
  //  ステートを定義
  const [now, setNow] = useState(getTime());

  function getTime() {
    const now = new Date();
    return format(now, "HH;mm;ss");
  }

  return <div className="time">{now}</div>;
}

export default MyTime;
