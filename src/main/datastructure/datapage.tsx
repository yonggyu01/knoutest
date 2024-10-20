import React from 'react';
import data from './data.module.scss'
import { useNavigate , Link} from 'react-router-dom'
import useStore from '../../store/store';
export default function Datapage (){
    const store = useStore(store => store)

    const mytests = [
        {   subject : 'JSP프로그래밍',
            data : [{
                img : '3.png',
                link : "datainner",
                text : '2017년 JSP',
                title : 'test2017jsp',
            },
            ]        
        },
        {   subject : '자료구조',
            data : [
            {
                img : '3.png',
                link : "datainner",
                text : '형성평가문제 모음',
                title : 'testdbpp',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2016년 자료구조',
                title : 'test2016db',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2017년 자료구조',
                title : 'test2017db',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2018년 자료구조',
                title : 'test2018db',
            },
            {
                img : '3.png',
                link : "datainner",
                text : '2019년 자료구조',
                title : 'test2019db',
            },
            ]         
        },
        {   subject : '컴퓨터구조',
            data : [{
                img : '3.png',
                link : "datainner",
                text : '2019년 컴퓨터구조',
                title : 'test2019cs',
            },
            ]        
        },
        {   subject : 'UNIX시스템',
            data : [{
                img : '3.png',
                link : "",
                text : '',
                title : '',
            },
            ]  
        },
        {   subject : '시뮬레이션',
            data : [{
                img : '3.png',
                link : "",
                text : '',
                title : '',
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
        }   
        
    }
    return (
        <div className={data.fwrap}>
            <h1> 안녕하세요 기말고사 시험공부할겸 만들었습니다.</h1>
            <h1> 디자인은 귀찮은 관계로... 천천히 변경하거나 해보겠습니다..</h1>
            <div className={data.wraping}>
          
                {mytests.map((a)=> <div className={data.icons}>
                    <h1>과목 명 : {a.subject}</h1>
                    <ul>
                        {a.data.map((b)=><li className={data.lilist}>
                        <Link to={`${b.link}/${b.title}`} onClick={()=>{
                       navititle(b.title)
                    }}>
                          <img src={b.img}/>
                          <p>{b.text}</p>
                         </Link>
                        </li>)}
                    </ul>
                </div>)}
            </div>
        </div>
    )
}