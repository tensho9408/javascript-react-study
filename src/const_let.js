/**
 *
 *  const, let variable
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "len変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3)

// // constは上書きと再宣言が不可能
// // val3 = "const変数の上書き";

// // constはユーニーク変数と定義することができる
// // 謝って上書きや再宣言など意図しない結果を防ぐことが可能

const val4 = {
  name: "ten",
  age: 28
};

val4.name = "jak";
val4.address = "tokyo";
// console.log(val4)

// オブジェクトの中身のプロパティは変更可能

// リストを作成
const val5 = ["dog", "cat"];
val5[0] = "bird";
// pythonでいうappendメソッドと同じ
val5.push("monkey");
console.log(val5);
