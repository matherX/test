var ben = sessionStorage.res;//读取之前页面保存的字符串
var net = JSON.parse(ben);//字符串转化数组
// $(document).ready(function(){//JQUERY的页面加载完成后直接执行的函数事件
//     $(".box").hide();//隐藏所有盒子
//     for(var i=0;i<net.length;i++){//循环遍历所有盒子显示与角色相同数量的盒子
//         $(".box:eq("+i+")").show();//显示盒子
//         $(".role").eq(i).text(net[i]);//改变盒子的文字（角色身份）
//         $(".affair").hide();//影藏下方面图片
//     }
//     $(".box").click(function(){
//         for(let a=0;a<net.length;a++){
//             $(this).find(".affair").show();
//             $(this).siblings().find(".affair").hide();
//         }
//     });
//     $(".logo6").click(function(){
//         var mymessage = confirm("结束本轮游戏？");
//         if(mymessage==true){   
//             location.href = "13.1.html" 
//         }
//     });
// });
// var dot = 1;
// function star(){
//     if(dot == 1){
//         location.href="js2.4.html"
//     }
//     else if(dot > 1){
//         location.heref = "js2.4.html"
//     }
//     dot++
// }
var fsm = new StateMachine({
    init:'kill',
    transitions:[
        {name: 'one' , from: 'kill' , to: 'sketch' },
        {name: 'second' , from: 'sketch' , to: 'total' },
        {name: 'thirdly' , from: 'total' , to: 'vote' },
        {name: 'finally' , from: 'vote' , to: 'kill' }
    ]
});

$(document).ready(function(){
    $(".fis").click(function(){
        // if(fsm.state == "kill"){
        //     $(".fis").css("background-color","#35b788");
        //     $(".fis").children("span").css("border-right","22px solid #35b788")
        //     fsm.fisrt
        // }
        // else{
        //     alert("现在是白天，杀手不能杀人")
        // }
        // console.log(fsm.state);
        switch(fsm.state){
            case "kill":$(".fis").css("background-color","#35b788");
            $(".fis").children("span").css("border-right","22px solid #35b788");
            fsm.one();
            break;
            default: alert("天亮了，杀手无法杀人");
        }
    });
    $(".second").click(function(){
        if(fsm.state == "sketch"){
            $(".second").css("background-color","#35b788");
            $(".second").children("span").css("border-right","22px solid #35b788");
            fsm.second();
        }
        else{
            alert("亡灵发言完毕，请进行下一步操作")
        }
    });
    $(".thirdly").click(function(){
        if(fsm.state =="total"){
            $(".thirdly").css("background-color","#35b788");
            $(".thirdly").children("span").css("border-right","22px solid #35b788");
            fsm.thirdly();
        }
        else{
            alert("发言完毕，请进行下一步操作")
        }
    });
    $(".finally").click(function(){
        if(fsm.state == "vote"){
            $(".finally").css("background-color","#35b788");
            $(".finally").children("span").css("border-right","22px solid #35b788");
            fsm.finally();
        }
        else{
            alert("本轮结束");
        }
    });
});