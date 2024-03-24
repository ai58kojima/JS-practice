import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyTime from "./MyTime";
import { Rnd } from "react-rnd";
import MyTimeGraph from "./MyTimeGraph";
import MyNotepad from "./MyNotepad";

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
      <MyTime area="東京" zone="Asia/Tokyo" />
    </Rnd>

    <Rnd
      default={{
        x: 320,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      <MyTime area="ニューヨーク" zone="America/New_York" />
    </Rnd>

    <Rnd
      default={{
        x: 0,
        y: 200,
        width: 640,
        height: 200,
      }}
    >
      <MyTimeGraph start="9:00" end="17:30" />
    </Rnd>

    <Rnd
      default={{
        x: 0,
        y: 400,
        width: 640,
        height: 400,
      }}
    >
      <MyNotepad />
    </Rnd>
  </React.StrictMode>
);
//やること：SPAを使ってコンポーネント(部品)を作る
//         ➀世界時計 ➁残り時間の表示 ➂メモ帳 ➃カレンダー
//         *React部品・配置方法

//➀世界時計
//1)・まだ動かない時計を作る
//　　　　∟Reactプロジェクトを作る
//　　　　∟プロジェクト構造を知る
//   　　　∟➀～➃コンポーネントを部品化し、index.jsに格納する(MyTime.js)
//2)・時計を動かす
//  　 　∟ステートを使うnow⇒nowを毎秒更新
//　　　・世界時計にする
//　　 　∟タイムゾーンを変換するライブラリを使う => date-fns-tz:タイムゾーンを扱うためのパッケージ(https://qiita.com/suin/items/296740d22624b530f93a)

//➁残り時間の表示
//　　・就業時間の残り時間を可視化するグラフ部品を作る
//      ∟グラフ表示のライブラリ(https://react-chartjs-2.js.org/)
//      いったん固定した情報を作る
//       ∟コンポーネント名:MyTimeGraph.js
//       ∟積み上げ横棒グラフとして描く

//まとめ：1.状態保存は「useState関数」を使う => 更新関数で更新する
//       2.定期実行にはタイマーを使う
//          ∟useEffect関数を使って初期化関数を定義、タイマーセット。タイマーでステートを更新する
//       3.属性
//          ∟コンポーネントタグには<MyTime zone="09:00"/>等の属性を指定できる
//          ∟属性はコンポーネント関数の引数(props)で取得できる(props.zone)
//       4.グラフはライブラリを使う

//➂メモ帳
//　　・入力されたテキストを保存できるようにする
//　　　∟テキストをステートを使って経由保存し、変更毎にローカルストレージに保存
//
//
//

reportWebVitals();
