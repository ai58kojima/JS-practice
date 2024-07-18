//▼2024/7/18 「クラス」
test("Classの定義", () => {
  //自分でクラスを定義して、メソッド定義をして呼び出してみる
  class Tv {
    constructor(title, genre) {
      this.title = title;
      this.genre = genre;
    }
    //各テレビ番組のタイトルとジャンルが表示されます。
    showDetails() {
      return `Title: ${this.title}, Genre: ${this.genre}`;
    }
  }
  const Tv1 = new Tv("kingdom", "anime");
  const Tv2 = new Tv("onepice", "anime");

  expect(Tv1 === Tv2).toStrictEqual(false);
  expect(Tv1 instanceof Tv).toStrictEqual(true);

  expect(Tv1.title).toStrictEqual("kingdom");
  expect(Tv2.genre).toStrictEqual("anime");

  expect(Tv1.showDetails()).toStrictEqual("Title: kingdom, Genre: anime");
  expect(Tv2.showDetails()).toStrictEqual("Title: onepice, Genre: anime");
});
//▲
