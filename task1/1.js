var box = document.getElementsByClassName("box_lump");
function set() {
   for (var i=0; i<box.length; i++) {
       box[i].style.background = "#fea500";
   }
}
// 随机颜色获取
function colors() {
    var rgb;
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    rgb = '('+r+','+g+','+b+')';
    return rgb;
}
//随机获取九个盒子中的三个
function random(){
    set();
    var a=[];
    for(var i=0;i<3;i++){
        a[i]=Math.floor(Math.random() * box.length);
        if ( a[0]!=a[1] && a[0]!=a[2] && a[1]!=a[2] ){
            box[a[0]].style.background = 'rgb'+ colors();
            box[a[1]].style.background = 'rgb'+ colors();
            box[a[2]].style.background = 'rgb'+ colors();
        }
    }
}
var z;
function star(){
    clearInterval(z);//停止周期调用函数
    z = setInterval("random()", 800);
}
function stop(){
    clearInterval(z);//停止周期调用函数
    set();
}