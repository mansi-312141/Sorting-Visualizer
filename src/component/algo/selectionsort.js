export default function getSelectionSort(params)
{
    var arr=params.slice();
    let range=[];

    for(let i=0;i<arr.length;i++)
    {
        let temp=i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[temp]>arr[j])
            {
                range.push([temp,j,true,i]);
                temp=j;
            }
            else
            range.push([temp,j,false,i]);
        }
        [arr[temp],arr[i]]=[arr[i],arr[temp]];
        range.push([i,arr.slice()]);

    }
    return {
        animation:range,
        arr:arr,
    } 
}


