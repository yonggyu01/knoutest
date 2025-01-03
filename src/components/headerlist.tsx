import React from 'react'
import headstyle from '../style/navistyle.module.scss'
import { useParams } from 'react-router-dom';
import useStore from '../store/store';
export default function Headlist (){
    const store = useStore(store => store)
const ullist = [
    {
        grade : '1학년',
        list : ["기출문제","틀린문제","워크북"],
        link : []
    },
    {
        grade : '2학년',
        list : ["기출문제","틀린문제","워크북"],
        link : []
    },
    {
        grade : '3학년',
        list : ["기출문제","틀린문제","워크북"],
        link : []
    },
    {
        grade : '4학년',
        list : ["기출문제","틀린문제","워크북"],
        link : []
    },
] 
    function selectstore(data:string , s:boolean = true ):void{
        s==true ? store.setgrade(data) : store.setview(data)
        console.log(store.grade,store.view,"store자료")
    }
    return(
        <div className={headstyle.posi}>
        <ul className={headstyle.fflex}> 
            {ullist.map((el)=> <li className={headstyle.mactive}>
                <a className={headstyle.tar} onClick={(event : React.MouseEvent<HTMLAnchorElement>)=>{
                    event.preventDefault();
                    selectstore(el.grade)
                }}>
                {el.grade}
                <ul className={headstyle.tul}>
                {el.list.map(e=><li className={headstyle.lia}>
                    <a className={headstyle.atag} onClick={(event : React.MouseEvent<HTMLAnchorElement>)=>{
                    event.preventDefault();
                    selectstore(e,false)
                }}>
                    {e}
                    </a>
                    </li>)}
                </ul>
                </a>
            </li>)}
        </ul>
        <div className={headstyle.bbox}></div>
        </div>
    )
}