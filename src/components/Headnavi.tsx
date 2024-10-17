import React from 'react'
import navistyle from '../style/navistyle.module.scss'
import { useParams } from 'react-router-dom';
import useStore from '../store/store';
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
            <h1>과목 :  {subject} </h1>
            <h2>년도 : {year} </h2>
            <h2>2학기 </h2>

        </div>  
    )
}