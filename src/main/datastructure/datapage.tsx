import React from 'react';
import data from './data.module.scss'
export default function Datapage (){
    const mytest = [
        {
            img : '3.png',
            link : "datainner",
            text : '2018년 모의고사'
        },
        {
            img : '3.png',
            link : "datainner",
            text : '2018년 모의고사'
        },
        {
            img : '3.png',
            link : "datainner",
            text : '2018년 모의고사'
        },
    ]
    return (
        <div className={data.fwrap}>
            <h1> 안녕하세요 여기에 생성할게요</h1>
            <div className={data.wraping}>
                <ul className={data.icons}>
                  { mytest.map((a)=>{return <li className={data.lilist}>
                    <a href={a.link}>
                    <img src={a.img}/>
                    <p>{a.text}</p>
                    </a>
                    </li>})}
                </ul>
            </div>
        </div>
    )
}