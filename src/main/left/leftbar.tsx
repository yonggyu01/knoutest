import React, { MouseEventHandler } from 'react'
import useStore from '../../store/store';
import left from './left.module.scss'
export default function Leftbar (){
    const store = useStore(store => store)
    const date = new Date()
    console.log(date,"date")
    const list = [
        {
            grade : '1학년',
            subject1:["파이썬프로그래밍기초"], 
            subject2:[], 
        },
        {
            grade : '2학년',
            subject1:["이산수학","생명과환경","java프로그래밍"], 
            subject2 :["자료구조"], 
        },
        {
            grade : '3학년',
            subject1:["데이터베이스시스템","알고리즘"], 
            subject2:["JSP프로그래밍","컴퓨터구조","시뮬레이션","UNIX시스템"],
        },
        {
            grade : '4학년',
            subject1:[], 
            subject2:[], 
        },
    ]
    function selectsubject(data : string):void{
        store.setsubject(data)
            list.forEach( (e,idx) => {
                if(e.subject1.length >=1){
                    e.subject1.forEach(a => {
                        if(a === data){
                            store.setss("1학기")
                            store.setgrade(`${idx+1}학년`)
                        }
                    })
                }
                if(e.subject2.length >=1 ){
                    e.subject2.forEach(b =>{
                        if(b === data){
                            store.setss("2학기")
                            store.setgrade(`${idx+1}학년`)
                        }
                    })        
                }
            });
        
        // console.log(store.subject,"변경 섭젝")
    }
    return(
        <div className={left.wrap}>   
        <button className={left.cbtn} onClick={()=>{
                store.ss =="1학기"? store.setss("2학기") : store.setss("1학기")
            }}>{store.ss}</button>
       
        {store.grade !== "학년" && store.ss === "1학기" && list.filter(a=> a.grade === store.grade)[0].subject1.map(el =><ul className={left.flex}>
            {/* <a ><h1 className={left.h1} >{e.grade}</h1></a>
             */}
               <li className={left.h1} >
                <a onClick={(event:React.MouseEvent<HTMLAnchorElement>)=>{
                    event.preventDefault();
                    selectsubject(el)
                }}>{el}</a>
               </li> </ul>)}
        {store.grade !== "학년" && store.ss === "2학기" && list.filter(a=> a.grade === store.grade)[0].subject2.map(el =><ul className={left.flex}>
            {/* <a ><h1 className={left.h1} >{e.grade}</h1></a>
             */}
               <li className={left.h1} >
                <a onClick={(event:React.MouseEvent<HTMLAnchorElement>)=>{
                    event.preventDefault();
                    selectsubject(el)
                }}>{el}</a>
               </li> </ul>)}

          

           
        </div>  
    )
}