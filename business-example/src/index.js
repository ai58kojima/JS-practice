import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyTime from "./MyTime";
import { Rnd } from "react-rnd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      <MyTime />
    </Rnd>
  </React.StrictMode>
);
//やること：SPAを使って➀世界時計 ➁残り時間の表示 ➂メモ帳 ➃カレンダーを作る
//React部品・配置方法/状態保存(useState関数)/副作用フック(useEffect関数)

//1)まだ動かない時計を作る
//　∟Reactプロジェクトを作る
//　∟プロジェクト構造を知る
//   ∟➀～➃コンポーネントを部品化し、index.jsに格納する(MyTime.js)

reportWebVitals();
