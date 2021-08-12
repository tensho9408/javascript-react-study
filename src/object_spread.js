/**
 * 
 * スプレッド構文...
 */

//配列の展開, シーケンスの値を取り出す
const arr1 = [1, 2];
console.log(...arr1)

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1])
sumFunc(...arr1) 

// 展開の反対を一つにまとめる

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
console.log([...arr4, ...arr5]);

// 参照渡しで引き継いだデータを削除すると参照されたデータも同様に削除されてします
const arr7 = arr4; 
