import React from 'react';

function sidebar(props) {
    return (
        <div>
            <div className='sidebar'>
                <div className='departmentName'>중대시민재해</div>
                <nav className='navbar'>
                    <a href='/citizen'>중대시민재해 대상 관리<FaAngleDown /></a>
                    <a href=''>법 의무 이행사항 관리<FaAngleDown /></a>
                    <a href=''>중대재해예방 업무지원<FaAngleDown /></a>
                    <a href='/dangerElement'>유해·위험요인 관리</a>
                    <a href=''>재해예방 아이디어</a>
                    <a href=''>시기 도래전 알림서비스</a>
                </nav>
            </div>
        </div>
    );
}

export default sidebar;