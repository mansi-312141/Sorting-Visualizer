export default function getSelectionSortAnime(array,arr_len,ANIM_SPEED) {
    let time=0;
    array=array.slice();
    for(let i=0;i<array.length+1;i++)
    {
        setTimeout(()=>{
        
        if(i===array.length)
        {
            let dom=document.getElementsByClassName('Bar');
            for(let i=0;i<arr_len;i++)
            dom[i].firstChild.style.backgroundColor='white'
            
        }

        else if(array[i].length===4){
            let dom=document.getElementsByClassName('Bar');
            for(let j=array[i][3];j<arr_len;j++)
            dom[j].firstChild.style.backgroundColor='white';
            var [one,two]=array[i];
            dom[one].firstChild.style.backgroundColor='yellow';
            dom[two].firstChild.style.backgroundColor='red';
        }
        else
        {
            let tmp=array[i][0];
            let dom=document.getElementsByClassName('Bar');
            for(let j=0;j<=tmp;j++)
            {

                dom[j].firstChild.style.backgroundColor="blue";
                dom[j].firstChild.style.height=`${array[i][1][j]*5}px`;
                dom[j].lastChild.innerText=array[i][1][j];
            }
            
            for(let j=tmp+1;j<arr_len;j++)
            {
                dom[j].firstChild.style.height=`${array[i][1][j]*5}px`;
                dom[j].lastChild.innerText=array[i][1][j];
            }
        }
        },time+=ANIM_SPEED)
    }
    return time;
}