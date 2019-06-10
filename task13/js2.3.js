var ben = sessionStorage.res;
var net = JSON.parse(ben);
var q = sessionStorage.getItem("word1");
var w = sessionStorage.getItem("word2");
var i = 0.5;
function allot(){
    var o= Math.floor(i + 1);
    var a= Math.floor(i + 2);
    if(i <= net.length - 1){
        if(Number.isInteger(i) === true){
            $('#li').text(o);
            $('.self').text("查看" + o + "号身份");
            $('li>p').hide();
            $(".logo14").show();
        }
        else{
            $(".logo14").hide();
            $('li>p').show();
            if(net[o - 1].match("平民")){
                $(".role").text("角色: 平民");
                $(".char").text("词组:" +  q);
            }
            else{
                $(".role").text("角色：杀手");
                $(".char").text("词组:" +  w);
            }
            $('.self').text("隐藏并传递给" + a + "号");
        }
    }
    else if(i = net.length){
        $(".logo14").hide();
        $('li>p').show();
        $(".role").text("角色: " + net[net.length - 1]);
        if(net[net.length - 1].match("平民")){
            $(".char").text("词组:" +  q);
        }
        else{
            $(".char").text("词组:" +  w);
        }
        $('.self').text("法官查看");
    }
    else{
        location.href="js2.4.html";
    }
    i+=0.5;
}