// ｊQueryを書いていきます
// ゴミ箱アイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
// 完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

// class をつけるのは調べる。.addClass();

// STEP 1
//  イベントボタンを取得*
// イベント「クリックされたら」を追加*
// インプットボックスから値（inputText)を取ってくる .val()*
// 
// 画面に表示するために未完了と完了のLiを作る

// Liに ３inputTextを追加*
// 削除ボタンを作成、アイコンを入れる、クラスを追加*
// 完了ボタンを作成、アイコンを入れる、クラスを追加*
// ボタンを囲むdivをつくるbuttons*
// butoons divの中に 削除･完了アイコンを入れる*
// buttons div にクラスを追加する*
// buttons divをliにいれる*
// liをのnot-yetUl に追加する。*

// step2
// 削除ボタンクリックすると、リストが消える。*
// 完了ボタンを押すと、DONE ULに移動する*

// すてっぷ３
// インプットテキストが空だったら処理を中断する*
// 完了ulのIDをチェックしてDONEだったら処理を中断する*
// テキストボックスをリセットする*

$(function(){

    // 追加ボタンを取得してイベントを追加する
    $('#add').click(function(){

    // インプットボックスから値（inputText)を取ってくる .val()
        let inputTask = $('#task').val();

        
        if(inputTask == ''){
            return;
        }

    // liタグを作成
        let li = $('<li>');
        
    
    // Liに 変数inputTextを追加
        li.append(inputTask);
    
    // 画面に表示するために未完了Liを作る
        // $('#not-yet').prepend(li);
        // not-yet にliを追加してください。主役はNot-yetになる。 
    // アニメーションを追加
        li.prependTo($('#not-yet')).hide().fadeIn('slow');
    // Liを Not-yetに 追加してください。主役はリスト 
    // これをすると、追加されるliのみアニメーションが追加される。

    
    

    // 削除ボタンを作成、アイコンを入れる、クラスを追加
        let removeBtn = $('<button>');
        removeBtn.append(removeIcon);
        removeBtn.addClass('remove');
    

    // 完了ボタンを作成、アイコンを入れる、クラスを追加
        let doneBtn = $('<button>');
        doneBtn.append(doneIcon);
        doneBtn.addClass('done');

    // ボタンを囲むdivをつくるbuttons
        let buttons = $('<div>');
        buttons.addClass('buttons');
        buttons.append(removeBtn);
        buttons.append(doneBtn);

    // buttons div にクラスを追加する
        li.append(buttons);

    // 削除ボタンクリックすると、リストが消える。???この関数をを別で書きだせる？
        removeBtn.click(function(){
            
            removeBtn.closest('li').remove();

        });

    // 完了ボタンを押すと、DONE ULに移動する処理を書く
        // 完了タスクのLiを作る
        

        doneBtn.click(function(){

            let doneTask = doneBtn.closest('li');

            let id = $(doneTask).parent().attr('id');

                if( id == "done"){
                    return;
                }

            // $('#done').append(doneTask);
            doneTask.fadeOut('slow', function(){
                doneTask.appendTo($('#done')).fadeIn('slow');
            });
            
            
        });
        // インプットボックスをリセット
        $('#task').val('');

    });

    




});


// // animation add>>>show- hide- animation -show
    // // 表示→非表示→ふわっと表示
    
    
    // 完了たすくの時のアニメーション
    // task.fadeOut('slow', function() {
      // タスクを移動
    //   task.appendTo($('#done')).fadeIn('slow');    });