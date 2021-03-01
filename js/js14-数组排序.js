//*把数组从小到大排序

var arr=[5,4,3,2,1]

//*方法一 冒泡排序
/*
 for(var i=0;i<arr.length-1;i++){
    
    for(var j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            var box;
            box=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=box
        }
    }
    
}
console.log(arr); */


//*方法二 数组自带属性排序
arr.sort(function (a,b) {
    return a-b
})
console.log(arr);
