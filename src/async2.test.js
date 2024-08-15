//▼2024/08/15 「非同期処理と例外処理~」
// 1)Promiseの練習 (resolve, reject) を呼び出す
test("Promiseの成功例", () => {
  const promise = new Promise((resolve, reject) => {
    resolve(123);
  });
  return expect(promise).resolves.toBe(123);
});

test("Promiseの失敗例", () => {
  const promise = new Promise((resolve, reject) => {
    reject(456);
  });
  return expect(promise).rejects.toBe(456);
});

// 2)Promiseの中でthrow Errorを投げて、rejectの処理と同等になることを確認する
test("Promiseの例外", () => {
  function throwPromise() {
    return new Promise(() => {
      throw new Error("例外が発生しました");
    });
  }
  return expect(throwPromise()).rejects.toThrow("例外が発生しました");
});

// 3)Promise.then, Promise.catchメソッドを書いて練習してみる
test("Promiseの例外", () => {
  function throwPromise() {
    return new Promise(() => {
      throw new Error("例外が発生しました");
    });
  }
  throwPromise().catch((error) => {
    expect(error.message).toBe("例外が発生しました");
  });
});
//▲

//▼2024/08/22 「Promiseと例外~」
test("Promiseの例外", () => {});
//▲
