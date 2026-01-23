import './PublicFacility.css';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiResetRightFill } from "react-icons/ri";
import { PiCalendarDotsThin } from "react-icons/pi";
import { useEffect, useState } from 'react';

function PublicFacility(props) {

    const [isMenuOpen,setIsMenuOpen] = useState({
            target: false,
            law: false,
            support: false,
    });

    const menuClickEvent = (key) => {
        setIsMenuOpen(prev => (
            { ...prev, [key]: !prev[key] }
        ));
    };

    return (
        <div className='pf_body'>
            <div className='sidebar'>
                <div className='departmentName'>중대시민재해</div>
                <nav className='navbar'>
                    <a href="#none" onClick={() => {menuClickEvent("open");}}>중대시민재해 대상 관리{isMenuOpen.open ? <FaAngleUp /> : <FaAngleDown />}</a>
                        <div className={`nav-third ${isMenuOpen.open ? "open" : ""}`}>
                            <a href="">의료·제조물</a>
                            <a href="">공중이용시설</a>
                            <a href="">공중교통수단</a>
                        </div>

                    <a href="#none" onClick={() => {menuClickEvent("law");}}>법 의무 이행사항 관리{isMenuOpen.law ? <FaAngleUp /> : <FaAngleDown />}</a>
                        <div className={`nav-third ${isMenuOpen.law ? "open" : ""}`}>
                            <a href="">의료·제조물</a>
                            <a href="" className='active'>공중이용시설</a>
                            <a href="">공중교통수단</a>
                        </div>
                    <a href="#none" onClick={() => {menuClickEvent("support");}}>중대재해예방 업무지원{isMenuOpen.support ? <FaAngleUp /> : <FaAngleDown />}</a>
                    <div className={`nav-third ${isMenuOpen.support ? "open" : ""}`}>
                        <a href="/citizen/prevent/DailyReportManagement">일일업무보고 관리</a>
                        <a href="">안전계획 관리</a>
                        <a href="">시장 서한 답신 관리</a>
                    </div>
                    <a href='/citizen/dangerElement'>유해·위험요인 관리</a>
                    <a href='/citizen/ideaOffer'>재해예방 아이디어</a>
                    <a href=''>시기 도래전 알림서비스</a>
                </nav>
            </div>

            <div className='contents'>
                <div className='title'>
                    <label className='titleName'>공중이용시설</label>
                    <label className='path'>
                        <a href='/'>home</a>
                        <IoIosArrowForward className='arrow'/>
                        <a href='/citizen'>중대시민재해</a>
                        <IoIosArrowForward className='arrow'/>
                        <a href='/citizen/'>법 의무 이행사항 관리</a>
                        <IoIosArrowForward className='arrow'/>
                        <a href='/citizen/'>공중이용시설</a>
                        <IoIosArrowForward className='arrow'/>
                        <a href='/citizen/'>안전점검</a>
                    </label>
                </div>

                <div className='fac_container'>
                    <div className='sub_tab'>
                        <a href=''>안전인력</a>
                        <a href=''>안전예산</a>
                        <a href='' className='active'>안전점검</a>
                        <a href=''>안전계획</a>
                        <a href=''>도급·용역·위탁</a>
                        <a href=''>관계법령 의무이행</a>
                        <a href=''>안전교육 및 훈련</a>
                        <a href=''>점검·보고</a>
                        <a href=''>재발방지대책 수립 이행</a>
                        <a href=''>개선·시정사항</a>
                    </div>

                    <div className='sub_container'>
                        <div className='sub_title'>1. 정기 안전점검</div>
                        
                        <div className='width_extra'>
                            <table className='sub_table'>
                                <caption></caption>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>공장명</th>
                                        <th rowSpan={2}>공정/설비</th>
                                        <th colSpan={3}>20년 정기 안전점검</th>
                                        <th colSpan={3}>21년 정기 안전점검</th>
                                        <th colSpan={3}>22년 정기 안전점검</th>
                                    </tr>
                                    <tr>
                                        <th>점검일시</th>
                                        <th>점검비용</th>
                                        <th>점검결과(등급)</th>
                                        <th>점검일시</th>
                                        <th>점검비용</th>
                                        <th>점검결과(등급)</th>
                                        <th>점검일시</th>
                                        <th>점검비용</th>
                                        <th>점검결과(등급)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={3}>제1공장</td>
                                        <td style={{textAlign:'left'}}>성형기 A라인</td>
                                        <td>2020-03-15</td><td>3,200,000원</td><td>B</td>
                                        <td>2021-03-18</td><td>3,400,000원</td><td>B</td>
                                        <td>2022-03-20</td><td>3,600,000원</td><td>A</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>컨베이어(이송라인) 1구간</td>
                                        <td>2020-04-10</td><td>2,500,000원</td><td>C</td>
                                        <td>2021-04-12</td><td>2,700,000원</td><td>B</td>
                                        <td>2022-04-14</td><td>2,900,000원</td><td>B</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>집진기(분진 폭발/필터 상태) #1</td>
                                        <td>2020-05-05</td><td>2,300,000원</td><td>B</td>
                                        <td>2021-05-07</td><td>2,500,000원</td><td>B</td>
                                        <td>2022-05-09</td><td>2,700,000원</td><td>A</td>
                                    </tr>

                                    <tr>
                                        <td rowSpan={3}>제2공장</td>
                                        <td style={{textAlign:'left'}}>혼합·배합기</td>
                                        <td>2020-03-22</td><td>3,100,000원</td><td>B</td>
                                        <td>2021-03-25</td><td>3,300,000원</td><td>A</td>
                                        <td>2022-03-27</td><td>3,500,000원</td><td>A</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>건조로 1호기</td>
                                        <td>2020-04-18</td><td>2,400,000원</td><td>C</td>
                                        <td>2021-04-20</td><td>2,600,000원</td><td>B</td>
                                        <td>2022-04-22</td><td>2,800,000원</td><td>B</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>전기실(분전반) A</td>
                                        <td>2020-05-12</td><td>2,200,000원</td><td>B</td>
                                        <td>2021-05-14</td><td>2,400,000원</td><td>B</td>
                                        <td>2022-05-16</td><td>2,600,000원</td><td>A</td>
                                    </tr>

                                    <tr>
                                        <td rowSpan={3}>제3공장</td>
                                        <td style={{textAlign:'left'}}>소성로 1호기</td>
                                        <td>2020-02-28</td><td>3,500,000원</td><td>A</td>
                                        <td>2021-03-02</td><td>3,700,000원</td><td>A</td>
                                        <td>2022-03-04</td><td>3,900,000원</td><td>A</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>냉각·선별 구역</td>
                                        <td>2020-04-01</td><td>2,600,000원</td><td>B</td>
                                        <td>2021-04-03</td><td>2,800,000원</td><td>B</td>
                                        <td>2022-04-05</td><td>3,000,000원</td><td>B</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>적재장(지게차 동선 구역)</td>
                                        <td>2020-05-20</td><td>2,300,000원</td><td>C</td>
                                        <td>2021-05-22</td><td>2,500,000원</td><td>B</td>
                                        <td>2022-05-24</td><td>2,700,000원</td><td>B</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='sub_title' style={{marginTop:'20px'}}>2. 정밀 안전점검</div>

                        <div className='width_extra'>
                            <table className='sub_table'>
                                <caption></caption>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>공장명</th>
                                        <th rowSpan={2}>공정/설비</th>
                                        <th colSpan={3}>20년 정밀 안전점검</th>
                                        <th colSpan={3}>21년 정밀 안전점검</th>
                                        <th colSpan={3}>22년 정밀 안전점검</th>
                                    </tr>
                                    <tr>
                                        <th>점검일시</th>
                                        <th>점검비용</th>
                                        <th>점검결과(등급)</th>
                                        <th>점검일시</th>
                                        <th>점검비용</th>
                                        <th>점검결과(등급)</th>
                                        <th>점검일시</th>
                                        <th>점검비용</th>
                                        <th>점검결과(등급)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={3}>제1공장</td>
                                        <td style={{textAlign:'left'}}>성형기 A라인</td>
                                        <td>2020-06-12</td><td>7,800,000원</td><td>B</td>
                                        <td>2021-06-15</td><td>8,200,000원</td><td>B</td>
                                        <td>2022-06-18</td><td>8,600,000원</td><td>A</td>
                                    </tr>
                                   <tr>
                                        <td style={{textAlign:'left'}}>컨베이어(이송라인) 1구간</td>
                                        <td>2020-07-05</td><td>6,500,000원</td><td>C</td>
                                        <td>2021-07-08</td><td>6,900,000원</td><td>B</td>
                                        <td>2022-07-10</td><td>7,300,000원</td><td>B</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>집진기(분진 폭발/필터 상태) #1</td>
                                        <td>2020-08-02</td><td>6,200,000원</td><td>B</td>
                                        <td>2021-08-05</td><td>6,600,000원</td><td>B</td>
                                        <td>2022-08-07</td><td>7,000,000원</td><td>A</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3}>제2공장</td>
                                        <td style={{textAlign:'left'}}>혼합·배합기</td>
                                        <td>2020-06-20</td><td>8,100,000원</td><td>B</td>
                                        <td>2021-06-23</td><td>8,500,000원</td><td>A</td>
                                        <td>2022-06-25</td><td>8,900,000원</td><td>A</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>건조로 1호기</td>
                                        <td>2020-07-15</td><td>6,800,000원</td><td>C</td>
                                        <td>2021-07-18</td><td>7,200,000원</td><td>B</td>
                                        <td>2022-07-20</td><td>7,600,000원</td><td>B</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>전기실(분전반) A</td>
                                        <td>2020-08-10</td><td>6,400,000원</td><td>B</td>
                                        <td>2021-08-13</td><td>6,800,000원</td><td>B</td>
                                        <td>2022-08-15</td><td>7,200,000원</td><td>A</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3}>제3공장</td>
                                        <td style={{textAlign:'left'}}>소성로 1호기</td>
                                        <td>2020-05-28</td><td>8,500,000원</td><td>A</td>
                                        <td>2021-05-31</td><td>8,900,000원</td><td>A</td>
                                        <td>2022-06-02</td><td>9,300,000원</td><td>A</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>냉각·선별 구역</td>
                                        <td>2020-07-01</td><td>7,000,000원</td><td>B</td>
                                        <td>2021-07-04</td><td>7,400,000원</td><td>B</td>
                                        <td>2022-07-06</td><td>7,800,000원</td><td>B</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'left'}}>적재장(지게차 동선 구역)</td>
                                        <td>2020-08-18</td><td>6,700,000원</td><td>C</td>
                                        <td>2021-08-21</td><td>7,100,000원</td><td>B</td>
                                        <td>2022-08-23</td><td>7,500,000원</td><td>B</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicFacility;