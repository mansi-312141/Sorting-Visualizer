import React, { useState } from 'react';
import Header from './header';
import getMergeSort from './algo/mergesort';
import getBubbleSort from './algo/bubblesort';
import getSelectionSort from './algo/selectionsort';
import getInsertionSort from './algo/insertionsort';
import getQuickSort from "./algo/quicksort";
import Bar from "./Bar";
import getBubbleSortAnime from './animation/bubblesort';
import getSelectionSortAnime from './animation/selectionsort';
import getMergeAnime from './animation/mergesort';
import getInsertionAnime from './animation/insertionsort';
import getQuickSortAnime from './animation/quicksort';



function Container()
{
    function getRandomArray(len=20) 
    {
        let temp=[];
        for(let i=0;i<len;i++)
        temp.push(Math.floor(Math.random()*50)+1);
        return temp;
    }
    var [arr,setArr]=useState(getRandomArray());
    var [click,setClick]=useState(false);
    var width=1.5,ANIM_SPEED=500;

    function setArrUtil(temp)
    {
        arr=temp;
        setArr(arr);
    }







    function genRandomArray()
    {
        setArrUtil(getRandomArray());
    }

    function MergeSort() {
        click=true;
        setClick(click);
        document.getElementsByClassName("barContainer").sec_array.style.display='flex';
        let array=getMergeSort(arr);
        let time=getMergeAnime(arr,array.animation,ANIM_SPEED);
        arr=array.arr;
        setTimeout(()=>{

        click=false;
        setClick(click);
        setArrUtil(arr);

        },time+=ANIM_SPEED);
    }

    function BubbleSort()
    {
        click=true;
        setClick(click);
        let array=getBubbleSort(arr);
        let time=getBubbleSortAnime(arr.slice(),array.animation,ANIM_SPEED);
        
        arr=array.arr;
        setTimeout(()=>{

        click=false;
        setClick(click);
        setArrUtil(arr);

        },time+=ANIM_SPEED);

    }

    function SelectionSort()
    {
        click=true;
        setClick(click);
        let array=getSelectionSort(arr);
        let time=getSelectionSortAnime(array.animation,arr.length,ANIM_SPEED);
        arr=array.arr;
        setTimeout(()=>{

        click=false;
        setClick(click);
        setArrUtil(arr);

        },time+=ANIM_SPEED);
    }

    function InsertionSort()
    {
        click=true;
        setClick(click);
        let array=getInsertionSort(arr);
        let time=getInsertionAnime(array.animation.array,array.animation.temp,ANIM_SPEED);
        arr=array.arr;
        setTimeout(()=>{

        click=false;
        setClick(click);
        setArrUtil(arr);

        },time+=ANIM_SPEED);

    }

    function QuickSort()
    {
        click=true;
        setClick(click);
        let array=getQuickSort(arr);
        let time=getQuickSortAnime(array.animation,ANIM_SPEED);
        arr=array.arr;
        setTimeout(()=>{

        click=false;
        setClick(click);
        setArrUtil(arr);

        },time+=ANIM_SPEED);

    }


    console.log('Click',click,arr)


    
    return (
        <>
        <Header 
        genRandomArray={genRandomArray}
        MergeSort={MergeSort}
        BubbleSort={BubbleSort}
        SelectionSort={SelectionSort}
        InsertionSort={InsertionSort}
        QuickSort={QuickSort}
        click={click}
        />

        <div className="container_">
            {
                <div className="barContainer" id="primary_array">
                {arr.map((value,index)=>{return <Bar
                    key={index}
                    width={width}
                    height={value}
                    />})
                }
                <Bar height={55}
                width={0}
                class="fixer"/>
                </div>
            }
            <br></br>
            {
                <div className="barContainer" id="sec_array">
                {arr.map((value,index)=>{return <Bar
                    key={index}
                    width={width}
                    height={0}
                    />})}
                    <Bar height={55}
                    width={0}
                    class={"fixer"}/>
                </div>
            }
        </div>
        

        </>
    );
}
export default Container;
