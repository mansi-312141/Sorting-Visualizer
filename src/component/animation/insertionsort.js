function getInsertionAnime(array,color,ANIM_SPEED)
{
    let dom=document.getElementsByClassName('Bar');
    let time=0;
    let arr_len=array[0].length;
    for(let i=0;i<=color.length;i++)
    {
        if(i===color.length)
        {
            setTimeout(()=>{
                for(let i=0;i<arr_len;i++)
                dom[i].firstChild.style.backgroundColor='white';
            },time+=ANIM_SPEED);
            continue;
        }
        setTimeout(()=>{
        for(let j=0;j<arr_len;j++)
        {
            if(j<=color[i][0])
            dom[j].firstChild.style.backgroundColor='yellow';
            else 
            dom[j].firstChild.style.backgroundColor='white';

            dom[j].firstChild.style.height=`${array[i][j]*5}px`;
            dom[j].lastChild.innerText=array[i][j];
        }
        dom[color[i][1]].firstChild.style.backgroundColor=dom[color[i][2]].firstChild.style.backgroundColor=(color[i][3])?'red':'blue';

        },time+=ANIM_SPEED);
    }
    return time;


}
export default getInsertionAnime;