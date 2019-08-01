//原生ajax写法
// var oPut = document.getElementsByTagName("input");
// var oMsg = document.getElementById("msg");
// var oBtn = document.getElementById("btn");
// var timer = null;
// oBtn.onclick = function(event){
//     event.preventDefault();
//     var name = oPut[0].value;
//     var pwd = oPut[1].value;
//     var data = "name=" + name + "&pwd=" + pwd;
//     //ajax的构造函数
//     var xhr = new XMLHttpRequest;
//     //端口返回的值
//     xhr.onreadystatechange = function(){
//         //端口连接状况
//         if(xhr.readyState == 4 && xhr.status == 200){
//             //转换接收数据的数据类型
//             var resdata = JSON.parse(xhr.responseText);
//             //判断上传的数据是非符合要求
//             if(resdata.code === 0){
//                 window.location.href = "http://dev.admin.carrots.ptteng.com/";
//             }else{//传值不通过赋值显示原因
//                 clearInterval(timer);
//                 oMsg.innerHTML = resdata.message;
//                 timer = setTimeout(function(){
//                     oMsg.innerHTML = "";
//                 },3000)
//             }
//         }
//     }
//     //向接口发送请求（1：“POST”请求方式  2：“***。url”请求接口。  3：true：异步请求）
//     xhr.open('POST','/carrots-admin-ajax/a/login',true);
//     //POST方式发送form表单，添加头部信息。
//     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
//     //数据发送到端口
//     xhr.send(data);
// }

//jquery ajax
$(function(){
    $("#btn").click(function(){
        // var name = oPut[0].value;
        // var pwd = oPut[1].value;
        // var datum = "name=" + name + "&pwd=" + pwd;
        var timer = null;
        $.ajax({
            type: "POST",  //请求的方式
            url:"/carrots-admin-ajax/a/login", //请求地址
            contentType: "application/x-www-form-urlencoded",//请求的内容类型
            data: $("form").serializeArray(),//提交表单信息
            success: function(data){//返回的数据
                var resdata = JSON.parse(data);
                if(resdata.code === 0){
                    window.location.href = "http://dev.admin.carrots.ptteng.com/";
                }else{
                    clearInterval(timer);
                    $("#msg").text(resdata.message);
                    timer = setTimeout(function(){
                        $("#msg").text("");
                    },3000);
                }
            },
            error: function(requset){
                alert("错了")
            }
        });
    });
});


//IE10+ jQuery.ajax() & FormData
// $("form").on("submit", function() {
//     var timer = null;
//     $.ajax({
//         type: 'POST',
//         url: '/carrots-admin-ajax/a/login',
//         data: $('#login').serialize(),
//         dataType: 'json',
//         success: function(data) {
//             console.log(data);
//             if (data.code === 0) {
//                 window.location.href = "http://dev.admin.carrots.ptteng.com/";
//             } else {
//                $('#msg').html(data.message);
//                 timer = setTimeout(function() {
//                     $('#msg').html('');
//                 }, 3000)
//             }
//         }
//     })
//     return false;//阻止表单默认提交行为
// })