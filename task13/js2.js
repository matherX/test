function ter(){//获取人数值与滑动块相等绑定
    var a = document.getElementById("monitor").value;
    document.getElementById("count").value = a;
}
function allot(){//获取玩家人数点击设置玩家人数来分配杀手、平民比例
    var a = document.getElementById("monitor").value;
    document.getElementById("count").value = a;
    var killer= parseInt(a / 3);
    var civilian = a -killer;
    if(a<=18&&a>=4){
        $("#p1").text(killer);
        $("#p2").text(civilian);
    }
}
function off() {//改变input内容后触发（输入完成后鼠标点击复选框外任意处生效）
    var a = document.getElementById("count").value;
    document.getElementById("monitor").value = a;
    ter();
    if(a<=18&&a>=4){//判断玩家人数是否在4-18人，不满足条件弹出警示框
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
function slide(){//通过oninput（事件在输入是触发）绑定滑动块与人数框内的人数实时更新
    ter();
}
function plus(){//通过nonclick点击事件监听绑定的玩家人数与滑动块，改变玩家人数逐渐减少
    ter();
    var a = document.getElementById("monitor").value--;
    document.getElementById("count").value = a--;
}
function subtract(){//通过nonclick点击事件监听绑定的玩家人数与滑动块，改变玩家人数逐渐增加
    ter();
    var a = document.getElementById("monitor").value++;
    document.getElementById("count").value = a++;
}
function put() {//发牌按钮
    var q = document.getElementById("word1").value;//获取平民关词组（发现input内的文本信息只能用ID获取，类名获取时则为空）
    var w = document.getElementById("word2").value;//获取杀手词组（发现input内的文本信息只能用ID获取，类名获取时则为空）
    if(q!=="" && w!==""){//判断水民与杀手词组是否都不为空
        var a=document.getElementById("count").value;//获取玩家人数
        var u = $("#p1").text();//获取页面上杀手人数
        var l = $("#p2").text();//获取页面水民手人数
        if(a == Number(u) + Number(l)){//a等于水民+杀手的人数则为真（Number(u)字符串转化数字）
            var killer = parseInt(a / 3);//计算杀手人数
            var civilian = a - killer;//计算平民人数
            var kiarr = new Array(killer).fill('杀手'); //动态生成杀手数组
            var ciarr = new Array(civilian).fill('平民'); //动态生成平民数组
            var arr = kiarr.concat(ciarr); //杀手+ 平民   生成新数组
            if(a<=18 && a>=4){//判断玩家人数是否为4-18人
                function shuffle(arr){//洗牌函数
                    var len = arr.length;//对len赋值游戏玩家人数
                    for(var i=0; i<len; i++){//便利
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
                var sen = JSON.stringify(res);//通过洗牌后的玩家身份数组转化成字符串
                sessionStorage.res = sen;//转化后的字符串存入浏览器
                sessionStorage.setItem('word1',q);//存入平民词组
                sessionStorage.setItem('word2',w);//存入杀手词组
            }
            location.href="js2.3.html"//循环结束跳转到下一页面
        }
        else{
            alert("请设置杀手与水民的比例");
        }
    }
    else{//词组为空时弹出警示框
        alert("设置十个字以内的词组");
    }
}