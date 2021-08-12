/**
 * 
 * アロー関数
 */
//従来の関数

function func1(str) {
    return str;
}
const func2 = function(str) {
    return str; 
}
console.log(func1("func1です。"))


// アロー関数
const func3 = (str) => {
    return str; 
}

const func4 = str => {
    return str; 
}

console.log(func4("func4です。"))

// 処理が1行の場合はreturn省略できる
const func5 = (str) => str;

// return省略可能
const func6 = (num1, num2) => num1 + num2; 
console.log(func6(10,20))


