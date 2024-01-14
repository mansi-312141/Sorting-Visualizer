import React from 'react';
import './component.css';

function Bar(params)
{
    console.log(params.class,typeof(params.class))
    return (
        <div
        className="Bar">

        <div
        style={{
            
            width:`${params.width*2}vw`,
            height:`${params.height*5}px`,
            backgroundColor:"white",
            margin:`${2}px` 
        }}
        >
        </div>
        <p style={(params.class!=='fixer')?{color:"white",textAlign:'center'}:null} className={params.class}>{(params.height)?params.height:""}</p>
        </div>
    )
}

export default Bar;