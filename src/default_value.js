/**
 * 
 * デフォルト値
 */

// 変数="初期値"を指定可能
const sayHell = (name = "ゲスト") => console.log(`こんにちは! ${name}さん！`);
//sayHell("tensho");
// 引数がない場合出力がunderfinedになる
sayHell(); 



