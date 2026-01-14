import './FieldSensor.css';

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

function FieldSensor(props) {

    const [isMenuOpen,setIsMenuOpen] = useState({
        target: false,
        law: false,
        support: true,
    });

    const menuClickEvent = (key) => {
        setIsMenuOpen(prev => (
            { ...prev, [key]: !prev[key] }
        ));
    };

    return (
        <div className='fieldSensorPage'>
            <div className='sidebar'>
                <div className='departmentName'>중대산업재해</div>
                <nav className='navbar'>
                    <a href="#none" onClick={() => {menuClickEvent("open");}}>중대산업재해 대상 관리{isMenuOpen.open ? <FaAngleUp /> : <FaAngleDown />}</a>
                        <div className={`nav-third ${isMenuOpen.open ? "open" : ""}`}>
                            <a href="">사업장</a>
                            <a href="">공공 공사장</a>
                        </div>

                    <a href="#none" onClick={() => {menuClickEvent("law");}}>법 의무 이행사항 관리{isMenuOpen.law ? <FaAngleUp /> : <FaAngleDown />}</a>
                        <div className={`nav-third ${isMenuOpen.law ? "open" : ""}`}>
                            <a href="">사업장</a>
                            <a href="">공공 공사장</a>
                        </div>
                    <a href="#none" onClick={() => {menuClickEvent("support");}}>중대재해예방 업무지원{isMenuOpen.support ? <FaAngleUp /> : <FaAngleDown />}</a>
                    <div className={`nav-third ${isMenuOpen.support ? "open" : ""}`}>
                        <a href="/industry/IndoorMonitoring">실내 모니터링 관리</a>
                        <a href="/citizen/prevent/DailyReportManagement">일일업무보고 관리</a>
                        <a href="">안전계획 관리</a>
                        <a href="">시장 서한 답신 관리</a>
                        <a href="/industry/FieldSensor" className='active'>현장센서 관리</a>
                    </div>
                    <a href='/citizen/dangerElement'>유해·위험요인 관리</a>
                    <a href='/citizen/ideaOffer'>재해예방 아이디어</a>
                    <a href=''>시기 도래전 알림서비스</a>
                </nav>
            </div>

            <div className='contents'>
                <div className='title'>
                    <label className='titleName'>현장센서 관리</label>
                    <label className='path'>
                        <a href='/'>home</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/citizen'>중대산업재해</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/citizen'>현장센서 관리</a>
                    </label>
                </div>

                <div className='kpiCardBox'>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">전체 센서</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>실시간 위치 정보가 수신되어 현재 도면 상에 표시되고 있는 작업자 및 이동장비의 총 개수입니다.</span>
                                </span>
                            </div>
                            <span className="kpiSub">개수</span>
                        </div>
                        <div className="kpiValue">3</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">정상 센서</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>실내 위치 정보가 정상적으로 수신되고 있는 작업자의 수를 나타냅니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">개수</span>
                        </div>
                        <div className="kpiValue">2</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">오류 센서</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>실내 위치 정보가 수신 중인 지게차 등 이동장비의 수를 표시합니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">개수</span>
                        </div>
                        <div className="kpiValue">1</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">점검 필요</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>작업자와 이동장비 간 거리가 설정된 위험 반경 이내로 접근한 객체의 수를 의미합니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">개수</span>
                        </div>
                        <div className="kpiValue">1</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">신규 등록</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>위치 정보가 일정 시간 이상 수신되지 않아 현재 도면에 표시되지 않는 객체의 수입니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">개수</span>
                        </div>
                        <div className="kpiValue">6</div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default FieldSensor;