var bound=[],color_range=[],array=[],compared=[],positioned=[],fixed=[];

function swap(arr,leftIndex,rightIndex){
var temp=arr[leftIndex];
arr[leftIndex]=arr[rightIndex];
arr[rightIndex]=temp;
}

function partition(arr,left,right) {
    let pivot=arr[left],
    boundary=left+1;
    for(let i=left;i<=right;i++)
    {
        if(arr[i]<pivot)
        {
            color_range.push([left,right]);
            bound.push(boundary);
            compared.push([left,i,false])
            array.push(arr.slice())
            positioned.push(fixed.slice());
            swap(arr,i,boundary);
            boundary++;
        }
        bound.push(boundary);
        compared.push([left,i,true]);
        array.push(arr.slice())
        color_range.push([left,right]);
        positioned.push(fixed.slice());
    }
    swap(arr,boundary-1,left);
    bound.push([]);
    color_range.push([left,right])
    compared.push([]);
    array.push(arr.slice());
    positioned.push(fixed.slice());
    return boundary-1;

}

function quickSort(arr,left,right) {
    var index;
    if (arr.length>1) {
        index=partition(arr,left,right); 
        fixed.push(index);
        if (left<index-1) { 
            quickSort(arr,left,index-1);
        }
        if (index<right) { 
            quickSort(arr,index+1,right);
        }
    }
    if(left===0&&right===arr.length-1)
    return arr;
}
function getQuickSort(params)
{
    var arr=params.slice();
    while(color_range.length>0)
    {
        color_range.pop();
        compared.pop();
        array.pop();    
        bound.pop();
        positioned.pop();   
    }
    
    quickSort(arr,0,arr.length-1);
    return {
        arr:arr,
        animation:{
            color_range:color_range,
            compared:compared,
            bound:bound,
            array:array,
            positioned:positioned
        }
    }
}

export default getQuickSort;