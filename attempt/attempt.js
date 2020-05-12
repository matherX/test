<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="../css/js5.css">
    <link rel="stylesheet" type="text/css" href="../css/common.css">
</head>
<body>
    <form id="login">
        <h3 class="tc">后台登陆</h3>
        <input type="text" name="name" placeholder="账号">
        <input type="password" name="pwd" placeholder="密码">
        <span id="msg" class="red f12"></span>
        <button id="btn" type="button">登录</button>
    </form>
    <!-- <form id="login" >
        <input placeholder="用户名" name="name" type="text" >
        <input placeholder="密码" name="pwd" type="password" >
        <p id="msg"></p>
        <button id="btn" type="submit" >登录</button>
    </form> -->
</body>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="../js/js5.js"></script>
<script>
// $("#btn").click(function(){
//     $.getJSON("/ajax/api.php",{
//         key: 'free',
//         appid: 0,
//         msg: $('#one').val(),
//     },function(data){
//         $('#two').text(data.content);
//     })
// })