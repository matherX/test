var ben = sessionStorage.res;//读取之前页面保存的字符串
var net = JSON.parse(ben);//字符串转化数组
function star(){//跳转函数
    location.href="js2.4.html"
}
$(document).ready(function(){//JQUERY的页面加载完成后直接执行的函数事件
    $(".box").hide();//隐藏所有盒子
    for(var i=0;i<net.length;i++){//循环遍历所有盒子显示与角色相同数量的盒子
        $(".box:eq("+i+")").show();//显示盒子
        $(".role").eq(i).text(net[i].name);//改变盒子的文字（角色身份）
        $(".affair").hide();//影藏下方面图片
    }
});
var fsm = new StateMachine({//创建状态机
    init:'kill',//设置状态机的初始状态
    transitions:[//设置状态机需要的几种状态，开始状态与最后结束状态保持一致，形成闭环
        {name: 'one' , from: 'kill' , to: 'sketch' },//状态名，开始存状态和结束状态
        {name: 'second' , from: 'sketch' , to: 'total' },
        {name: 'thirdly' , from: 'total' , to: 'vote' },
        {name: 'finally' , from: 'vote' , to: 'kill' }
    ]
});
$(function() {//自执行函数
    if(verdict.kill == true || verdict.vote == true){//判断杀人与投票按钮是否是被点击过
        if(verdict.kill == true){//判断现在杀人按钮是否被点击时，为真改变页面提示文字
            fsm.one();//状态切换
            $(".fis").css("background-color","#35b788");
            $(".fis").children("span").css("border-right","22px solid #35b788");
            $("header").find("p").text("杀手杀人");
            $(".black").text("杀手请睁眼，杀手请选择要杀的对象");
            $(".white").text("点击下方玩家头像，对被杀玩家进行标记")
        }
        if(verdict.vote == true){//判断现在投票按钮是否被点击时，为真改变页面提示文字
            $("header").find("p").text("投票");
            $(".black").text("发言讨论结束，大家请投票");
            $(".white").text("点击得票数最多人的头像")
        }
        $(".box").click(function(){//设置玩家盒子的点击事件
            for(let a=0;a<net.length;a++){//便利所有显示的玩家盒子
                $(this).find(".affair").show();//
                $(this).siblings().find(".affair").hide();
            }
        });
        $(".mebtn").text("确定");
    }	
    if(verdict.kill == true && verdict.sketch == true && verdict.total == true && verdict.vote == true){

    }
});

console.log(fsm.state)
var verdict = JSON.parse(sessionStorage.getItem("verdict"));
console.log(verdict)
$(document).ready(function(){
    $(".fis").click(function(){
        switch(fsm.state){
            case "kill":
                verdict.kill = true;
                if(verdict.kill == true){
                    $(".fis").css("background-color","#35b788");
                    $(".fis").children("span").css("border-right","22px solid #35b788");
                }
                fsm.one();
			    sessionStorage.setItem('verdict', JSON.stringify(verdict));
                console.log(verdict.kill == true)
                location.href="13.2.html";
            break;
            default: alert("天亮了，杀手无法杀人");
        }
    });
    $(".second").click(function(){
        switch(fsm.state){
            case "sketch":
                $(".second").css("background-color","#35b788");
                $(".second").children("span").css("border-right","22px solid #35b788");
                fsm.second();
                verdict.sketch = true;
			    sessionStorage.setItem('verdict', JSON.stringify(verdict));
            break;
            default: alert("亡灵发言完毕，请进行下一步操作");
        }
    });
    $(".thirdly").click(function(){
        switch(fsm.state){
            case "total":
                $(".thirdly").css("background-color","#35b788");
                $(".thirdly").children("span").css("border-right","22px solid #35b788");
                fsm.thirdly();
                verdict.total = true;
			    sessionStorage.setItem('verdict', JSON.stringify(verdict));
            break;
            default: alert("发言完毕，请进行下一步操作");
        }
    });
    $(".finally").click(function(){
        switch(fsm.state){
            case "vote":
                $(".finally").css("background-color","#35b788");
                $(".finally").children("span").css("border-right","22px solid #35b788");
                fsm.finally();
                verdict.vote = true;
                sessionStorage.setItem('verdict', JSON.stringify(verdict));
                location.href="13.2.html";
            break;
            default: alert("本轮结束");;
        }
    });
});