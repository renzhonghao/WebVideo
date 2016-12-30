/**
 * Created by Administrator on 2016/12/28.
 */
<!-- 这个方法切换视频时可能会卡住-->
//        function changeVideo(str) {
//            var myVideo=document.getElementById("myVideo");
//            var t=myVideo.outerHTML;
//            myVideo.paused;
//            myVideo.outerHTML=t.replace(/\s+src\s*=\s*\S+\s+/,' src="'+str+'"');
//        }
//onload="myVideo.focus()";
//改变video播放视频
function changeVideo(str){
    try{
        document.getElementById("myVideo").src=str;
    }catch(e){
        alert("加载视频失败");
    }
}
//获得当前选择的本地文件路径
function fileSelected() {
    var file = document.getElementById('fileToUpload').files[0];
    if (file) {
        var url = URL.createObjectURL(file);
        console.log(url);
        //alert(url);//读出的url是加密过的，浏览器可自动解析
        changeVideo(url);
    }
}

//得到键盘事件
function handleEvent(oEvent){
    //alert(oEvent.keyCode);
    if (oEvent.keyCode == 32)
    {
        playPause();
    }
    if(oEvent.keyCode==13){
        fu();
    }
    if(oEvent.keyCode==37){
        last();
    }
    if(oEvent.keyCode==39){
        next();
    }
}
//用来实现对当前video播放/暂停状态的切换
function playPause() {
    var myVideo = document.getElementById("myVideo");
    if (myVideo.paused){
        myVideo.play();
    }
    else{
        myVideo.pause();
    }
}
function fu(){
    //alert("fsdjl");
    var docElm = document.getElementById("myVideo");
//W3C
    if(docElm.requestFullscreen){
        docElm.requestFullscreen();
    }
//FireFox
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
//Chrome等
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
//IE11
    else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    }
    退出全屏
    if (docElm.exitFullscreen) {
        docElm.exitFullscreen();
    }
    else if (docElm.mozCancelFullScreen) {
        docElm.mozCancelFullScreen();
    }
    else if (docElm.webkitCancelFullScreen) {
        docElm.webkitCancelFullScreen();
    }
    else if (docElm.msExitFullscreen) {
        docElm.msExitFullscreen();
    }
}
//快进两秒
function next(){
    var video = document.getElementById("myVideo");
    video.currentTime+=2;
}
//后退两秒
function last(){
    var video = document.getElementById("myVideo");
    video.currentTime-=2;
}