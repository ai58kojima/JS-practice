//▼2024/7/18 「クラス」
test("Classの定義", () => {
  //自分でクラスを定義して、メソッド定義をして呼び出してみる
  class Tv {
    //constructorメソッド:初期化時に呼ばれる特殊なメソッド
    constructor(title, genre, publishYear) {
      this.title = title;
      this.genre = genre;
      this.publishYear = publishYear;
    }
    //各テレビ番組のタイトルとジャンルが表示されるメソッド作成
    showDetails() {
      return `Title: ${this.title}, Genre: ${this.genre}`;
    }
    //他の放送日を引数で受け取り、それと比べて新しい方を返すメソッド作成
    isNewerThan(other) {
      return this.publishYear > other.publishYear;
    }
    isNewerEqual2000() {
      return this.publishYear === 2000;
    }
  }
  //クラスのインスタンス化:new演算子でインスタンスであるオブジェクトを作成
  //クラス名は大文字ではじめる
  const Tv1 = new Tv("kingdom", "anime", 2010);
  const Tv2 = new Tv("onepice", "anime", 2001);

  expect(Tv1 === Tv2).toStrictEqual(false);
  expect(Tv1 instanceof Tv).toStrictEqual(true);

  expect(Tv1.title).toStrictEqual("kingdom");
  expect(Tv2.genre).toStrictEqual("anime");
  expect(Tv2.publishYear).toStrictEqual(2001);

  expect(Tv1.showDetails()).toStrictEqual("Title: kingdom, Genre: anime");
  expect(Tv2.showDetails()).toStrictEqual("Title: onepice, Genre: anime");
  expect(Tv1.isNewerThan(Tv2)).toStrictEqual(true);
  expect(Tv1.isNewerEqual2000()).toStrictEqual(false);
});
//▲

//▼2024/7/25 「クラスの継承」
//　プロトタイプメソッド:インスタンス間で共有されるメソッドのこと
//　静的メソッド：クラスをインスタンス化せずに利用できる→ staticメソッド(){}
test("クラスの継承", () => {
  //「継承」＝クラスの構造や機能を引き継いだ新しいクラスを定義すること
  //　 ∟クラスの継承を作って実際に呼び出してみる
  //  　 ∟クラス継承構造は自分(Me) → 母(Mother) → 祖母(Grandmother)
  //   　∟プロパティを作る→プロトタイプメソッドを作って動かしてみる
  class Grandmother {
    constructor() {
      this.name = "Sawako";
      this.food = "apple";
    }
    getFood() {
      return this.food;
    }
    getName() {
      return this.name;
    }
  }
  class Mother extends Grandmother {
    constructor() {
      super(); //`this`に触る前にsuper();を呼び出すと継承される
      this.name = "Seiko";
    }
  }
  class Me extends Mother {
    constructor() {
      super();
      this.name = "Ai";
      this.food = "banana";
    }
  }
  const grandmother = new Grandmother(); //const変数=newクラス();
  const mother = new Mother();
  const me = new Me();

  expect(grandmother.getFood()).toStrictEqual("apple");
  expect(mother.getFood()).toStrictEqual("apple");
  expect(me.getFood()).toStrictEqual("banana");
  expect(grandmother.getName()).toStrictEqual("Sawako");
  expect(mother.getName()).toStrictEqual("Seiko");
  expect(me.getName()).toStrictEqual("Ai");
});
//▲
