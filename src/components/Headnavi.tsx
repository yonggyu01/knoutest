import React from 'react'
import navistyle from '../style/navistyle.module.scss'
import { Link, useParams } from 'react-router-dom';
import useStore from '../store/store';
import Headlist from './headerlist'
export default function Headnavi (){
    // const [subject, setsubject] = React.useState('과목')
    const store = useStore(store => store)
    const subject = store.subject
    const year = store.year
    // const [year, setyear] = React.useState(2024)
    const [render, setrender] = React.useState(false)
    const { data } = useParams();
    console.log('헤드')
    

    return(
        <div className={navistyle.flexwrap} >   
            <div className={navistyle.topwrap}>
            <Link to="/" className={navistyle.logo} >
                <img src='/기출문제사이트.png'/>
                방송통신대 기출문제</Link>
            <div className={navistyle.right}>
            <a > 나의 학습방</a>
            <a> 로그인 / 로그아웃</a>
            </div>
            {/* <h1>과목 :  {subject} </h1>
            <h2>년도 : {year} </h2>
            <h2>2학기 </h2> */}
            </div>
            <Headlist></Headlist>

        </div>  
    )
}