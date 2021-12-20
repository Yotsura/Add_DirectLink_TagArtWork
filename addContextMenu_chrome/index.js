window.onload = function () {
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