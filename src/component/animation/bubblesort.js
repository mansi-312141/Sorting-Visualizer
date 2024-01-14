function getBubbleSortAnimeUtil(array,colored,ANIM_SPEED)
{
    let time=0;
    let arr_len=array[0].length;
    for(let j=0;j<array.length+1;j++)
    {
        setTimeout(()=>{
            if(j<array.length){ 
            let temp=array[j].slice();
            let dom=document.getElementsByClassName('Bar');
            let one=colored[j][0],two=colored[j][1];
            for(let i=0;i<arr_len;i++)
            {
                dom[i].firstChild.style.height=`${temp[i]*5}px`;
                dom[i].firstChild.style.backgroundColor='white';
                dom[i].lastChild.innerText=temp[i];
            }
            // dom[j].firstChild.style.backgroundColor='red';
            dom[one].firstChild.style.backgroundColor=dom[two].firstChild.style.backgroundColor=(colored[j][2])?'yellow':'blue';
        }
        else
        {
            let dom=document.getElementsByClassName('Bar');
            for(let i=0;i<arr_len;i++)
            {
                dom[i].firstChild.style.backgroundColor='white'
            }
            // setArrUtil(array[j-1])
        }
        },time+=ANIM_SPEED)
    }
    return time;
}
function getBubbleSortAnime(array,animation,ANIM_SPEED)
{
    var temp=array.slice();
    var arr=[],colored=[];
    for(let i=0;i<animation.length;i++)
    {
        arr.push(temp.slice());
        colored.push([animation[i][0],animation[i][1],(!animation[i][2])]);
        if(animation[i][2])
        {
            let tmp=temp[animation[i][0]];
            temp[animation[i][0]]=temp[animation[i][1]];
            temp[animation[i][1]]=tmp;
            arr.push(temp.slice());
            colored.push([animation[i][0],animation[i][1],true]);
        }        
    }
    return getBubbleSortAnimeUtil(arr,colored,ANIM_SPEED);
    
}
export default getBubbleSortAnime;