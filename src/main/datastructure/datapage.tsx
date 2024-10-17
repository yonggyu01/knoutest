import React from 'react';
import data from './data.module.scss'
import { useNavigate , Link} from 'react-router-dom'
export default function Datapage (){
    const mytest = [
        {
            img : '3.png',
            link : "datainner",
            text : '2017년 JSP',
            data : 'test2017jsp'
        },
        {
            img : '3.png',
            link : "datainner",
            text : '2017년 자료구조',
              data : 'test2017db'
        },
        {
            img : '3.png',
            link : "datainner",
            text : '2018년 자료구조',
               data : 'test2018db'
        },
        {
            img : '3.png',
            link : "datainner",
            text : '2019년 자료구조',
               data : 'test2019db'
        },
    ]
    const navigate = useNavigate();

    return (
        <div className={data.fwrap}>
            <h1> 안녕하세요 여기에 생성할게요</h1>
            <div className={data.wraping}>
                <ul className={data.icons}>
                  { mytest.map((a)=>{return <li className={data.lilist}>
                    <Link to={`${a.link}/${a.data}`}>
                    <img src={a.img}/>
                    <p>{a.text}</p>
                    </Link>
                    </li>})}
                </ul>
            </div>
        </div>
    )
}