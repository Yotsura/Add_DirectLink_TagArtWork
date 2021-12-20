chrome.runtime.onInstalled.addListener(function() {
  const parent = chrome.contextMenus.create({
    id: "pixivFunc",
    title: "pixiv拡張機能",
    contexts: ["all"],
  });
  chrome.contextMenus.create({
    parentId: parent,
    id: "searchPiviv",
    title: "選択文字列をpixivで検索する。",
    contexts: ["all"],
  });
  chrome.contextMenus.create({
    parentId: parent,
    id: "addDirectLink",
    title: "「人気のタグ」リンク書換",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "searchPiviv":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: SearchPixiv,
      });
      break;

    case "addDirectLink":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: AddDirectLink,
      });
      break;
  }
});

function SearchPixiv() {
  console.log("pixivで検索します。");
  const selectedText = window.getSelection().toString();
  if(selectedText==""){
    alert('文字列の取得に失敗しました。');
  } else{
    console.log(selectedText);
    open('https://www.pixiv.net/tags/' + selectedText);
  }
}

function AddDirectLink() {
  console.log('「人気のタグ」エリアのhref置換を試みます。');
	const allTagimgs = document.getElementsByClassName('gtm-toppage-tag-popular-tag-illustration');
	console.log('取得できた要素数：'+allTagimgs.length);
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
}