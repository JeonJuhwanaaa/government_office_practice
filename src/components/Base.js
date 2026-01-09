import './Base.css';
import { MdOutlineCopyright } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';

function Base({children} ) {

    const [menuOpen, setMenuOpen] = useState(false);

    // useEffect(() => {
    //     const menuModal = (e) => {
    //         if(menuOpen) {
    //             console.log("menu Opened");
    //         };
    //     }
    //     menuModal();
    // },[menuOpen]);

    return (
        <div>
            {menuOpen && (
                <div className="menuModal">
                    <div className="menuBackdrop" onClick={() => {setMenuOpen(false)}}/>
                    <div className="menuPanel">
                        <div className="menuContentTitle">
                            <span>전체메뉴</span>
                            <button className="closeBtn" onClick={() => setMenuOpen(false)}>닫기 ✕</button>
                        </div>

                        <div className="section-first">
                            <span>중대산업재해</span>
                        </div>
                        <div className='section-contents'>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>중대산업재해 대상관리</a>
                                </div>
                                <div className='section-third'>
                                    <a href=''>사업장</a>
                                    <a href=''>공공 공사장</a>
                                </div>
                            </div>

                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>법 의무 이행사항 관리</a>
                                </div>
                                <div className='section-third'>
                                    <a href=''>사업장</a>
                                    <a href=''>공공 공사장</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>중대재해예방 업무지원</a>
                                </div>
                                <div className='section-third'>
                                    <a href=''>현황정보 관리</a>
                                    <a href=''>일일업무보고 관리</a>
                                    <a href=''>안전계획 관리</a>
                                    <a href=''>시장 서한 답신 관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>유해·위험요인 관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>재해예방 아이디어</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>시기 도래전 알림서비스</a>
                                </div>
                            </div>
                        </div>

                        <div className="section-first">
                            <span>중대시민재해</span>
                        </div>
                        <div className='section-contents'>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href='/citizen'>중대시민재해 대상관리</a>
                                </div>
                                <div className='section-third'>
                                    <a href=''>원료·제조물</a>
                                    <a href=''>공중이용시설</a>
                                    <a href=''>공중교통수단</a>
                                </div>
                            </div>

                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>법 의무 이행사항 관리</a>
                                </div>
                                <div className='section-third'>
                                    <a href=''>원료·제조물</a>
                                    <a href=''>공중이용시설</a>
                                    <a href=''>공중교통수단</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>중대재해예방 업무지원</a>
                                </div>
                                <div className='section-third'>
                                    <a href=''>일일업무보고 관리</a>
                                    <a href=''>안전계획 관리</a>
                                    <a href=''>시장 서한 답신 관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href='/citizen/dangerElement'>유해·위험요인 관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>재해예방 아이디어</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>시기 도래전 알림서비스</a>
                                </div>
                            </div>
                        </div>

                        <div className="section-first">
                            <span>소통채널</span>
                        </div>
                        <div className='section-contents'>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>게시판</a>
                                </div>
                            </div>

                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>공지사항</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>자료실</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>Q&A</a>
                                </div>
                            </div>
                        </div>

                        <div className="section-first">
                            <span>연계관리</span>
                        </div>
                        <div className='section-contents'>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>연계현황</a>
                                </div>
                            </div>

                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>연계관리</a>
                                </div>
                            </div>
                        </div>


                        <div className="section-first">
                            <span>시스템관리</span>
                        </div>
                        <div className='section-contents'>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href='/systemManagement'>회원 계정관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>권한 관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>그룹 관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>메뉴 관리</a>
                                </div>
                            </div>
                            <div className='section-contents-box'>
                                <div className='section-second'>
                                    <a href=''>메뉴 권한 관리</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <header className="header">
                <div className='headerBox'>
                    <a href='/' className="logo">HamanConcrete</a>
                    <nav className="nav">
                        <a href="/industry">중대산업재해</a>
                        <a href="/citizen">중대시민재해</a>
                        <a href="/">소통채널</a>
                        <a href="/">연계관리</a>
                        <a href="/systemManagement">시스템관리</a>
                    </nav>
                    {/* <div className="auth-btns">
                        <button className="login-btn">로그인</button>
                    </div> */}
                    <div className='allmenu' onClick={() => {
                        // console.log("click");
                        setMenuOpen("true")
                    }}>
                        <button type='button' className='modal'>
                            <GiHamburgerMenu className='menubar' />
                        </button>
                    </div>
                </div>
            </header>
            <main className="childrenMain">
                {children}
            </main>
            <footer className='footer'>
                <nav className='aBox'>
                    <a href='/'>회사소개</a>
                    <div>|</div>
                    <a href='/'>이메일무단수집거부</a>
                    <div>|</div>
                    <a href='/'>저작권 정책</a>
                    <div>|</div>
                    <a href='/'>품질오류신고 및 확인</a>
                    <div>|</div>
                    <a href='/'>이용약관</a>
                    <div>|</div>
                    <a href='/'>개인정보처리방침</a>
                </nav>
                <div className='componyHelp'>고객센터:1588-0000(평일 09:00 ~ 18:00 주말·공휴일 휴무)｜FAX:02-000-0000｜Email:hamanCon@gmail.com</div>
                <div className='copyright'><MdOutlineCopyright />HAMANCONCRETE LLC. All rights reserved.</div>
            </footer>
        </div>
    );
}

export default Base;