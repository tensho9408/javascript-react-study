/**
 * 
 * テンプレート文字列
 */

const name = "hello";
const age = 27;

// [私の名前はhelloです。年齢は28歳です。]

// 従来の方法
const message = "私の名前は" + name + "です。年齢は" + age + "です。"
console.log(message)

// テンプレート文字列
const message2 = `Tenmplat文字列: 私の名前は${name}です。年齢は${age}です。`;
console.log(message2)
