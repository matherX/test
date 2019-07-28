var net = JSON.parse(sessionStorage.net);//获取net的字符串对象，并转化为数组
var recore = JSON.parse(sessionStorage.getItem("recore"));//获取游戏档案（记录游戏流程结果）
var kiarr = Number(sessionStorage.getItem("kiarr"));//获取平明数量
var ciarr = Number(sessionStorage.getItem("ciarr"));//获取杀手数量
var q = sessionStorage.getItem("word1");//读取平民关键词
var w = sessionStorage.getItem("word2");//读取杀手关键词
$(function(){//自执行函数
    if(kiarr>ciarr){//判断游戏结果（平民数量大于杀手数量）
        $(".result").text("平民胜利")
    }
    else{//否则就是杀手胜利
        $(".result").text("杀手胜利")
    }//find会从子级一直往下找子孙及知道找到下级指定的元素
    $(".key").find("li").eq(0).text("杀手" + ciarr + "人")//在页面输出游戏结束后杀手存活的数量
    $(".key").find("li").eq(1).text("平民" + kiarr + "人")//在页面输出游戏结束后平民存活的数量
    $(".describe").eq(0).text("杀手词汇：" + w);//杀手关键词
    $(".describe").eq(1).text("平民词汇：" + q);//平民关键词
    var live = 0,sky = 0;//用于记录杀手总量以及游戏循环天数的变量
    for(var a=0;a<recore.length;a++){//创建游戏结果详情盒子
        if(recore[a].notesfrom !== " "){//只输出有玩家操作的天数
            var column=//创建盒子
            "<div class=\"column pt10 pb30 plr10\">\n"+
            "<div class=\"box pb10\">\n"+
            "<p class=\"black f24 l\">"+"第"+(a + 1)+"天"+"</p>\n"+
            "</div>\n"+
            "<p class=\"f18 pb5\">"+"晚上：" + recore[a].notesfrom + "</p>\n"+
            "<p class=\"f18\">"+"白天："+ recore[a].notesend  + "</p>\n"
            "</div>";
            $(".content2").append(column);//用append对content2元素内创建盒子（append是在元素内部子级的最后方）
            sky++;
        }
    }
    for(var b=0;b<net.length;b++){//杀手总人数
        if(net[b].name == "杀手"){
            live++;
        }
    }
    $("h2").text("本轮游戏共抓出杀手"+(live - ciarr)+"人，共经历了"+sky+"个白天。");//游戏结果
})
$("button").click(function(){//再来一局的按钮
    location.href="js2.2.html"
})