import './DailyReportManagement.css';

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import {DailyReportManagementData} from "./DailyReportManagementData";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa6";

import ProcessChartData from "./DailyProcessChartData";
import RiskChartData from "./DailyRiskChartData";
import DailyReportCount from "./DailyReportCount";

function DailyReportManagement(props) {

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
        <div className='dailyReportPage'>
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
                        <a href="/citizen/prevent/DailyReportManagement" className='active'>일일업무보고 관리</a>
                        <a href="">안전계획 관리</a>
                        <a href="">시장 서한 답신 관리</a>
                    </div>
                    <a href='/citizen/dangerElement' className=''>유해·위험요인 관리</a>
                    <a href='/citizen/ideaOffer'>재해예방 아이디어</a>
                    <a href=''>시기 도래전 알림서비스</a>
                </nav>
            </div>

            <div className='contents'>
                <div className='title'>
                    <label className='titleName'>일일업무보고 관리</label>
                    <label className='path'>
                        <a href='/'>home</a>
                        <IoIosArrowForward className='arrow'/>
                        <a href='/citizen'>중대시민재해</a>
                        <IoIosArrowForward className='arrow'/>
                        <a href='/citizen/'>중대재해예방 업무지원</a>
                        <IoIosArrowForward className='arrow'/>
                        <a href='/citizen/'>일일업무보고 관리</a>
                    </label>
                </div>
                <div className='main_container'>
                    <div className="dailyDashboard">
                        <div className="kpiCardBox">
                            <div className="kpiCard">
                                <div className="kpiTitle">
                                    <span className="kpiLabel">누적 센서 이벤트</span>
                                    <span className="kpiSub">건수</span>
                                </div>
                                <div className="kpiValue">50</div>
                            </div>
                            <div className="kpiCard">
                                <div className="kpiTitle">
                                    <span className="kpiLabel">미조치 센서</span>
                                    <span className="kpiSub">건수</span>
                                </div>
                                <div className="kpiValue">12</div>
                            </div>
                            <div className="kpiCard">
                                <div className="kpiTitle">
                                    <span className="kpiLabel">조치 진행 중</span>
                                    <span className="kpiSub">건수</span>
                                </div>
                                <div className="kpiValue">25</div>
                            </div>
                            <div className="kpiCard">
                                <div className="kpiTitle">
                                    <span className="kpiLabel">고위험 이벤트</span>
                                    <span className="kpiSub">건수</span>
                                </div>
                                <div className="kpiValue">12</div>
                            </div>
                            <div className="kpiCard">
                                <div className="kpiTitle">
                                    <span className="kpiLabel">오늘 발생</span>
                                    <span className="kpiSub">건수</span>
                                </div>
                                <div className="kpiValue">21</div>
                            </div>
                        </div>

                        <div className='kpiChartBox'>
                            <div className="kpiChart">
                                <div className="kpiChartHeader">
                                    <div className="kpiChartTitle">조치상태</div>
                                    <div className="kpiChartSub">최근 30일 기준</div>
                                </div>

                                <div className="kpiChartBody">
                                    <ProcessChartData />
                                </div>
                            </div>

                            <div className='kpiChart'>
                                <div className="kpiChartHeader">
                                    <div className="kpiChartTitle">위험도별 신고 건수</div>
                                </div>
                                <div className="kpiChartBody" style={{marginTop:'20px'}}>
                                    <RiskChartData />
                                </div>
                            </div>

                            <div className='kpiChart'>
                                <div className="kpiChartHeader">
                                    <div className="kpiChartTitle">월별 신고 건수</div>
                                </div>
                                <div className="kpiChartBody" style={{marginTop:'20px'}}>
                                    <DailyReportCount />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dailyBoard'>
                        <div className='boardCount'>
                            <span>총 게시물: 50</span>
                        </div>

                        <div className='boardBox'>
                            <table className='boardTable'>
                                <caption></caption>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>공장/구역</th>
                                        <th>유형</th>
                                        <th>등급</th>
                                        <th>조치 상태</th>
                                        <th>내용</th>
                                        <th>발생 일시</th>
                                        <th>첨부</th>
                                        <th>조회</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DailyReportManagementData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td className='align-left'>{item.site}</td>
                                            <td>{item.workType}</td>
                                            <td>{item.riskLevel}</td>
                                            <td>{item.actionStatus}</td>
                                            <td className='align-left'><a href='' title={item.title}>{item.title}</a></td>
                                            <td>{item.reportDate}</td>
                                            <td>{item.hasAttachment ? <FaPaperclip/>: ''}</td>
                                            <td>{item.viewCount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='writeBtn'>
                            <button type='button'>작성하기</button>
                            {/* <button type='button'>수정하기</button> */}
                        </div>

                        <div className='pagenation'>
                            <ul>
                                <li className='active'><a href='/'>1</a></li>
                                <li><a href='/'>2</a></li>
                                <li><a href='/'>3</a></li>
                                <li><a href='/'>4</a></li>
                                <li><a href='/'>5</a></li>
                                <li><a href='/'><FaAngleRight className='rightMove'/></a></li>
                                <li><a href='/'><FaAnglesRight className='rightMove'/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyReportManagement;