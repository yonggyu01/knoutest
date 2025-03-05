import React from 'react';
import tdata from './data.module.scss'
import { useNavigate , Link} from 'react-router-dom'
import useStore from '../../store/store';
export default function Data1 (){
    const store = useStore(store => store)

    const mytests = [
        {   subject : '알고리즘',
            data : [
                {
                img : '3.png',
                link : "datainner",
                text : '워크북',
                title : 'algotest',
            },
        ]
        },
        {   subject : 'JSP프로그래밍',
            data : [
                {
                img : '3.png',
                link : "datainner",
                text : '워크북',
                title : 'testjspwork',
            },
                {
                img : '3.png',
                link : "datainner",
                text : '2017년',
                title : 'test2017jsp',
            },
                {
                img : '3.png',
                link : "datainner",
                text : '2018년',
                title : 'test2018jsp',
            },
              
            {
                img : '3.png',
                link : "datainner",
                text : '2019년',
                title : 'test2019jsp',
            },
            ]        
        },
        {   subject : '자료구조',
            data : [
            {
                img : '3.png',
                link : "datainner",
                text : '형성평가문제',
                title : 'testdbpp',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2016년',
                title : 'test2016db',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2017년',
                title : 'test2017db',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2018년',
                title : 'test2018db',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2019년',
                title : 'test2019db',
            },
            ]         
        },
        {   subject : '컴퓨터구조',
            data : [
                {
                img : '3.png',
                link : "datainner",
                text : '워크북',
                title : 'testcswork',
            },
            {
            img : '3.png',
            link : "datainner",
            text : '2017년',
            title : 'test2017cs',
        },
            {
            img : '3.png',
            link : "datainner",
            text : '2018년',
            title : 'test2018cs',
        },
                {
                img : '3.png',
                link : "datainner",
                text : '2019년',
                title : 'test2019cs',
            },
            ]        
        },
        {   subject : 'UNIX시스템',
            data : [
                {
                    img : '3.png',
                    link : "datainner",
                    text : 'unix 워크북',
                    title : 'testunixwork',
                },
                {
                img : '3.png',
                link : "datainner",
                text : '2017 ',
                title : 'test2017unix',
            },
                {
                img : '3.png',
                link : "datainner",
                text : '2018 ',
                title : 'test2018unix',
            },
                {
                img : '3.png',
                link : "datainner",
                text : '2019 ',
                title : 'test2019unix',
            },
            ]  
        },
        {   subject : '시뮬레이션',
            data : [
                {
                img : '3.png',
                link : "datainner",
                text : '워크북',
                title : 'testsimulwork',
            },
                {
                img : '3.png',
                link : "datainner",
                text : '2017',
                title : 'testsimul2017',
            },
                {
                img : '3.png',
                link : "datainner",
                text : '2018',
                title : 'testsimul2018',
            },
                {
                img : '3.png',
                link : "datainner",
                text : '2019',
                title : 'testsimul2019',
            },
            ]  
        },
       
    ]
    // const navigate = useNavigate();
    function navititle(a : string){
         switch(a){
           case 'test2017jsp' : 
           store.setsubject('JSP')
           store.setyear(2017)
           break;
           case 'testdbpp' :
            store.setsubject('형성평가')
            store.setyear(2024)
           break;
           case 'test2016db' :
            store.setsubject('자료구조')
            store.setyear(2016)
           break;
           case 'test2017db' :
            store.setsubject('자료구조')
            store.setyear(2017)
           break;
           case 'test2018db' :
            store.setsubject('자료구조')
            store.setyear(2018)
           break;
           case 'test2019db' :
            store.setsubject('자료구조')
            store.setyear(2019)
           break;
           case 'test2019cs' :
            store.setsubject('컴퓨터구조')
            store.setyear(2019)
           break;
           case 'testsimulwork' :
            store.setsubject('시뮬레이션')
            store.setyear(2019)
           break;
           case 'algotest' :
            store.setsubject('알고리즘')
            store.setyear(2019)
           break;
        }   
        
    }
    function listmaker() {
        let a = store.subject   
        let result = mytests.filter( b => {return b.subject === a})
        return result[0].data  
    }
    

    
    return (
        <div className={tdata.fwrap}>
          
            <div className={tdata.wraping}>
          
            <div className={tdata.icons}>
                   {store.grade==="학년"? <h1>학년을 선택해주세요</h1> : <h1>{store.grade} </h1>}
                   {store.subject==="과목"? <h1>과목을 선택해주세요 </h1> : <h1>과목 명 : {store.subject}</h1>}
                    <ul>
                     {store.subject!=="과목" && mytests.filter( b => {return b.subject === store.subject})[0].data.map(b=>  <li className={tdata.lilist}> 
                        <Link to={`${b.link}/${b.title}`} onClick={()=>{
                       navititle(b.title)
                    }}>
                          <img src={b.img}/>
                          <p>{b.text}</p>
                         </Link>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}