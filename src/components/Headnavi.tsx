import React from 'react'
import navistyle from '../style/navistyle.module.scss'
export default function Headnavi (){
    const [subject, setsubject] = React.useState('과목')

    return(
        <div className={navistyle.flexwrap} >   
            <h1>과목 :  {subject} </h1>
            <h2>3학년 </h2>
            <h2>2학기 </h2>

        </div>  
    )
}