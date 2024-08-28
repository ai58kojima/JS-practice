("use strict");
// 「案件管理アプリ」:

// イベントオブジェクトを出力
kintone.events.on("app.record.detail.show", (event) => {
  console.log(event);
});

// 提案プランの値を"Cプラン"にする
kintone.events.on("app.record.edit.show", (event) => {
  event.record.提案プラン.value = "Cプラン";
  return event;
});

//フィールドの編集可／不可切り替え
(() => {
  kintone.events.on(
    ["app.record.create.change.進捗状況", "app.record.edit.change.進捗状況"],
    (event) => {
      if (event.record["進捗状況"].value === "受注") {
        event.record["プラン費用"].disabled = true;
        event.record["オプション費用"].disabled = true;
      } else {
        event.record["プラン費用"].disabled = false;
        event.record["オプション費用"].disabled = false;
      }
      return event;
    }
  );
})();

// フィールドの自動入力
(() => {
  kintone.events.on(
    // 「保存ボタン時」初回商談日を取得し、２週間後の値を算出
    ["app.record.create.submit", "app.record.edit.submit"],
    (event) => {
      const date = dayjs(event.record.初回商談日.value);
      const planDate = date.add(2, "week").format("YYYY年MM月DD日");
      // 詳細の値を取得し、planDateを追記
      const orderDate = event.record.詳細.value + planDate;
      event.record.詳細.value = orderDate;
      return event;
    }
  );
})();

// フィールドの表示・非表示
(() => {
  const events = [
    "app.record.create.show",
    "app.record.edit.change.オプション",
  ];

  kintone.events.on(events, (event) => {
    // なにも選択されていなかった場合は「その他」フィールドを表示しない
    const option = event.record.オプション.value;
    if (option.length === 0) {
      kintone.app.record.setFieldShown("その他", false);
    }

    // 「その他」が選択された場合は「その他」フィールドを表示する
    option.forEach((element) => {
      if (element === "その他") {
        kintone.app.record.setFieldShown("その他", true);
      } else {
        kintone.app.record.setFieldShown("その他", false);
      }
    });

    return event;
  });
})();
