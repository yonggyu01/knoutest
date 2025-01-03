import React from 'react';
import Side from '../style/navistyle.module.scss'
export default function Sidenavi (){
    return (
        <div className={Side.bool}>
        <div className={Side.gap}>
        <div className={Side.fullwitdh}>
            <div>

            사이드 바는 휴대폰 사이즈에서만 동작하도록 구현하기
            </div>
            <div>
                <h2>
                1학기 
                </h2>
                   <ul>
                    <li>
                        <a>
                            
                        </a>
                    </li>
                   </ul>
            </div>

            <div>
            <h2>
                2학기 
                </h2>
                   <ul>
                    <li>
                        <a>
                           JSP 프로그래밍 
                        </a>
                    </li>
                    <li>
                        <a>
                           자료구조 
                        </a>
                    </li>
                    <li>
                        <a>
                           컴퓨터구조 
                        </a>
                    </li>
                    <li>
                        <a>
                           Unix시스템 
                        </a>
                    </li>
                    <li>
                        <a>
                           시뮬레이션
                        </a>
                    </li>
                   </ul>
            </div>
        </div>
        </div>
        </div>
    )
} 