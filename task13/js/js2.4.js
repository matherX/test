var net = JSON.parse(sessionStorage.net);//获取net的字符串对象，并转化为数组
var order = sessionStorage.getItem("order");//获取被点击的盒子序号
var verdict = JSON.parse(sessionStorage.getItem("verdict"));//获取状态当前的字符串并转化为对象
var day = Number(sessionStorage.getItem("day"));//获取杀手杀人信息
var recore = JSON.parse(sessionStorage.getItem("recore"));
console.log(typeof day)
$(document).ready(function(){//JQUERY的页面加载完成后直接执行的函数事件
    $(".box").hide();//隐藏所有盒子
    for(let i=0;i<net.length;i++){//循环遍历所有盒子显示与角色相同数量的盒子
        $(".box:eq("+i+")").show();//显示盒子
        $(".role").eq(i).text(net[i].name);//改变盒子的文字（角色身份）
        $(".affair").hide();//隐藏小刀图标
    };
    var kiarr = 0, ciarr = 0;
    for(let i=0;i<net.length;i++){//循环，改变被杀死玩家盒子的颜色
        if(net[i].vause !== " "){//改变死亡玩家盒子的颜色
            $(".box").eq(i).find(".role").css("background-color","#82af9b");
        }
        else{//计算或者的平明及杀手玩家的数量
            if(net[i].name == "平民"){
                kiarr++;
            }
            else if(net[i].name == "杀手"){
                ciarr++;
            }
        }
        sessionStorage.setItem("kiarr",kiarr);//上传存活平民数
        sessionStorage.setItem("ciarr",ciarr);//上传存活杀手数
    }
    if(kiarr == ciarr || ciarr == 0){//判断游戏是否需要进行下去
        location.href="13.3.html"
    }
    if(verdict.kill == false){
        $(".mebtn").click(function(){//法官台本的点击函数：效果仅生效的一次的跳转函数
            location.href="js2.4.html";
        });
    };
    for(var a=0;a<day;a++){//循环创建已经完成的的游戏天数盒子到页面
        var box = "<div class=\"rel\">\n"+
        "<p class=\"day1 f20 tc\">"+"第" + recore[a].day + "天"+"</p>\n"+
        "<div class=\"main_box1\">\n"+
        "<span class=\"main_box_angle abs\">"+"</span>\n"+
        "<ul class=\"main_box_right\">\n"+
        "<li class=\"f16 tc\">\n"+
        "<span class=\"logo16 brs50 abs\">"+"</span>\n"+
        "<div class=\"change rel\">\n"+
        "<span class=\"main_box_right_angle1 abs\">"+"</span>"+"杀手杀人\n"+
        "</div>\n"+
        "</li>\n"+
        "<span class=\"notes1\">"+recore[a].notesfrom+"</span>\n"+
        "<li class=\"f16 tc\">\n"+
        "<div class=\"change  rel\">\n"+
        "<span class=\"main_box_right_angle1 abs\">"+"</span>"+"亡灵发表遗言\n"+
        "</div>\n"+
        "</li>\n"+
        "<li class=\"f16 tc\">\n"+
        "<div class=\"change rel\">\n"+
        "<span class=\"main_box_right_angle1 abs\">"+"</span>"+"玩家依次发言\n"+
        "</div>\n"+
        "</li>\n"+
        "<li class=\"f16 tc\">\n"+
        "<span class=\"logo17 brs50 abs\">"+"</span>\n"+
        "<div class=\"change rel\">\n"+
        "<span class=\"main_box_right_angle1 abs\">"+"</span>"+"全民投票\n"+
        "</div>\n"+
        "</li>\n"+
        "<span class=\"notes1\">"+recore[a].notesend+"</span>\n"+
        "</ul>\n"+
        "<div>\n"+
        "<div>";
        $(".goal").before(box);//使用before在元素前面添加盒子
        $(".change").css("background-color","#35b788");
        $(".change").children("span").css("border-right","22px solid #35b788");
    }
    $(".main_box1").hide();//隐藏完成天数的游戏详情
    $(".day1").click(function(){//对之前的天数添加点击滑动隐藏显示的效果
        $(this).siblings(".main_box1").slideToggle();
    })
    $(".day").text("第" + recore[day].day + "天");//更改成最新天数
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
$(document).ready(function(){//自执行函数
    $(".fis").click(function(){//对杀人按钮创建点击函数
        switch(fsm.state){//判断语句，判断当前的状态
            case "kill"://当状态时kill时
                verdict.kill = true;//改变kill状态为真，表示状态已经被点击
                if(verdict.kill == true){//判断kill状态是否被点击
                    $(".fis").css("background-color","#35b788");
                    $(".fis").children("span").css("border-right","22px solid #35b788");
                }
                fsm.one();//状态转换
			    sessionStorage.setItem('verdict', JSON.stringify(verdict));//上传kill改变后的状态属性
                location.href="13.2.html";
            break;
            default: alert("天亮了，杀手无法杀人");
        }                                   
    });
    $(".second").click(function(){//创建亡灵遗言按钮
        switch(fsm.state){//判断状态
            case "sketch"://当状态为sketch
                $(".second").css("background-color","#35b788");//改变按钮颜色
                $(".second").children("span").css("border-right","22px solid #35b788");
                fsm.second();
                verdict.sketch = true;
                sessionStorage.setItem('verdict', JSON.stringify(verdict));
                alert("请亡灵发表遗言");
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
                alert("请玩家一次发言，推测隐藏杀手");
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
            default: alert("请按照游戏流程进行，开始下一步操作");;
        }
    });
});
$(function() {//自执行函数
    if(verdict.vote == true || verdict.kill == true){//判断杀人与投票按钮是否是被点击过
        $(".box").click(function(){//设置玩家盒子的点击事件
            $(this).find(".affair").fadeTo("200",1);//通过$(this)返回父级，.find查找子级盒子并显
            $(this).siblings().find(".affair").fadeOut("50",0);//设置box盒子内的子级（小刀图片）在点击显示后查找兄弟同级的标签进行隐藏
            order = $(".box").index(this);//对order变量赋值（返回box的点击函数用index返回元素相对于其他元素的位置）
            sessionStorage.setItem("order",order);//被点击盒子的序列号上传到浏览器      
        });
        $(".mebtn").click(function(){//跳转函数
            if(order !== null){//判断是否选中玩家
                if(net[order].vause == " "){//判断玩家是否存活
                    if($(".deed").text() == "杀手杀人" && net[order].name == "平民"){//判断是否为杀手杀人时间以及环节内操作是否正确
                        notes = parseFloat(order) + 1 + "号被杀手杀死，真实身份是" + net[order].name;//创建死亡玩家信息
                        if(recore[day].notesfrom == " "){//有问题想要的效果：判断杀手杀人的记录信息是否为空，为空才能杀人，如果有杀人信息，当天杀手不能再次杀人
                            // sessionStorage.setItem("notes1",notes1);//上传死亡玩家信息
                            var notes = parseFloat(order) + 1 + "号被杀后杀死，真实身份是" + net[order].name;//创建死亡玩家信息
                            net[order].vause = "killde";//改变被杀玩家状态
                            location.href="js2.4.html";
                            recore[day].notesfrom = notes;
                            sessionStorage.setItem("recore",JSON.stringify(recore));
                        }
                        else{
                            alert("杀手每局只能杀死一位玩家，请遵守游戏规则")
                        }
                        console.log($(".notes").text() == "")
                    }
                    else if($(".deed").text() == "投票"){//判断是否全员投票环节，投票后直接重置状态机并开始下一天，
                        var notesend = parseFloat(order) + 1 + "号被玩家投死，真实身份是" + net[order].name;//创建死亡玩家信息
                        net[order].vause = "vote";
                        location.href="js2.4.html";
                        recore[day].notesend = notesend;
                        sessionStorage.setItem("recore",JSON.stringify(recore));
                        //判断状态机是否循环完毕
                        verdict.kill = false; verdict.sketch = false; verdict.total = false; verdict.vote = false;
                        sessionStorage.setItem('verdict', JSON.stringify(verdict));//重置状态机上传浏览器
                        day++//在状态机循环技术后，怎么加游戏天数
                        sessionStorage.setItem("day",day)//游戏天数上传浏览器
                    }
                    else{
                        alert("杀手无法自杀");
                    }
                    sessionStorage.removeItem("order");
                    sessionStorage.setItem("net", JSON.stringify(net));//上传到浏览器中的数组，改变死亡玩家状态
                    sessionStorage.setItem("recore",JSON.stringify(recore));
                }
                else{
                    alert("该玩家已死亡，请重新选择")
                }
            }
            else{
                alert("请选择想要踢出局的玩家")
            }
        });
        if(verdict.kill == true){//判断现在杀人按钮是否被点击时
            fsm.one();//状态切换
            $(".fis").css("background-color","#35b788");//改变杀人按钮的颜色
            $(".fis").children("span").css("border-right","22px solid #35b788");
            $(".deed").text("杀手杀人");//改变杀人页面的头部名称
            $(".black").text("杀手请睁眼，杀手请选择要杀的对象");
            $(".white").text("点击下方玩家头像，对被杀玩家进行标记");
            $(".notes").eq(0).css("display","block");//在杀人按钮下方显示杀手操作信息
            $(".notes").eq(0).text(recore[day].notesfrom);//记录杀人的行为
        }
        if(verdict.vote == true){//判断现在投票按钮是否被点击时，为真改变页面提示文字
            $(".deed").text("投票");
            $(".black").text("发言讨论结束，大家请投票");
            $(".white").text("点击得票数最多人的头像")
            $(".notes").eq(1).css("display","block");//在杀人按钮下方显示杀手操作信息
            $(".notes").eq(1).text(recore[day].notesend);//记录杀人的行为
        }
        $(".mebtn").text("确定");//改变玩家身份页面的最下方的橘色按钮文字0
    }
});
$(".btn1:first-child").click(function(){//提前结束游戏的按钮
    if(confirm("您确定结束本轮游戏吗")){
        location.href="js2.2.html";
    }
})