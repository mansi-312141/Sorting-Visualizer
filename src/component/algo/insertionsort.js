function getInsertionSort(params) {
    var arr=params.slice();
    var temp=[];
    var array=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j>0;j--)
        {
            if(arr[j]>=arr[j-1])
            {
                temp.push([i,j,j-1,true])
                array.push(arr.slice());
                break;
            }    
            temp.push([i,j,j-1,false]);
            array.push(arr.slice());
            [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
            temp.push([i,j,j-1,true]);
            array.push(arr.slice());
        }
    }
    return {
        arr:arr,
        animation:{temp:temp,array:array}
    }

}
export default getInsertionSort;