import './IndoorMonitoring.css';

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

import floorplanImg from "../../image/floorplan.png";
import FloorPlanKonva from "../../components//FloorPlanKonnva";

function IndoorMonitoring(props) {

    const [isMenuOpen,setIsMenuOpen] = useState({
        target: false,
        law: false,
        support: true,
    });

    const [isTabActive, setIsTabActive] = useState('A');

    const menuClickEvent = (key) => {
        setIsMenuOpen(prev => (
            { ...prev, [key]: !prev[key] }
        ));
    };

    const markers = [
        { id: 1, x: 250, y: 680, label: "A", type: "worker" },
        { id: 2, x: 1250, y: 780, label: "B", type: "worker" },
        { id: 3, x: 420, y: 460, label: "A", type: "forklift" }
    ];

    // const planSrc = process.env.PUBLIC_URL + "/floorplan.png";
    const planSrc = floorplanImg;

    const btnChange = (e) => {
        // console.log(e);
        setIsTabActive(e);
    };

    return (
        <div className='presentInfoPage'>
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
                        <a href="/industry/IndoorMonitoring" className='active'>실내 모니터링 관리</a>
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
                    <label className='titleName'>실내 모니터링 관리</label>
                    <label className='path'>
                        <a href='/'>home</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/citizen'>중대산업재해</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/citizen'>현황정보 관리</a>
                    </label>
                </div>
                
                <div className='kpiCardBox'>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">현재 관제 중</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>실시간 위치 정보가 수신되어 현재 도면 상에 표시되고 있는 작업자 및 이동장비의 총 개수입니다.</span>
                                </span>
                            </div>
                            <span className="kpiSub">객체 수</span>
                        </div>
                        <div className="kpiValue">3</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">작업자</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>실내 위치 정보가 정상적으로 수신되고 있는 작업자의 수를 나타냅니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">위치 수신</span>
                        </div>
                        <div className="kpiValue">2</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">이동장비(지게차)</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>실내 위치 정보가 수신 중인 지게차 등 이동장비의 수를 표시합니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">위치 수신</span>
                        </div>
                        <div className="kpiValue">1</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">위험 반경</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>작업자와 이동장비 간 거리가 설정된 위험 반경 이내로 접근한 객체의 수를 의미합니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">근접</span>
                        </div>
                        <div className="kpiValue">1</div>
                    </div>
                    <div className="kpiCard">
                        <div className="kpiTitle">
                            <div className='topLabel'>
                                <span className="kpiLabel">미수신 객체</span>
                                <span className='kpiInfo'>
                                    <IoIosInformationCircleOutline />
                                    <span className='tooltip'>위치 정보가 일정 시간 이상 수신되지 않아 현재 도면에 표시되지 않는 객체의 수입니다.</span>    
                                </span>
                            </div>
                            <span className="kpiSub">객체</span>
                        </div>
                        <div className="kpiValue">6</div>
                    </div>
                </div>

                <div className='subTitle'>
                    <button className={isTabActive === 'A' ? 'active' : ''} onClick={() => btnChange('A')}>A작업장 실내 GPS</button>
                    <button className={isTabActive === 'B' ? 'active' : ''} onClick={() => btnChange('B')}>B작업장 실내 GPS</button>
                    <button className={isTabActive === 'C' ? 'active' : ''} onClick={() => btnChange('C')}>C작업장 실내 GPS</button>
                    <button className={isTabActive === 'D' ? 'active' : ''} onClick={() => btnChange('D')}>D작업장 실내 GPS</button>
                    <button className={isTabActive === 'E' ? 'active' : ''} onClick={() => btnChange('E')}>E작업장 실내 GPS</button>
                </div>
                
                <div className='moniteringBox'>
                    <div className='monitering'>
                        <FloorPlanKonva imageSrc={planSrc} markers={markers} />
                    </div>
                    <div className='moniteringList'> 
                        <div className='accessBox'>
                            <span>작업자A</span>
                            <label style={{color:'blue'}}><IoMdRadioButtonOn /></label>
                        </div>
                        <div className='accessBox'>
                            <span>작업자B</span>
                            <label style={{color:'blue'}}><IoMdRadioButtonOn /></label>
                        </div>
                        <div className='accessBox'>
                            <span>지게차A</span>
                            <label style={{color:'red'}}><IoMdRadioButtonOn /></label>
                        </div>
                        <div className='accessBox'>
                            <span>작업자C</span>
                            <label>-</label>
                        </div>
                        <div className='accessBox'>
                            <span>작업자D</span>
                            <label>-</label>
                        </div>
                        <div className='accessBox'>
                            <span>작업자E</span>
                            <label>-</label>
                        </div>
                        <div className='accessBox'>
                            <span>작업자F</span>
                            <label>-</label>
                        </div>
                        <div className='accessBox'>
                            <span>지게차B</span>
                            <label>-</label>
                        </div>
                        <div className='accessBox'>
                            <span>지게차C</span>
                            <label>-</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default IndoorMonitoring;