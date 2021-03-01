//* 把 go china go 的每个单词首字母大写

//* 方法一 把gcg三个字母取出来，组成数组，变成大写，再放回去* 放不回去了 因为我想用map，但是这里不适用
/* var str="go china go"
            var a=str.substring(0,3)
            var b=str.substring(3,8)
            var c=str.substring(9)
            var arr=[a,b,c]
            console.log(arr);
            arr2=arr.map(function(item,index){
              return item.slice(0,1).toUpperCase()
              
              

            })
            console.log(arr2);  */

//**  方法二 单把三个字母取出来，变大写
/* var str = "go china go";
str[0] = str[0].toUpperCase();
str[3] = str[3].toUpperCase();
str[9] = str[9].toUpperCase();
str[0] = "G";
console.log(str);  */

/**
 * 1.字母变大写=  =》使用touppercase==》在string类型才行==》
 * 2.把这句话从string变成array
 * */

var str = "go china go";
var words = str.split(" "); //*把句子拆分成三个单词，而且在一个数组里
/* for (var i = 0; i < words.length; i++) {
 // words[i] = words[i][0].toUpperCase(); //*把第一个字母变成大写
 words[i]=words[i][0].toUpperCase()+words[i].substring(1)
 
}

words=words.join(" ") */

console.log(words);
console.log(typeof words);//*object
console.log(typeof words[0][1]);//*string
console.log(typeof words[0]);//*string

var a = [1255, "nihao", 859, 23];
b = a[1][2];
b1 = a[1];
c = a[0][1];
c1 = a[0];
console.log(b); //*h 此时a[0]是字符串“nihao”，然后string类型可以通过它的下角标去访问它的每个字母
console.log(b1); //*h 此时a[0]是字符串“nihao”，然后string类型可以通过它的下角标去访问它的每个字母

console.log(c); //*undefined 此时a[0]是数字1255，number类型是不可以通过下角标去访问内容
console.log(c1); //*undefined 此时a[0]是数字1255，number类型是不可以通过下角标去访问内容

var str="52，53"
str1=Number(str)
console.log(str1); //*NaN Number只能一个个的转化

