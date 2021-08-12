// クリック関数を作成
const onClickAdd = () => {
    // テキストボックの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // divタグを作成し、クラス名を指定した後、テキスト内容を格納する
    const div =  document.createElement("div");
    div.className = "list-row"
    div.innerText = inputText;
    
    // listタグを作成し、クラス名を指定する
    const li = document.createElement("li"); 
    li.className = "list-task" 

    // button要素を追加
    const down_button = document.createElement("button");
    down_button.innerText = "Down";
    div.appendChild(down_button);
    const delete_button = document.createElement("button");
    delete_button.innerText = "Delete";
    div.appendChild(delete_button);

    // Taskリストの削除ボタンから要素を削除する
    delete_button.addEventListener("click", () => {
        const deleteTarget = document.querySelector(".list-row").parentNode;
        deleteFromTaskList(deleteTarget)
       
    });

    // Taskリストの完了ボタンから要素を削除する
    down_button.addEventListener("click", () => {
        const downTarget = document.querySelector(".list-row").parentNode;
        deleteFromTaskList(downTarget); 
        // 完了したタスクリストをを完了リストに移動させる
        const addTarget = downTarget
        // Todo内容を取得
        const text = addTarget.firstElementChild.innerText[0];
        // li以下のコンテンツを初期化
        addTarget.textContent = null;
        // div要素を追加する
        const div = document.createElement("div");
        div.className = "list-row";
        div.innerText = text;
        // buttonを追加
        const back_button = document.createElement("button");
        back_button.innerText = "back"
        // div > button, li > divを追加
        div.appendChild(back_button);
        li.appendChild(div); 
        // 取得したテキストと追加したボタン要素のリストをまとめてDownリストに移動
        document.querySelector("#down").appendChild(li);
        
        
    // backボタンをクッリクしイベントハンドラーを起動
    back_button.addEventListener("click", () => {
        const backTarget = document.querySelector(".list-row").parentNode;
        // li>div以下のテキストを抽出
        const textFromDown = backTarget.firstElementChild.innerText[0];
        // li以下のテキストコンテンツを初期化
        backTarget.textContent = null; 
        // divタグを作成しテキストを格納
        const div_down = document.createElement("div");
        div_down.className = "list-row";
        div_down.innerText = textFromDown;
        // div>buttonの子要素を追加
        div_down.appendChild(down_button);
        div_down.appendChild(delete_button);
        // li>divの要素を追加
        li.appendChild(div_down);
        // 追加したliの親要素をTaskリストに移動
        document.querySelector("#task").appendChild(li);
        //
    })

        // addTarget.removeChild(document.querySelector(".list-row"));
        
        // document.querySelector("#down").appendChild(addTarget);
    }); 


    // Taskリスト削除の関数を作成
    const deleteFromTaskList = (target) => {
        document.querySelector("#task").removeChild(target);
    };
    

    // li > div, ul > li　の親要素と子要素を追加する
    li.appendChild(div);
    if (inputText.length > 0 ) {
        document.getElementById("task").appendChild(li);
    } else {
        false
    };

}


   



// htmlで指定したid名から要素を取得する
// 取得した要素に対してイベントを発生させ, クリックタイプで関数を呼び出す
// DOMContenLoadedはhtmlの中身を最後まで読み込んでから関数を呼び出し,要素を取得しにいく
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add-button").addEventListener("click", () => onClickAdd())
});