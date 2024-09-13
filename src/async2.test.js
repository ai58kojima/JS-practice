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
//0)状態が変化済のPromise
test("状態が変化済のPromise.resolve", () => {
  //成功
  const resolvedPromise = Promise.resolve("すでに成功");
  return expect(resolvedPromise).resolves.toBe("すでに成功");
});
test("状態が変化済のPromise.reject", () => {
  //失敗
  const rejectedPromise = Promise.reject("すでに失敗");
  return expect(rejectedPromise).rejects.toBe("すでに失敗");
});

// 1)Promise.resolve　を呼び出して動きを確認する
//    ∟Promise.resolveとは？…すぐに成功するPromiseを作るための方法。値を渡すこともできる。
test("Promise.resolveの練習", () => {
  return expect(Promise.resolve(123)).resolves.toBe(123);
});

// 2)Promise.resolve 1から初めてプロミスチェーンで10まで増やす。
test("Promise.resolveの練習", () => {
  const promise = Promise.resolve(1);
  const complete = promise
    .then((num) => {
      return num + 2; //3
    })
    .then((num) => {
      return num + 3; //6
    })
    .then((num) => {
      return num + 4; //10
    });
  return expect(complete).resolves.toBe(10);
});

// 3)Promise.reject を呼び出して動きを確認する
test("Promise.rejectの練習", () => {
  return expect(Promise.reject(new Error("エラー"))).rejects.toThrow("エラー");
});

// 4)Promise.rejectからcatchなどで動きを確認する
// Promise.rejectからプロミスチェーンを使って失敗状態のメソッドをチェーンする
test("Promise.rejectの練習", () => {
  const promise = Promise.reject(new Error("初期エラー"));
  const errorStep = promise
    .catch((error) => {
      console.log(error.message);
      return Promise.reject(new Error("次のエラー"));
    })
    .catch((error) => {
      console.log(error.message);
      return Promise.reject(new Error("最終エラー"));
    });

  return expect(errorStep).rejects.toThrow("最終エラー");
});
//▲

//▼2024/08/29 「[ES2018] Promiseチェーンの最後に処理を書く~」
test("逐次処理", () => {
  //逐次処理:複数の処理を順番に行うこと
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  const results = [];
  // Resource Aを取得する
  const req1 = dummyFetch("/resource/A")
    .then((response) => {
      results.push(response.body);
      // Resource Bを取得する
      return dummyFetch("/resource/B");
    })
    .then((response) => {
      results.push(response.body);
    })
    .then(() => {
      console.log(results);
    });
  // Resource Cを取得する
  const req2 = dummyFetch("/resource/C").then((response) => {
    results.push(response.body);
  });

  Promise.all([req1, req2]).then(function (values) {
    console.log(results); // => [ 'Response body of /resource/A','Response body of /resource/C','Response body of /resource/B' ]
  });
});

//逐次処理とpromise.all()の練習
test("逐次処理の練習", () => {
  //数字を10回まで順番にカウントしている。Math.random()分を順番に処理を実行している
  let promise = Promise.resolve(0);
  for (let i = 0; i < 10; i++) {
    promise = promise.then((num) => {
      const random = Math.random();
      const newNum = random + num;
      if (newNum > 1) {
        return num;
      } else {
        return newNum;
      }
    });
  }
  expect(promise).resolves.toBeLessThan(1);
});

test("promise.all()の練習", () => {
  //Promise.resolve(Math.random()) を10個用意する
  //その値をPromise.allで取り出してすべて合計すると１0以下になることを確認する
  const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(Promise.resolve(Number(Math.random())));
  }
  const total = Promise.all(promises).then((numbers) => {
    return numbers.reduce((sum, num) => {
      return sum + num;
    });
  });
  return expect(total).resolves.toBeLessThan(10);
});
//▲
