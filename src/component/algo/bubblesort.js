export default function getBubbleSort(params)
{
    var arr=params.slice();
    let range=[];

    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-i-1;j++)
        {
            if(arr[j+1]<arr[j])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                range.push([j,j+1,true]);
            }
            else
            range.push([j,j+1,false]);
        }
    }



    return {
        animation:range,
        arr:arr
    } 
}
