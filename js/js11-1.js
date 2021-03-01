/* var str = "hello";
var str2 = str.toUpperCase(); //!不要忘记括号（）
console.log(str2); //*HELLO

var mot = "bonjour";
mot.toUpperCase(); //todo 这里应该重新存一个新的字符串
console.log(mot); //*bonjour


/**
 * ?为什么mot就没有变化呢？
 * *因为字符串string不允许更改，所以需要再重新声明一个变量，
 * *再把转化后的新的字符串存进新变量里去
 **/
/*
var lw = "HELLO";
var lw2 = lw.toLowerCase();
console.log(lw2); //*hello */

/* var a="bonjour, je suis charlie"
var b=a.indexOf("n")
console.log(a.indexOf("je")); //*9
console.log(b); //*2


 */

/* var a="keymap"
var b=a[3].toUpperCase()
console.log(b); //*M  只是把keymap里第三个m改成大写M */

/* var a="can you keep moving ?"
 a=a.toUpperCase()
console.log(a);//*重新存到原来的变量里
 */

/* var a="je voudrais cherhcer un stage"
var b=a.indexOf("stage") //*也可以查找 词
console.log(b);//* 24 
var c=a.indexOf("me")
console.log(c);//* -1 没找到显示-1 */

/* var a="where are you from ?"
var b=a.indexOf("can")
if (b<0) {  
  console.log("no find");
  console.log(b);
}else{
  console.log("find");
  console.log(b);
}
 */
/* 
 var a="hello xue"
 console.log(a.indexOf(4)); */

//*例子 检测聊天的语句里的关键字
var chat = ["还", "借", "支付宝", "转", "账号", "密码", "打钱"];
var phrase = "带钱包了吗，给我转10欧";

/* for (var i = 0; i < chat.length; i++) {
  for (var i = 0; i < chat.length; i++) {
    if (phrase.indexOf(chat[i]) > 0) {
      alert("attention!");
      break;//! for循环里，可以用break终止循环
    } else {
      alert("ok");
    }
  }
 */

/**
  *  * ? 如果只是【i】为什么会这样
  *  if (phrase.indexOf([i]) > 0) { //! 应该是 chat[i]
  
    console.log("attention!");
  } else {
    console.log("ok");
  }
  console.log(phrase.indexOf([i]));
 } 
 */
/* var a="hello sunday"
var b=a.substring(2,5)
console.log(b); //*llo 含头不含尾，所以只显示角标[2]l [3]l [4]o 

var c=a.substring(6)
console.log(c);//*sunday 从6开始一直到最后一位 */

/* var a="hello"
var b=a.split("e") //*把e作为切割符，那么e会消失，把hello一分为二
console.log(b);
var c=a.split("")//*把“”空字符当作切割符，可以把字符串的每一个字符分开
console.log(c);
var d=a.split("l")//*两个切割符连在一起会被切成 “ ”空字符
console.log(d);
var e=a.split("y")//*当字符串里没有切割符的时候，这个字符串整体会被切做一个数组
console.log(e);


 //? split 只适用于一个单词吗？
 //?如果想把这两个词切成两个数组怎么办/或者想把这两个单词分别取出==>
 //*substring “” “ ”

var word="hello monday"

//*substring 只是单独取出指定词
var str=word.substring(0,5)
var str2=word.substring(6)
console.log(str);
console.log(str2); 

//* split可以把一句话里的两个词 分开&放到同一个数组里
var word = "hello monday";
console.log(word.split(" "));//!空格字符 ==>拆分成两个词
console.log(word.split(""));//! 空字符 ==>拆分成每个字母*/




/* var num = 56;
var num2 = 10;
var sum = num + num2; //*此时

num = num.toString(); //*此时num和num2是string类型
num2 = num2.toString();

console.log(sum); //*66
console.log(typeof sum);//* number

//?为什么用了.toString（）以后sum还是number类型呢？
//!因为此时是 先加再改类型 & 程序自上而下执行 
//!var sum = num + num2;在toString（）之前执行，所以此时sum用的num，num2是没有被改变的原类型number 
 */

/*  var num=25
 var num2=num.toFixed(2)//*给整数后面加小数点2位
 console.log(num2);//*25.00 */

/*  var obj={name:"xue"}
 console.log(obj.name);
 var a=obj.name.toUpperCase()
 console.log(a);
 */

 