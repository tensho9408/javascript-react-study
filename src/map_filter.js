/**
 * mapやfilterを使った配列の処理
 * 
 */


const nameArr = ["a", "b", "c"];
// 従来のfor文
for (let index = 0; index < nameArr.length; index++) {
    console.log(index, nameArr[index])
}

// mapメソッドは関数を呼び出すことができる
// pythonでいうmap関数と同じで、指定した引数にシーケンの要素を一個一個取り出し
// それを関数の引数に渡す
const nameArr2 = nameArr.map((name)=>{
    console.log(name);
});

// filter条件をつき加えて配列の要素取り出す
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
    return num % 2 ===1; 
});

console.log(newNumArr)

nameArr.map((name) => console.log(`${name}です。`));
nameArr.map((name, index) => console.log(`${index}番目の${name}です。`));

const newNameArr = nameArr.map((name) => {
    if (name === "a") {
        return name;
    }
    return `${name}さん`;
    
});

console.log(newNameArr)
