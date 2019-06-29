var ben = sessionStorage.res;//读取之前页面保存的字符串
var net = JSON.parse(ben);//字符串转化数组
var q = sessionStorage.getItem("word1");//读取平民关键词
var w = sessionStorage.getItem("word2");//读取杀手关键词
var i = 0.5;
function allot(){//点击事件
    var o= Math.floor(i + 1);//申明变量o等于（i + 1）结果向下取整，省略余数
    var a= Math.floor(i + 2);//申明变量o等于（i + 2）结果向下取整，省略余数
    if(i <= net.length - 1){//判断i是否小于数组net-1的长度
        if(Number.isInteger(i) === true){//判断是否为正数，为正数时显卡片示反面
            $('#li').text(o);//改变卡片的序列号
            $('.self').text("查看" + o + "号身份");//改变按钮下一步的提示信息
            $('li>p').hide();//隐藏卡片正面
            $(".logo14").show();//显示卡片反面
        }
        else{//i不为整数试输出，显示卡片发面
            $(".logo14").hide();//影藏反面
            $('li>p').show();//显正面
            if(net[o - 1].match("平民")){//判断玩家角色是否为平民
                $(".role").text("角色: 平民");//改变角色为平民
                $(".char").text("词组: " +  q);//改变平民词组
            }
            else{//角色不为平民是输出
                $(".role").text("角色: 杀手");//改变较色为杀手
                $(".char").text("词组: " +  w);//改变杀手词组
            }
            $('.self').text("隐藏并传递给" + a + "号");//改变按钮下一步的提示信息数字大于身份卡的数字
        }
    }
    else if(i == net.length - 0.5){//i=net数组长度-0.5时输出（i每次增加0.5，i最后的值为net数组的长度减0.5）
        $(".logo14").hide();//影藏卡片方面
        $('li>p').show();//显示卡片正面
        $(".role").text("角色: " + net[net.length - 1]);//改变角色身份
        if(net[net.length - 1].match("平民")){//判断角色身份并添加相应的词组
            $(".char").text("词组:" +  q);
        }
        else{
            $(".char").text("词组:" +  w);
        }
        $('.self').text("法官查看");//改变下一步提示信息为“法官查看”
    }
    else{//判断i不等于小于net的长度则输出
        location.href="13.2.html";//跳转下一个页面。
        var res = JSON.stringify(net);
        sessionStorage.net = res;
    }
    i+=0.5;
}