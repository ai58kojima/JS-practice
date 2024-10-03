import { sum, diff } from "./ex_module2.mjs";
import {
  double,
  isEven,
  remainder as remainderWithN,
} from "./modules/math.mjs"; // remainder変数をremainderWithNとして名前付インポート

// 名前付き import, export を練習してみる
// ・同一のファイル(.mjsファイル）
console.log(sum(5, 8)); //13
console.log(diff(5, 8)); //-3

// ・別フォルダのファイル (.mjsファイル）
console.log([1, 2, 3, 4, 5].map(double)); //何らかの処理を行い配列を返すメソッド
console.log([1, 2, 3, 4, 5].filter(isEven).map(double)); //2,4 → 4,8 //条件に合うものだけを取り出すメソッド

const remainder = (num) => {
  return remainderWithN(num, 2);
};
console.log(remainder(4)); //4%2= 2余0 //remainderWithN(5, 2)
console.log(remainder(7)); //7%2= 3余1
