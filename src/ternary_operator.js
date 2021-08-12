/**
 * 三項演算子
 * 
 */

// ある条件? 条件がtrueの時; 条件がfalseの時
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1)

// ３桁区切りの表示(int)
const num = 1300;
console.log(num.toLocaleString()); 

// 文字列を数値に型に変換してから３桁カンマ区切りを適用する
const strNum = "1300";
console.log(parseInt(strNum.toLocaleString()));
const intNum = parseInt(strNum)
console.log(intNum.toLocaleString());

const num1 =　strNum;
console.log(num1)
const formattedNum = typeof num1 === "number" ? num1.toLocaleString() : "数値を入力してください。"
console.log(formattedNum)


const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? "100を超えています"　: "許容範囲ないです";
};

console.log(checkSum(50, 60))