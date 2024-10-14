import Headnavi from "../../components/Headnavi"
import testdata from './data.module.scss'
import { Testtype, Testlist } from "../../model"
import React from 'react';
export default function Datainner (){
   
    const test2017jsp : Testtype[] = [
        {
            q : "다음이 설명하는 http요청 방식은 무엇인가?",
            q1 : "원하는 방식으로 인코딩된 데이터를 요청 메시지의 몸체에 포함하여 전송하면서 자원을 요청하는 경우 사용됨",
            a : ["GET","HEAD","POST","FTP"],
            r : 3,
            img:'',
            summary:''
        },
        {
            q : "Eclipse를 이용한 웹 프로젝트의 배포가 의미하는 것은?",
            q1 : "",
            a : ["웹 프로젝트 폴더를 압춝 파일로 만드는 것이다.","개발한 웹 프로젝트를 웹 컨테이너에 내보내는 것이다.","웹 컨테이너를 서버로 등록시키는 것이다.","버퍼의 내용을 일차적으로 클라이언트에 보내는 것이다."],
            r : 2,
            img:'',
              summary:''
        },
        {
            q : "jSP 페이지에서 사용할 메소드나 변수를 선언하기 위한 태그는 다음 중 어느 것인가?",
            q1 : "",
            a : ["<% ... %>","<%!... %>", "<%@ ... %>", " <%# ... %>"],
            r : 2,
            img:'',
              summary:''
        },
        {
            q : "서블릿 클래스에서 doGet() 메서드의 인자는 무엇인가?",
            q1 : "",
            a : ["request 1개", "response 1개", " request와 response", "인자가 없음"],
            r : 3,
            img:'',  
            summary:''
        },
        {
            q : "다음은 버퍼가 차면 내용을 클라이언트로 보내고 버퍼를 비우라는 의미를 가진다. 빈칸에 들어갈 단어는 무엇인가?",
            q1 : '<%@ page ____ = "true" %> ' ,
            a : ["flush","autoFlush","buffer","autoBuffer"],
            r : 2,
            img:'',
              summary:''
        },
        {
            q : "다음 중 JSP의 내장 객체가 아닌 것은?",
            q1 : '' ,
            a : ["request","response","out","cookie"],
            r : 4,
            img:'',
              summary:''
        },
        {
            q : "including.jsp 페이지를 요청했을 때, 클라이언트의 브라우저에서 표시되는 결과는 무엇인가?",
            q1 : '' ,
            a : ["included.jsp : 1000"," including.jsp : 20 \n including.jsp","including.jsp : 20 \n included.jsp : 1000 \n including.jsp : 20", "including.jsp : 20 \n included.jsp : 1000 \n including.jsp : 1000"],
            r : 3,
            img:'jsp1.jpg',
              summary:''
        },
        {
            q : "including.jsp와 included.jsp 페이지 사이에서 공유될 수 없는 영역은 무엇인가?",
            q1 : '' ,
            a : ["page","requese","session","application"],
            r : 1,
            img:'jsp1.jpg',
              summary:''
        },
        {
            q : "jsp 페이지의 모듈화를 위해 사용하는 방법이라고 할 수 없는 것은?",
            q1 : '' ,
            a : ["page지시어","include 지시어","include 액션태그 ", "prelude와 coda"],
            r : 1,
            img:'',  summary:''
        },
        {
            q : "<jsp:forward .../> 액션의 처리를 바르게 설명한 것은?",
            q1 : '' ,
            a : ["실행 결과의 맨 앞이나 맨 뒤에 자동으로 코드를 포함시킨다.","속성으로 지정된 페이지의 실행 결과를 태그가 위치한 부분에 삽입시킨다.","<jsp:include> 액션의 서브 요소로만 사용된다.","페이지의 실행이 종료되고 새로운 페이지로의 이동이 일어난다"],
            r : 4,
            img:'',
              summary:''
        },
        {
            q : "쿠키의 유효 시간에 관한 설명으로 올바른 것은?",
            q1 : '' ,
            a : ["클라이언트 컴퓨터에서 쿠키가 유지되는 기간이다.","쿠키의 유효시간이 음수라면 영구히 보관된다","클라이언트의 추가 요청이 없어도 쿠키가 보존되는 기간이다."," 출력버퍼에서 쿠키 값을 변경할 수 있는 최대 시간이다."],
            r : 1,
            img:'',
              summary:''
        },
        {
            q : "다음 코드의 의미를 바르게 설명한 것은?",
            q1 : '<% Cookie cookie= new Cookie("name","value"); \n response.addCookie(cookie); %>' ,
            a : ["쿠키를 만들어 요청 메시지의 헤더에 추가한다"," 쿠키를 만들어 응답 메시지의 헤더에 추가한다","쿠키를 만들어 응답 메시지의 몸체에 추가한다.","클라이언트가 보낸 요청 메시지로부터 쿠키 값을 읽는다."],
            r : 2,
            img:'',
              summary:''
        },
        {
            q : "세션을 사용하여 로그인/ 로그아웃을 처리하는 jsp 페이지를 구현하려고 한다. 다음중 로그인 처리에 필요한 작업은 무엇인가?",
            q1 : '' ,
            a : ["request 영역에 session 객체를 저장한다.","session 객체에 타임아웃 시간을 수정한다.","session 객체에 사용자 확인을 위한 속성을 추가한다.","session 객체를 삭제한다."],
            r : 3,
            img:''
            ,  summary:''
        },
        {
            q : "다음중 세션이 종료되는 상황이 아닌 것은?",
            q1 : '' ,
            a : ["클라이언트가 웹 브라우저를 종료한다.","세션의 유효시간 동안 클라이언트의 추가 요청이 없었다.","JSP페이지에서 session.invaildate() 를 실행한다.","jsp 페이지에서 session 객체에 저장된 모든 속성을 삭제하였다."],
            r : 4,
            img:''
            ,  summary:''
        },
        {
            q : "위에서 사용된 자바빈 객체에 관한 설명으로 잘못된 것은?",
            q1 : '' ,
            a : ["member.MemberInfo는 클래스의 이름에 해당한다.","meminfo라는 이름의 객체가 존재하지 않으면 자바빈 객체를 생성한다.","객체가 가진 속성 name과 age에 값을 지정하고 있다.","객체의 사용 범위가 page이므로 해당 페이지에서만 사용할 수 있다."],
            r : 4,
            img:'jsp2.jpg'
            ,  summary:''
        },
        {
            q : "자바빈 객체의 이름을 출력하기 위해 밑줄 친 부분에 들어갈 적당한 내용은>?",
            q1 : '' ,
            a : ["<jsp:getProperty name='meminfo' property='name' />","<jsp:getParameter id='meminfo' property='name' />","<jsp:setProperty name='meminfo' property='name' />","<out.print(meminfo.getName()); >"],
            r : 1,
            img:'jsp2.jpg'
            ,  summary:''
        },
        {
            q : "표현언어(EL)의 사용에 관한 설명이다. 잘못된 것은?",
            q1 : '' ,
            a : ["표현식을 대신하여 자주 사용된다","태그의 속성값을 지정할 때 표현 언어 수식을 사용한다","표현 언어의 내장 객체와 jsp의 내장객체는 다른 것이다.","스크립트 요소의 내부에서 사용해야 한다."],
            r : 4,
            img:''
            ,  summary:''
        },
        {
            q : "<%= request.getParameter('name') %> 과 같은 의미를 가지는 표현 언어 수식을 내장 객체 param을 사용하여 표현하면 무엇인가?",
            q1 : '' ,
            a : ["$( param.name )","$( param[name] )","$( param.name )","$( param[name] )"],
            r : 1,
            img:''
            ,  summary:''
        },
        {
            q : "코어 라이브러리를 사용하려면 지시어를 추가해야 한다. 밑줄 친 ㄱ에 들어가야할 내용은",
            q1 : '' ,
            a : ["<%@ import", "<%= page", "<%@ taglib","<%# taglib"],
            r : 3,
            img:'jsp3.JPG'
            ,  summary:''
        },
        {
            q : "밑줄친 ㄴ에는 흐름제어를 위한 태그가 들어가야 한다 적당한 것은 무엇인가?.",
            q1 : '' ,
            a : ["c:choose","c:forEach","x:import","x:forTokens"],
            r : 2,
            img:'jsp3.JPG'
            ,  summary:''
        },
        {
            q : "다음중 MYSQL과 연동하는 JDBC프로그래밍 작업을 위한 것은 무엇인가?",
            q1 : '' ,
            a : ["Oracle 사이트에서 php-mysql패키지를 다운받아 설치함","Eclipse 사이트에서 Tomcat을 다운받아 설치함","MySQL사이트에서 Connector/J를 다운받아 설치함","MYSQL 사이트에서 MYSQL Shell을 다운받아 설치함"],
            r : 3,
            img:''
            ,  summary:''
        },
        {
            q : "MVC 패턴을 적용하여 컨트롤러를 구현할 때 커맨드 패턴을 적용할 수 있다. 이때 커맨드와 관련된 정보를 별도의 설정파일로 만든다면 어떤 장점이 있는가?",
            q1 : '' ,
            a : ["새로운 커맨드를 추가하면 설정파일을 다시 읽어야 한다","새로운 커맨드를 추가할 경우 소스코드를 수정해야 한다","새로운 커맨드를 추가되도 설정파일을 수정할 필요가 없다","새로운 커맨드를 추가되도 소스코드를 수정할 필요가 없다"],
            r : 4,
            img:''
            ,  summary:''
        },
        {
            q : "다음은 회원정보를 저장을 위한 자바빈 클래스이다. 속성 id의 getter 메서드와 setter 메서드를 올바르게 작성한 것은?",
            q1 : '' ,
            a : ["public String getId() {return id;} public void setId(String id){ id = id;}" ,"publci void getId(String id) {this.id = id; }  public String setId() { return id; }"," public String getId() { return this; }  public void setId(String id) {this.id = id;}", "public String getId() { return id;}  public void setId(String id) { this.id = id; }"],
            r : 4,
            img:'jsp4.JPG'
            ,  summary:''
        },
        {
            q : "세션 영역에 회원 아이디를 'ID'라는 이름의  속성으로 저장하려 한다. 밑출 친 ㄱ에 들어가야 할 내용은?",
            q1 : '' ,
            a : ["session.getAttribute","session.setAttribute","cookie.getAttribute","cookie.setAttribute"],
            r : 2,
            img:'jsp5.JPG'
            ,  summary:''
        },
        {
            q : "로그인 처리가 끝난 후 다음 페이지로 이동하기 위해 밑줄 친 ㄴ에 들어가야 할 내용은?",
            q1 : '' ,
            a : ["request.forward","request.sendRedirect","response.forward","response.sendRedirect"],
            r : 4,
            img:'jsp5.JPG'
            ,  summary:''
        },

    ]
    const test2017db :Testtype[] =[
        {
            q : "아래의 문장을 수식으로 표현한 것으로 알맞은 것은?",
            q1 : '' ,
            a : ["R = P(D), (R: 결과, D : 자료, P : 처리)","I = P(R) , (I : 정보, R : 결과, P : 처리)","P = R(D), (R : 결과, D:자료, P : 처리)", "I =P(D) , (I : 정보, D: 자료, P : 처리)"],
            r : 4,
            img:'자료구조2017.JPG'
            ,  summary:''
        },
        {
            q : "현실 세계에서 관찰이나 측정을 통해 수집된 값이나 사실을 무엇이라 하는가?",
            q1 : '' ,
            a : ["자료","정보","자료구조","추상화"],
            r : 1,
            img:''
            ,  summary:''
        },
        {
            q : "",
            q1 : '' ,
            a : [""],
            r : 0,
            img:''
            ,  summary:''
        },
        {
            q : "",
            q1 : '' ,
            a : [""],
            r : 0,
            img:''
            ,  summary:''
        },
        {
            q : "",
            q1 : '' ,
            a : [""],
            r : 0,
            img:''
            ,  summary:''
        },
        {
            q : "",
            q1 : '' ,
            a : [""],
            r : 0,
            img:''
            ,  summary:''
        },
      
    ]
    const subject:Testlist = ['jsp',test2017jsp] 
    const [checkvalue, setcheckvalue] = React.useState(Array(test2017jsp.length).fill(null)) //정답 저장할곳
    function checkresult (idx : number, value : number){
            const newSelectedAnswers = [...checkvalue];
            newSelectedAnswers[idx] = value; // 선택한 값을 저장
            setcheckvalue(newSelectedAnswers);
         
    }
    function resultcheck(idx:number,t:Testtype){
        checkvalue[idx]==t.r?  window.alert('정답입니다.') : window.alert('오답입니다.')   
        }
    return(
        <div>
            <Headnavi/>
            {/* 일단 문제 하나만 생성해보기 */}
            {subject[1].map((a,idx)=> {return <div className={testdata.wrap1}> 
            <h2>{a.q}</h2>
            <p>{a.q1 && a.q1 }</p>
            {a.img && <img src={a.img} /> }
            <div className={testdata.select1}>
            {  a.a.map((el,index)=>(
                <div><input type="radio" value={index+1} name={String(idx)} onChange={()=>{
                    checkresult(idx,index+1)
                }} /> {el.length <10 ? <p>{el}</p> : <p className={testdata.divide}>{el}</p> }</div>
            )
            )}
            </div>
            <details className={testdata.correct} onClick={()=>{
               resultcheck(idx,a)
            }}>
                <summary>   
                    정답 확인하기 
                    </summary> 
                        {a.r}                                        
                    </details>
            </div>})}

            
         
        </div>
    )
}