function getQuickSortAnime(animation,ANIM_SPEED) {
    let color_range=animation.color_range.slice(),
    bound=animation.bound.slice(),
    compared=animation.compared.slice(),
    positioned=animation.positioned.slice(),
    array=animation.array.slice(),
    dom=document.getElementsByClassName('Bar'),
    time=0,
    n=color_range.length,
    arr_len=array[0].length;
    
    for(let i=0;i<=n;i++)
    {
        if(i===n)
        {
            setTimeout(()=>{
                for(let j=0;j<arr_len;j++)
                dom[j].firstChild.style.backgroundColor='white';
            },time+=ANIM_SPEED)
            continue;
        }
        setTimeout(()=>{
            for(let j=0;j<arr_len;j++)
            {
                dom[j].firstChild.style.backgroundColor='white';
                dom[j].firstChild.style.height=`${array[i][j]*5}px`;
                dom[j].lastChild.innerText=array[i][j];
                dom[j].lastChild.style.color='white';
            }
            for(let j=color_range[i][0];j<=color_range[i][1];j++)
            {
                dom[j].firstChild.style.backgroundColor='yellow';
            }
            if(bound[i].length!==0)
            {
                dom[bound[i]].firstChild.style.backgroundColor='red';
                if(bound[i]!==arr_len)
                dom[bound[i]].lastChild.style.color='red';
                dom[compared[i][1]].firstChild.style.backgroundColor=(compared[i][2])?"blue":'green';
                dom[compared[i][0]].firstChild.style.backgroundColor='lime';
            }
            for(let j=0;j<positioned[i].length;j++)
            {
                dom[positioned[i][j]].firstChild.style.backgroundColor='aqua';
            }

        },time+=ANIM_SPEED)
    }
    return time;
}
export default getQuickSortAnime;