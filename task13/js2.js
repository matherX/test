function ter(){
    var a = document.getElementById("monitor").value;
    document.getElementById("count").value = a;
}
function allot(){
    var a = document.getElementById("monitor").value;
    document.getElementById("count").value = a;
    var killer= parseInt(a / 3);
    var civilian = a -killer;
    if(a<=18&&a>=4){
        $("#p1").text(killer);
        $("#p2").text(civilian);
    }
}
function off() {
    var a = document.getElementById("count").value;
    document.getElementById("monitor").value = a;
    ter();
    if(a<=18&&a>=4){
        $("#p1").text(killer);
        $("#p2").text(civilian);
    }
    else if(a<4){
        alert("人数过少，无法开始游戏")
    }
    else{
        alert("人数过多，请设置正确玩家数")
    }
}
function slide(){
    ter();
}
function plus(){
    ter();
    var a = document.getElementById("monitor").value--;
    document.getElementById("count").value = a--;
}
function subtract(){
    ter();
    var a = document.getElementById("monitor").value++;
    document.getElementById("count").value = a++;
}
function put() {
    var q = document.getElementById("word1").value;
    var w = document.getElementById("word2").value;
    if(q!=="" && w!==""){
        var a=document.getElementById("count").value;
        var killer = parseInt(a / 3);
        var civilian = a - killer;
        $("#p1").text(killer);
        $("#p2").text(civilian);
        var kiarr = new Array(killer).fill('杀手'); //动态生成杀手数组
        var ciarr = new Array(civilian).fill('平民'); //动态生成平民数组
        var arr = kiarr.concat(ciarr); //杀手+ 平民   生成新数组
        if(a<=18 && a>=4){
            function shuffle(arr){
                var len = arr.length;
                for(var i=0; i<len; i++){
                    var idx = Math.floor(Math.random() * (len - i));
                    var temp = arr[idx];
                    arr[idx] = arr[len - i -1];
                    arr[len - i -1] =temp;
                }
                return arr;
            }
            var res = new Array("");
            for(var i = 0; i < 1; i++){
                var sorted = shuffle(arr.slice(0));
                sorted.forEach(function(o,i){
                    res[i]= o;
                });
            }
            var sen = JSON.stringify(res);
            sessionStorage.res = sen;
            sessionStorage.setItem('word1',q);
            sessionStorage.setItem('word2',w);
        }
        location.href="js2.3.html"
    }
    else{
        alert("设置十个字以内的词组");
    }
}