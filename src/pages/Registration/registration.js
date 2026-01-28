import './registration.css';
import { FaArrowCircleRight } from "react-icons/fa";
import reportImg from '../../image/report_icon.png';
import { IoSearch } from "react-icons/io5";
import { PiCalendarDotsThin } from "react-icons/pi";
import { RiResetRightFill } from "react-icons/ri";
import { registrationDatas } from './registrationData';
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa6";

function registration(props) {
    return (
        <div className='registrationPage'>
            <div className='fieldBox'>
                <div className='registBox'>
                    <div className='registTextTitle'>
                        <span className=''>유해·위험요인 신고</span>
                    </div>
                    <div className='registTitleNotice'>
                        <span>신고 하시기 전에&nbsp;</span>
                        <a href='' className='textBold'>&nbsp;자주하는 질문&nbsp;</a>
                        <span>&nbsp;확인해 주세요.</span> 
                    </div>
                    <div className='registList'>
                        <a href='/'>유해·위험요인 신청<FaArrowCircleRight className='arrow-right'/></a>
                        <a href='/'>신청 결과 확인<FaArrowCircleRight className='arrow-right'/></a>
                        <a href='/'>신청 내용 수정<FaArrowCircleRight className='arrow-right'/></a>
                        <a href='/'>신청 내용 담당자 분배<FaArrowCircleRight className='arrow-right'/></a>
                        <a href='/'>신청 내용 취소<FaArrowCircleRight className='arrow-right'/></a>
                        <a href='/'>기타<FaArrowCircleRight className='arrow-right'/></a>
                    </div>
                </div>
                <div className='registImg' ></div>
            </div>

            <div className='registBoardBox'>
                <table className='searchTable'>
                    <caption></caption>
                    <colgroup>
                        <col style={{ width: "220px" }}/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope='row'>구역 선택</th>
                            <td>
                                <div className="rowFlex">
                                    <a href='/' className="linkBtn">모든 구역</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">원료 투입 구역</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">성형 라인</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">건조로</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">수성로</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">냉각 구역</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">적재장</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">출입구</a>
                                    <span className="sep">｜</span>
                                    <a href='/' className="linkBtn">제어실</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>기간 선택</th>
                            <td>
                                <div className='timeList'>
                                    <div className='a-tx'>
                                        <a href='/' className="linkBtn">오늘</a>
                                        <span className="sep">｜</span>
                                        <a href='/' className="linkBtn">최근 일주일</a>
                                        <span className="sep">｜</span>
                                        <a href='/' className="linkBtn">최근 한달</a>
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
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>검색어</th>
                            <td>
                                <div className='wordWrite'>
                                    <input type='text' title='검색어를 입력해주세요' ></input>
                                    <button type='button' className='searchBtn'><IoSearch className='searchIcon'/>검색</button>
                                    <button type='button' className='resetBtn'><RiResetRightFill className='resetIcon'/>초기화</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className='boardBox'>
                    <table className='boardTable'>
                        <caption></caption>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>구역 구분</th>
                                <th>신고 제목</th>
                                <th>신청일</th>
                                <th>첨부</th>
                                <th>조회</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registrationDatas.map(item => (
                                    <tr>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.facilityType}
                                        </td>
                                        <td>
                                            <a href=''>
                                                <div style={{display:'flex', justifyContent:'flex-start'}}>
                                                    {item.title}
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            {item.applyDate}
                                        </td>
                                        <td>
                                            <a href=''><FaPaperclip /></a>
                                        </td>
                                        <td>
                                            {item.views}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className='writeBtn'>
                    <button type='button'>작성하기</button>
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
    );
}

export default registration;