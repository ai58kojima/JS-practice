import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { parse, differenceInMinutes, startOfDay, endOfDay } from "date-fns";
import { useState, useEffect } from "react";

function MyTimeGraph(props) {
  const [graphdata, setGraphdata] = useState(getValues);

  // 現在時刻からグラフの値を作る
  function getValues() {
    // 現在日時
    const now = new Date();

    const startdate = parse(props.start, "HH:mm", now); // 始業日時
    const enddate = parse(props.end, "HH:mm", now); // 終業日時
    const today_start = startOfDay(now); // 当日0時0分
    const today_end = endOfDay(now); // 当日23時59分

    // 時間差を求める（60で割るのは時間にしたいから）
    const d1 = differenceInMinutes(now, startdate) / 60.0;
    const d2 = differenceInMinutes(enddate, now) / 60.0;
    const d0 = differenceInMinutes(startdate, today_start) / 60.0;
    const d3 = differenceInMinutes(today_end, enddate) / 60.0;

    return [d0, d1, d2, d3];
  }

  // グラフのオプション
  const options = {
    animation: false,
    plugins: {
      title: {
        display: true,
        text: "終業まで" + Math.round(graphdata[2] * 10) / 10 + "時間",
      },
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 24,
      },
      y: {
        stacked: true,
      },
    },
  };

  // データ
  //const graphdata = [9, 1, 8, 6];
  const data = {
    labels: [""],
    datasets: [
      // 始業まで
      {
        data: [graphdata[0]],
        backgroundColor: "rgb(232, 250, 233)",
      },
      // 始業からの経過時間
      {
        data: [graphdata[1]],
        backgroundColor: "rgb(144, 227, 109)",
      },
      // 終業までの時間
      {
        data: [graphdata[2]],
        backgroundColor: "rgb(250, 225, 35)",
      },
      // 終業後の時間
      {
        data: [graphdata[3]],
        backgroundColor: "rgb(232, 250, 233)",
      },
    ],
  };

  useEffect(() => {
    const timerid = setInterval(() => {
      // 一定時間ごとに実行する処理
      setGraphdata(getValues());
    }, 5 * 60 * 1000);

    // タイマーを解放する関数を返す
    return () => {
      clearTimeout(timerid);
    };
  }, []);

  return <Bar options={options} data={data} />;
}

export default MyTimeGraph;
