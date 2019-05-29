// 申明变量box，通过类名获取元素（box_limp)的盒子
var box = document.getElementsByClassName("box_lump");
// 循环结束重置盒子颜色
function set() {
    // 便利数组内额所有盒子并改变颜色
   for (var i=0; i<box.length; i++) {
       box[i].style.background = "#fea500";
   }
}
// 随机获取颜色
function color() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var rgb = '('+r+','+g+','+b+')';
    return rgb;

}
// 随机获取九个盒子中的三个并赋予随机的颜色
function random(){
    set();
    var a=[];
    while (true){
        var isExists = false;
        // 获取box数组
        var random = parseInt( box.length * (Math.random()));
        // 判断当前随机数是否已经存在
        for (var i = 0; i < a.length; i++) {
            if (random === a[i]) {
                isExists = true;
                break;
            }
        }
        // 如果不存在，则添加进去
        if (!isExists)
            a.push(random);
        // 如果有3位随机数了，就跳出
        if (a.length === 3)
            break;
    }
    box[a[0]].style.background = 'rgb' + color();
    box[a[1]].style.background = 'rgb' + color();
    box[a[2]].style.background = 'rgb' + color();
}
var z;
function star(){
    clearInterval(z);//停止周期调用函数
    z = setInterval("random()", 1000);
}
function stop(){
    clearInterval(z);//停止周期调用函数
    set();
}