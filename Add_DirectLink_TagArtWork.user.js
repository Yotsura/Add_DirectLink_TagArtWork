// ==UserScript==
// @name         Add DirectLink to TagArtWork
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to add DirectLink to TagArtWork
// @author       Yotsura
// @match        https://www.pixiv.net*
// @icon         https://www.google.com/s2/favicons?domain=pixiv.net
// @grant        none
// @run-at context-menu
// ==/UserScript==

(function() {
    'use strict';
    const allTagimgs = document.getElementsByClassName('gtm-toppage-tag-popular-tag-illustration');
    for(let i = 0; i < allTagimgs.length; i++){
        let imgArea = allTagimgs[i];
        let workNum = imgArea.innerHTML.match(new RegExp(String.raw`/artworks/\d+`, 'u')); //IDっぽいところ取得
        if (workNum != null && workNum != ""){
            let link = 'https://www.pixiv.net' + workNum;
            console.log(link);
            imgArea.setAttribute('href',link);
            imgArea.setAttribute('target','_blank');
        }
    }
    alert('「人気のタグ」エリアのhrefを置換しました。\n以下いずれかの別タブで開く操作で直接作品ページが開くようになります。\n\n・マウスホイールクリック\n・Ctrlを押しながらクリック\n・右クリックしコンテキストメニュー「新しいタブで画像を開く」\n\nそのままクリックした場合は従来どおりタグに飛びます。');
})();
