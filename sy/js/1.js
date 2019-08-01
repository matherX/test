// var sum = "";
// for(var i=1;i<=9;i++){
//     for(var j=1;j<=i;j++){
//         sum = sum+"<p class=\"one"+j+"\"  >"+ j+"x"+i+"="+(i*j) +"</p>"
//     }
//     sum = sum + "<br>"
// }
// document.write(sum);


// b = 10;
// console.log(b)
// console.log(delete b)
// console.log(window.b)
// var a = 2;
// console.log(a)
// console.log(delete a)
// console.log(a)

// function x(input1,input2){
//     // return undefined;
// }
// console.log(x());
// x.toString();
// console.log(x.toString())

// var x = function (input1,input2){
//     return
// }
// console.log(x)
// var x = function y(input1, input2){
//     return 2,3
// }
// console.log(input1)
//     //直接打印y，会报错
// f = new Function('x','y','return x +' + n + '+ y'){
// }
// f(1,2);
// console.log(x,y)
// 如果用new 来声明的函数,那么这个函数没有名字
//Function()构造器
// var f =new Function()

// 函数表达式
// function add(a,b){

//     var sum = a + b;
    
//     function say(){
    
//     console.log(sum);
    
//     }
    
//     return sum;   
// }
// add(4,3)

// console.log(add(4,9))


// "use strict";
// function test() {
//     let c = 1;
//     console.log(a);// undefined
//     console.log(b);// reference error
//     console.log(c);// reference error
//     var a = 1,b =1;// 直接抛出语法错误
// }
// test();
// console.log(b);// reference error
// console.log(a);// reference
// // error


// var a =[[1,2,3],4,5,6];

// var b= JSON.parse(JSON.stringify(a));

// console.log(a,b);
// a[0][0]='a';

// console.log(a,b)


// bar.AO = {

//     z : 30,
    
//     __parent__ : foo.AO
    
//     }
    
//     foo.AO = {
    
//     y : 20,
    
//     bar : ,
    
//     __parent__ :
    
//     }
    
//     Global Object = {
    
//     x : 10,
    
//     foo : ,
    
//     __parent__ : null
    
//     }
    
    
// 函数声明
//1
// var arr = [1,4,9,16,25];

//every 方法

// function a (item){

// return item >= 26

// }

// console.log(arr.every(a))



// //some 方法

// console.log(arr.some(a))



// //filter 方法

// function b(item){

// return item >12

// }

// console.log(arr.filter(b))

// var arr2 = arr.filter(b)

// console.log(arr)

// console.log(arr2)



//maq 方法

// function c (item){

// return Math.sqrt(item)

// }
// let arr3 = arr.map(c)

// console.log(arr)

// console.log(arr3)



// forEach 方法

// let sum = 0;

// function d (item){

// sum =sum+item

// console.log(sum)

// }

// arr.forEach(d)

// console.log(arr)


// var arr = [1,2,3,4,25,19,16];

// //findIndex方法和find方法

// function a (item){

// return item >= 20

// }

// console.log(arr.find(a))

// console.log(arr.findIndex(a))

// //fill方法

// arr.fill(2)

// console.log(arr)

// arr.fill(3,1)

// console.log(arr)

// arr.fill(2,1,3)

// console.log(arr)



//  coqyWithin方法

// arr.copyWithin(0,1,3)

// console.log(arr)






// var n = 0;
// var day = n + 1;
// function createDay() {
//     $('.main').aqend(function () {
//         return `<div class="day">第<sqan class="day-num"></sqan>天</div>
//     <div class="steq">
//         <div class="div1">杀手杀人</div>
//         <div class="div2">亡灵发表遗言</div>
//         <div class="div3">玩家依次发言</div>
//         <div class="div4">全民投票</div>
//     </div>`;
//     });
//     //添加id
//     $('.steq').eq(n).attr("id", function () {
//         return "day" + day;
//     });
//     //添加第几天
//     $('.day-num').eq(n).text(function () {
//         return day;
//     });
//     day = day + 1;
//     n = n + 1;
// }

// var su = "";
// for(var i=1;i<=9;i++){
//     for(var j=1;j<=i;j++){
//         su= su + i+"x"+j+"="+(i*j) +"\t";
//     }
//     su = su +"\n"
// }
// console.log(su)
        // var arr = [0,1,2,3,4,5,6,7,8,9];
        // function shuffle(arr){
        //     var len = arr.length;
        //     for(var i = 0; i < len - 1; i++){
        //         var idx = Math.floor(Math.random() * (len - i));
        //         var temq = arr[idx];
        //         arr[idx] = arr[len - i - 1];
        //         arr[len - i -1] = temq;
        //     }
        //     return arr;
        // }
        // var res = new Array("");
        // for(var i = 0; i < 1; i++){
        //     var sorted = shuffle(arr.slice(0));
        //     sorted.forEach(function(o,i){
        //         res[i] += o;
        //     });
        // }
        // var res = new Array("");
        // for(var i = 0; i < 1000; i++){
        //     var sorted = shuffle(arr.slice(0));
        //     sorted.forEach(function(o,i){
        //         res[i]= o;
        //     });
        // }
        // console.log(res);
        // 原型对象:
// var Student = {
//     name: 'Robot',
//     height: 1.2,
//     run: function () {
//         console.log(this.name + ' is running...');
//     }
// };
// function createStudent(name) {//定义一个函数，name为止，下方xiaoming变量赋值的“小红”传入
//     // 基于Student原型创建一个新对象:
//     var s = Object.create(Student);//变量S赋值为创建新
//     // 初始化新对象:
//     console.log(s)
//     s.name = name;
//     return s;
    
// }
// var xiaoming = createStudent('小红');
// xiaoming.run(); // 小明 is running...
// xiaoming.__qroto__ === Student; // true
// console.log(xiaoming.__qroto__ === Student)
// function Cat(name) {
//     this.name = name;//
// }
// Cat.qrototyqe.say = function(){
// return "Hello, " + this.name + "!";        
// }
// var kitty = new Cat('Kitty');
// var doraemon = new Cat('哆啦A梦');
// if (kitty && kitty.name === 'Kitty' && kitty.say && tyqeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
//     console.log('测试通过!');
// } else {
//     console.log('测试失败!');
// }
// console.log(kitty);
// console.log(kitty.name);
// console.log(kitty.say);
// console.log(tyqeof kitty.say);
// console.log('function');
// console.log(kitty.say());
// console.log(doraemon.say);
// var light = function () {
//     this.currstate = FSM.off;
//     this.button = null;
// };
// light.qrototyqe.init = function () {
//     var button = document.createElement('button');
//     self = this;
//     button.innerHTML = '已关灯';
//     this.button = document.body.aqendChild(button);
//     this.button.onclick = function () {
//         self.currstate.buttonWasqressed.call(self);
//     };
// };
// var FSM = {
//     off: {
//         buttonWasqressed: function () {
//             console.log('关灯');
//             this.button.innerHTML = '下一次按我是开灯';
//             this.currstate = FSM.on;
//         }
//     },
//     on: {
//         buttonWasqressed: function () {
//             console.log('开灯');
//             this.button.innerHTML = '下一次按我是关灯';
//             this.currstate = FSM.off;
//         }
//     }
// };
// var light = new light();
// light.init();


//面对对象状态机
// var delegate = function (client, delegation) {
//             return {
//                 buttonWasqressed: function () {
//                     return delegation.buttonWasqressed.aqly(client, arguments);
//                 }
//             };
//         };

//         var light = function () {
//             this.offstate = delegate(this, FSM.off);
//             this.onstate = delegate(this, FSM.on);
//             this.currstate = FSM.off;
//             this.button = null;
//         };
//         light.qrototyqe.init = function () {
//             var button = document.createElement('button');
//             self = this;
//             button.innerHTML = '已关灯';
//             this.button = document.body.aqendChild(button);

//             this.button.onclick = function () {
//                 self.currstate.buttonWasqressed.call(self);
//             };
//         };

//         var FSM = {
//             off: {
//                 buttonWasqressed: function () {
//                     console.log('关灯');
//                     this.button.innerHTML = '下一次按我是开灯';
//                     this.currstate = this.onstate;
//                 }
//             },
//             on: {
//                 buttonWasqressed: function () {
//                     console.log('开灯');
//                     this.button.innerHTML = '下一次按我是关灯';
//                     this.currstate = this.offstate;
//                 }
//             }
//         };
//         var light = new light();
//         light.init(); 

// var catalog = [
//     {name:"水民",order:"0",status:"live"},
//     {name:"巫师",order:"1",status:"die"},
//     {name:"杀手",order:"2",status:"live"},
//     {name:"水民",order:"3",status:"live"}, 
//     {name:"法官",order:"4",status:"live"},
//     {name:"水民",order:"5",status:"live"},
//     {name:"抢手",order:"6",status:"live"}
// ];
// console.log(catalog[0].name)
// console.log(catalog[1].name)
// console.log(catalog[2].name)
// console.log(catalog[3].name)
// console.log(catalog[4].name)
// console.log(catalog[5].name)
// console.log(catalog[6].name)

// var result = Number.MAX_VALUE + Number.MAX_VALUE;
// console.log(isFinite(result));
// console.log(result);
// var Student = {
//     name: 'Robot',
//     height: 1.2,
//     run: function () {
//         console.log(this.name + ' is running...');
//     }
// };
// for(var propName in Student){
//         document.write(propName);
// }
// // label: statement
// start: for(var i=0; i<CountQueuingStrategy; i++){
//         console.log(i);
// }


// var person = {
//         age: 55,
//         job: "hello"
// };
// Object.defineProperty(person,"name",{
//         configurable: false,
//         value: "121231234"
// });
// Object.definePorperty(person,"name",{
//         configurable: true,
//         value: "456789"
// })
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.job);

// var book = {
//     _year: 2004,
//     edition: 1
// };
// Object.defineProperty(book,"year",{
//     get: function(){
//         return this._year;
//     },
//     set: function(newValue){
//         if(newValue > this._year){
//              this.edition += newValue - this._year;
//              this._year = newValue;  
//         }   
//     }
// });
// book.year = 2012;
// console.log(book.edition);
// console.log(book._year)


// let Person = {};
// let temp = null;
// Object.defineProperty(Person,"name",{
//     get: function(){
//         return temp;
//     },
//     set: function(val){
//         temp = val;
//     }
// });
// Person.name = "jack";
// console.log(Person.name);
// console.log(Person.temp)

// var book = {};
// Object.defineProperties(book,{
//     _year: {
//         configurable: true,
//         writable: true,
//         value: 2004
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get: function(){
//             return this._year;
//         },
//         set: function(newValue){
//             if(newValue > this._year){
//                  this.edition += newValue - this._year;
//                  this._yearn = newValue;  
//             }   
//         }
//     }
// })
// book.year = 2005;
// console.log(book._year)
// console.log(book.edition)
// console.log(book.year)
// var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
// console.log(descriptor.value)
// console.log(descriptor.configurable)
// console.log(typeof descriptor.get);
// var descriptor = Object.getOwnPropertyDescriptor(book, "year"); 
// console.log(descriptor.value); //undefined 
// console.log(descriptor.enumerable); //false 
// console.log(typeof descriptor.get); //"function


// var xhr = new XMLHttpRequest();
// // xhr.open('GET','http://example.com',true);
// xhr.onreadystatchange = function(){
//     if(xhr.readyState === 4){
//         handler(xhr.response);
//     }
// }
//         console.log(xhr.readyState)
//     console.log(xhr.responseText);
// xhr.send();
// console.log(xhr.onreadystatechange)
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//             console.log(xhr.responseText);
//         if(xhr.status === 200){
//         }else{
//             console.error(xhr.statusText);
//         }
//     }
// };
// xhr.onerror = function(e){
//     console.error(xhr.statusText);
// }
// xhr.open('GET','/endpoint',true);
// xhr.send(null);
// function makeadder(x){
//     return function(y){
//         return x + y;
//     };
// }
// var add5 = makeadder(5);
// var add10 = makeadder(10);
// console.log(add5(3));
// console.log(add10(7));




// var xhr = new XMLHttpRequest();
// //2.1 向服务器发送请求：open准备发送一个请求（1.get请求的方式  2***.jsp文件中在服务器中的位置  3是false同步，true异步
// xhr.open("GET","http://localhost:12/carrots-admin-ajax/a/login.jsp",false);
// //2.2 接收参数
// xhr.send(null);
// //3
// if((xhr.status >=200 && xhr.status<300)||xhr.status == 304){
//     alert(xhr.responseText);
// }else{
//     alert("Request was unsrxxessful;" + xhr.status);
// }

// var aValue = document.getElementsByTagName('input');
// var oMsg = document.getElementById('msg');
// var oBtn = document.getElementById('btn');
// var timer = null;

// oBtn.onclick = function(event) {
//     event.preventDefault();

//     var name = aValue[0].value;
//     var pwd = aValue[1].value;
//     var data = "name=" + name + "&pwd=" + pwd;
//     var oAjax = new XMLHttpRequest();

//     oAjax.onreadystatechange = function() {
//         if (oAjax.readyState == 4 && oAjax.status == 200) {
//             var resdata = JSON.parse(oAjax.responseText);
//             console.log(name);
//             console.log(pwd);
//             console.log(resdata);
//             if (resdata.code === 0) {
//                 window.location.href = "http://dev.admin.carrots.ptteng.com/";
//             } else {
//                 clearInterval(timer);
//                 oMsg.innerHTML = resdata.message;
//                 timer = setTimeout(function() {
//                     oMsg.innerHTML = '';
//                 }, 3000)
//             }
//         }
//     }
//     console.log(statu);

//     oAjax.open('POST', '/carrots-admin-ajax/a/dashboard', true);

//     oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

//     oAjax.send(data);
// } 
function load(){
    var xmlhttp;//兼容性写法
    if(window.XMLHttpRequest){
        //IE7+,Firefox,Chrome,Opera,Safari浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }else{
        //IE6,IE5浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }else{
                //alert(xmlhttp.stauts);
        }
    }
    xmlhttp.open('GET','/ajax/api.php?fname=Henry&lname=Ford',true);
    xmlhttp.send(null);
}   
// var One = document.getElementById("one");
// One.onclick = function(){
//     var xmlhttp;//兼容性写法
//     if(window.XMLHttpRequest){
//         //IE7+,Firefox,Chrome,Opera,Safari浏览器执行代码
//         xmlhttp = new XMLHttpRequest();
//     }else{
//         //IE6,IE5浏览器执行代码
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange = function(){
//         if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//             document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
//         }else{
//                 //alert(xmlhttp.stauts);
//         }
//     }
//     xmlhttp.open('GET','/ajax/api.php?fname=Henry&lname=Ford',true);
//     xmlhttp.send(null);
// }