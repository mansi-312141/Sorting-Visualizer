function getMergeAnimeUtil(color_range,temp_arr,arr,ANIM_SPEED) {
    let ayush=document.getElementsByClassName("barContainer");
    let primary_array=ayush.primary_array.children;
    let sec_array=ayush.sec_array.children;
    let n=color_range.length;
    let arr_len=arr[0].length;
    let time=0;
    for(let i=0;i<=n;i++)
    {
        if(i===n)
        {
            setTimeout(()=>{
                for(let i=0;i<arr_len;i++)
                primary_array[i].firstChild.style.backgroundColor='white';
                ayush.sec_array.style.display='none'
            },time+=ANIM_SPEED);
            continue;
        }
        setTimeout(()=>{
            for(let j=0;j<arr_len;j++)
            {
                primary_array[j].firstChild.style.backgroundColor='white';
                primary_array[j].firstChild.style.height=`${arr[i][j]*5}px`;
                if(arr[i][j]!==0)
                primary_array[j].lastChild.innerText=arr[i][j];
                if(j<temp_arr[i].length)
                {
                    sec_array[j].firstChild.style.height=`${temp_arr[i][j]*5}px`;
                    sec_array[j].lastChild.innerText=temp_arr[i][j];
                }
                else
                {
                    sec_array[j].firstChild.style.height=`${0}px`;
                    sec_array[j].lastChild.innerText="";
                    
                }
            }
            for(let j=0;j<color_range[i].length;j++)
            {
                primary_array[color_range[i][j]].firstChild.style.backgroundColor=(j<Math.floor((color_range[i].length+1)/2))?'red':'yellow';
            }
            
            
        },time+=ANIM_SPEED);
    }
    return time;
}

function getMergeAnime(array,animation,ANIM_SPEED)
{
    let res=array.slice();
    let color_range=[];
    let temp_arr=[];
    let arr=[];
    let n=animation.length;
    let arr_len=array.length;
    for(let i=0;i<n;i++)
    {
        let temp=[],sec_array=[];
        for(let j=animation[i].range_of_sort[0];j<=animation[i].range_of_sort[1];j++)
        {
            temp.push(j);
        }
        color_range.push(temp.slice());
        arr.push(res.slice());
        temp_arr.push(sec_array.slice());
        for(let j=0;j<animation[i].sequence_of_index.length;j++)
        {
            color_range.push(temp.slice());
            sec_array.push(res[animation[i].sequence_of_index[j]]);
            res[animation[i].sequence_of_index[j]]=0;
            temp_arr.push(sec_array.slice());
            arr.push(res.slice());
        }
        // sec_array.reverse();
        for(let j=0;j<arr_len;j++)
        {
            if(res[j]===0)
            {
                color_range.push(temp.slice());
                res[j]=sec_array.shift();
                arr.push(res.slice());
                temp_arr.push(sec_array.slice());
            }
        }
    }

    return getMergeAnimeUtil(color_range,temp_arr,arr,ANIM_SPEED);
}
export default getMergeAnime;