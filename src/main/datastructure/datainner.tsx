import Headnavi from "../../components/Headnavi"
import testdata from './data.module.scss'
import { Testtype } from "../../model"
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
            q : "",
            q1 : '' ,
            a : [""],
            r : 0,
            img:''
            ,  summary:''
        },

    ]

    return(
        <div>
            <Headnavi/>
            {/* 일단 문제 하나만 생성해보기 */}
            <div className={testdata.wrap1}>
            <h2> 문제 : 다음이 설명하는 http요청 방식은 무엇인가?</h2>
            <p>원하는 방식으로 인코딩된 데이터를 요청 메시지의 몸체에 포함하여 전송하면서 자원을 요청하는 경우 사용됨 </p>
            <div className={testdata.select1}>
            <p><input type="radio" value='1' name="1" /> <p>GET</p></p>
            <p><input type="radio" value='2' name="1" /> <p>HEAD</p></p>
            <p><input type="radio" value='3' name="1" /> <p>POST</p></p>
            <p><input type="radio" value='4' name="1" /> <p>FTP</p></p>
            </div>
            <details className={testdata.correct}>
                <summary>
                    정답 확인하기 
                    </summary> 

                    </details>
            </div>
        </div>
    )
}