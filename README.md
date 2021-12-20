# Add_DirectLink_TagArtWork
pixivで表示される「人気のイラスト」に表示されている作品を直接開く機能を追加。

pixiv内で右クリックし、コンテキストメニューから以下の順でメニューを選んで実行。  
tampermonkey＞Add DirectLink to TagArtWork  
hrefの書き換えだけ実行します。  
以下いずれかの別タブで開く操作で直接作品ページが開くようになります。  

- マウスホイールクリック
- Ctrlを押しながらクリック
- 右クリックしコンテキストメニュー「新しいタブで画像を開く」

## 導入方法
## tampermonkeyVer
1. 拡張機能「[tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)」をchromeにインストール
1. [tampermonkey用のコードをインストール](https://yotsura.github.io/Add_DirectLink_TagArtWork/Add_DirectLink_TagArtWork.user.js)

## tampermonkeyなしver
1. [Githubのページ](https://github.com/Yotsura/Add_DirectLink_TagArtWork)、Codeボタン → Download Zip でDLして解凍
1. Chrome拡張機能管理画面に移動（Chrome検索窓に「chrome://extensions/」を入力してEnter）
1. 「パッケージ化されていない拡張機能を読み込む」をクリック
1. 解凍したフォルダ内の「addContextMenu_chrome」フォルダを選択して追加完了