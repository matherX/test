var sum = "";
for(var i=1;i<=9;i++){
    for(var j=1;j<=i;j++){
        sum = sum+"<p class=\"one\">"+ j+"x"+i+"="+(i*j) +"</p>"
    }
    sum = sum + "<br>"
}
console.log(sum)
document.write(sum);
document.write("<p>123</p>")
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
        //         var temp = arr[idx];
        //         arr[idx] = arr[len - i - 1];
        //         arr[len - i -1] = temp;
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
// xiaoming.__proto__ === Student; // true
// console.log(xiaoming.__proto__ === Student)
// function Cat(name) {
//     this.name = name;//
// }
// Cat.prototype.say = function(){
// return "Hello, " + this.name + "!";        
// }
// var kitty = new Cat('Kitty');
// var doraemon = new Cat('哆啦A梦');
// if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
//     console.log('测试通过!');
// } else {
//     console.log('测试失败!');
// }
// console.log(kitty);
// console.log(kitty.name);
// console.log(kitty.say);
// console.log(typeof kitty.say);
// console.log('function');
// console.log(kitty.say());
// console.log(doraemon.say);
// var light = function () {
//     this.currstate = FSM.off;
//     this.button = null;
// };
// light.prototype.init = function () {
//     var button = document.createElement('button');
//     self = this;
//     button.innerHTML = '已关灯';
//     this.button = document.body.appendChild(button);
//     this.button.onclick = function () {
//         self.currstate.buttonWasPressed.call(self);
//     };
// };
// var FSM = {
//     off: {
//         buttonWasPressed: function () {
//             console.log('关灯');
//             this.button.innerHTML = '下一次按我是开灯';
//             this.currstate = FSM.on;
//         }
//     },
//     on: {
//         buttonWasPressed: function () {
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
//                 buttonWasPressed: function () {
//                     return delegation.buttonWasPressed.apply(client, arguments);
//                 }
//             };
//         };

//         var light = function () {
//             this.offstate = delegate(this, FSM.off);
//             this.onstate = delegate(this, FSM.on);
//             this.currstate = FSM.off;
//             this.button = null;
//         };
//         light.prototype.init = function () {
//             var button = document.createElement('button');
//             self = this;
//             button.innerHTML = '已关灯';
//             this.button = document.body.appendChild(button);

//             this.button.onclick = function () {
//                 self.currstate.buttonWasPressed.call(self);
//             };
//         };

//         var FSM = {
//             off: {
//                 buttonWasPressed: function () {
//                     console.log('关灯');
//                     this.button.innerHTML = '下一次按我是开灯';
//                     this.currstate = this.onstate;
//                 }
//             },
//             on: {
//                 buttonWasPressed: function () {
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