/**
 * 分割代入
 * 
 * 構文は、配列から値を取り出して、
 * あるいはオブジェクトからプロパティを取り出して
 * 別個の変数に代入することを可能にする JavaScript の式です。
 */

const myProfile = {
    name: "tensho",
    age: 27, 
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);


const {name, age} = myProfile;
const messages2 = `${name}, ${age}`;
console.log(messages2);

// 配列
const myProfile2 = ["ten", 26];
const message3 = `${myProfile2[0]},${myProfile2[1]}`;
console.log(message3);

// 配列の場合分割代入(順番に要素を取り出す。イテラブル)
const [name2, age2] = myProfile2;
console.log(name2, age2)

