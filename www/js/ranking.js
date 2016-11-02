//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright © 2016年 NIFTY Corporation. All rights reserved.
//

// 「ランキングを見る」ボタン押下時の処理
function toRanking() {
    // データ取得
    checkRanking(); 
    // ランキング画面へ遷移
    window.location.href = "#ranking-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkRanking() {
    // **********【問題２】ランキングを表示しよう！**********

    // ******************************************************
}

/*
// テーブルにデータを設定
function setData(array) {
   var table = document.getElementById("rankingTable");
    for (i=0; i<array.length; i++) {
        // 名前の設定
        var name = table.rows[i].cells[1];
        name.innerHTML = array[i].name + "さん";
        // スコアの設定
        var score = table.rows[i].cells[2];
        score.innerHTML = array[i].score + "連打";
    }   
}*/







