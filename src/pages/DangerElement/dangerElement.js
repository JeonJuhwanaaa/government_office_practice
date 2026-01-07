import './dangerElement.css';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiResetRightFill } from "react-icons/ri";
import { hazardReportStatus } from "./hazardReportData";
import { PiCalendarDotsThin } from "react-icons/pi";

import HazardChart from "./hazardChart";
import { useEffect, useState } from 'react';

export function DangerElement(props) {

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
        <div className='dangerBody'>
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
                            <a href="/citizen/law/publicFacility">공중이용시설</a>
                            <a href="">공중교통수단</a>
                        </div>
                    <a href="#none" onClick={() => {menuClickEvent("support");}}>중대재해예방 업무지원{isMenuOpen.support ? <FaAngleUp /> : <FaAngleDown />}</a>
                    <div className={`nav-third ${isMenuOpen.support ? "open" : ""}`}>
                        <a href="/citizen/prevent/DailyReportManagement">일일업무보고 관리</a>
                        <a href="">안전계획 관리</a>
                        <a href="">시장 서한 답신 관리</a>
                    </div>
                    <a href='/citizen/dangerElement' className='active'>유해·위험요인 관리</a>
                    <a href='/citizen/ideaOffer'>재해예방 아이디어</a>
                    <a href=''>시기 도래전 알림서비스</a>
                </nav>
            </div>

            <div className='contents'>
                <div className='title'>
                    <label className='titleName'>유해·위험요인 관리</label>
                    <label className='path'>
                        <a href='/'>home</a>
                        <IoIosArrowForward className='arrow' alt='시작날짜' title='시작날짜'/>
                        <a href='/citizen'>중대시민재해</a>
                        <IoIosArrowForward className='arrow' alt='종료날짜' title='종료날짜'/>
                        <a href='/citizen/dangerElement'>유해·위험요인 관리</a>
                    </label>
                </div>

                <div className='searchBox'>
                    <div className='facility'>
                        <div className='facTitle'>시설 선택</div>
                        <div className='facList'>
                            <a href='/'>모든시설</a>
                            <span>｜</span>
                            <a href='/'>교량</a>
                            <span>｜</span>
                            <a href='/'>터널</a>
                            <span>｜</span>
                            <a href='/'>하천</a>
                            <span>｜</span>
                            <a href='/'>항만</a>
                            <span>｜</span>
                            <a href='/'>건축물1</a>
                            <span>｜</span>
                            <a href='/'>건축물2</a>
                            <span>｜</span>
                            <a href='/'>상수도</a>
                            <span>｜</span>
                            <a href='/'>하수도</a>
                        </div>
                    </div>

                    <div className='time'>
                        <div className='timeTitle'>기간 선택</div>
                        <div className='timeList'>
                            <div className='a-tx'>
                                <a href='/'>오늘</a>
                                <span>｜</span>
                                <a href='/'>최근 일주일</a>
                                <span>｜</span>
                                <a href='/'>최근 한달</a>
                            </div>
                            <div className='date-bx'>
                                예) 2024-08-19
                                <input type='text' title='기간선택-검색 시작날짜 입력' maxLength={10}/>
                                <PiCalendarDotsThin className='calendar'/>
                                <span>-</span>
                                <input type='text' title='기간선택-검색 종료날짜 입력' maxLength={10}/>
                                <PiCalendarDotsThin className='calendar'/>
                            </div>
                        </div>
                    </div>

                    <div className='word'>
                        <div className='wordTitle'>검색어</div>
                        <div className='wordWrite'>
                            <input type='text' title='검색어를 입력해주세요' ></input>
                            <button type='button' className='searchBtn'><IoSearch className='searchIcon'/>검색</button>
                            <button type='button' className='resetBtn'><RiResetRightFill className='resetIcon'/>초기화</button>
                        </div>
                    </div>
                </div>

                <div className='boardBox'>
                    <div className='surveyTitle'>대상시설별 유해·위험요인 신고 및 처리현황</div>
                    
                    <table className='boardTable'>
                        <caption></caption>
                        <thead>
                            <tr>
                                <th>시설 구분</th>
                                <th>신고 건수</th>
                                <th>처리 건수</th>
                                <th>처리율</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hazardReportStatus.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.facilityType}</td>
                                    <td>{item.reportedCount}</td>
                                    <td>{item.processedCount}</td>
                                    <td>{item.processRate}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="chartBox">
                        <HazardChart />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default DangerElement;