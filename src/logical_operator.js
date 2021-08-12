/**
 * 
 * 論理演算子の本当の意味を理解 && ||
 */

const flag1 = true;
const flag2 = false;

// または
if (flag1 || flag2 ) {
    console.log("1か2はtrueになります");
}

// 且つ
if (flag1 && flag2 ) {
    console.log("1か2はtrueになります");
}


// ||本当の意味は左側がfalseなら右側を返す
const num = null;
const fee = num || "全額未設定です"; 
console.log(fee);

// &&本当の意味は左側がtrueならば右を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2); 




