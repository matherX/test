var sum = "";
for(var i=1;i<=9;i++){
    for(var j=1;j<=i;j++){
        sum = sum+"<p class=\"one"+j+"\"  >"+ j+"x"+i+"="+(i*j) +"</p>"
    }
    sum = sum + "<br>"
}
document.write(sum);

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