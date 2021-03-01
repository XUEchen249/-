/* 
var arr=[true,1,2,81,5,2,32,40,55,81,0,false,true]

var temp=[]
for(var i=0;i<arr.length;i++){
 if(temp.indexOf(arr[i])==-1){
   // temp[arr[i]]
   temp.push(arr[i])
 }
}
console.log(temp);
console.log(temp.sort(function (a,b) {
    return a-b//
})); */
//*方法一 indexof

var arr=[1,true,10,22,1,22,3,false]
var temp=[];
for(var i=0;i<arr.length;i++){
    if(temp.indexOf(arr[i])==-1){
        temp.push(arr[i])
    }
}
console.log(temp);
temp.sort(function(a,b){
    return a-b
})
console.log(temp);




 