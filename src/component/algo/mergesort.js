function func(range_of_sort,sequence_of_index)
{
    return {
        range_of_sort:range_of_sort,
        sequence_of_index:sequence_of_index
    };
}
export default function getMergeSort(params) {
    var arr=params.slice();
    let range=[];
    mergeUtil(0,arr.length-1,arr,range);
    return {arr:arr,
    animation:range};   
}
function mergeUtil(start,end,arr,range)
{
    if(start===end)
    return;
    let mid=Math.floor((start+end)/2);
    mergeUtil(start,mid,arr,range);
    mergeUtil(mid+1,end,arr,range);
    doMerge(start,mid,end,arr,range);
}
function doMerge(start,mid,end,arr,range)
{
    let arr1=[],arr2=[],range_of_sort=[start,end],sequence_of_index=[];
    for(let i=start;i<=mid;i++)
    arr1.push(arr[i]);
    
    for(let i=mid+1;i<=end;i++)
    arr2.push(arr[i]);


    let i=0,j=0,n=arr1.length,m=arr2.length,k=start;
    while(i<n&&j<m)
    {
        if(arr1[i]<arr2[j])
        {
            sequence_of_index.push(start+i);
            arr[k++]=arr1[i++];
        }
        else
        {
            sequence_of_index.push(mid+1+j);
            arr[k++]=arr2[j++];
        }
    }
    
    while(i<n)
    {
        sequence_of_index.push(start+i);
        arr[k++]=arr1[i++];
    }
    
    while(j<m)
    {
        sequence_of_index.push(mid+1+j);
        arr[k++]=arr2[j++];
    }  
    range.push(func(range_of_sort,sequence_of_index));
}