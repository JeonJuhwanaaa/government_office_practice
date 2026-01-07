import './IdeaOffer.css';
import suggestImg from '../../image/suggest.jpg';

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

function IdeaOffer(props) {
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
        <div className='ideaOfferPage'>
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
                    <a href='/citizen/dangerElement'>유해·위험요인 관리</a>
                    <a href='/citizen/ideaOffer' className='active'>재해예방 아이디어</a>
                    <a href=''>시기 도래전 알림서비스</a>
                </nav>
            </div>

            <div className='contents'>
                <div className='title'>
                    <label className='titleName'>재해예방 아이디어</label>
                    <label className='path'>
                        <a href='/'>home</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/citizen'>중대시민재해</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/citizen/ideaOffer'>재해예방 아이디어</a>
                    </label>
                </div>

                <div className='mainContainer'>
                    <div className='contentsImg'>
                        <img src={suggestImg} style={{width:'70%', height:'100%'}}/>
                    </div>
                    <div className='contentsText'>
                        <label>
                            작은 관심과 제안이 큰 사고를 예방합니다.<br/>
                            현장에서 발견한 위험요소와 재해 예방 아이디어를 공유해 주세요.<br/>
                            접수된 의견은 재해 예방 활동 및 안전관리 개선에 적극 활용하겠습니다.
                        </label>
                    </div>
                    <div className='contentsBtn'>
                        <a href='#none'>아이디어 등록하기</a>
                        <a href='#none'>나의 아이디어 보기</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default IdeaOffer;