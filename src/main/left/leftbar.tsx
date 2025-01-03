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
            subject1:[], 
            subject2:[], 
        },
        {
            grade : '2학년',
            subject1:[], 
            subject2 :["자료구조"], 
        },
        {
            grade : '3학년',
            subject1:[], 
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
       
        {list.map(e =><ul className={left.flex}>
            <a ><h1 className={left.h1} >{e.grade}</h1></a>
            
               {store.ss==="1학기"? e.subject1.map(a=> <li>
                <a onClick={(event:React.MouseEvent<HTMLAnchorElement>)=>{
                    event.preventDefault();
                    selectsubject(a)
                }}>{a}</a>
               </li>) : e.subject2.map(a=> <li>
                <a onClick={(event:React.MouseEvent<HTMLAnchorElement>)=>{
                    event.preventDefault();
                    selectsubject(a)
                }}>{a}</a>
               </li>)}

            </ul>)
        }
        </div>  
    )
}