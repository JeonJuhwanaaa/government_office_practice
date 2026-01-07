import './SystemManagement.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

import { useState } from 'react';
import { AccountData } from './accountData';

function SystemManagement(props) {

    const searchSelectList = [
        {value: "userId", name: "아이디"},
        {value: "userName", name: "이름"},
        {value: "email", name: "이메일"},
        {value: "department", name: "부서명"},
    ];

    const [selected, setSelected] = useState("userId");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    return (
        <div className='systemManage'>
            <div className='sidebar'>
                <div className='departmentName'>시스템 관리</div>
                <nav className='navbar'>
                    <a href="" className='active'>회원 계정관리</a>
                    <a href="">권한 관리</a>
                    <a href="">그룹 관리</a>
                    <a href="">메뉴 관리</a>
                    <a href="">메뉴 권한 관리</a>
                </nav>
            </div>
            <div className='contents'>
                <div className='title'>
                    <label className='titleName'>회원 계정관리</label>
                    <label className='path'>
                        <a href='/'>home</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/systemManagement'>시스템 관리</a>
                        <IoIosArrowForward className='arrow' />
                        <a href='/systemManagement'>회원 계정관리</a>
                    </label>
                </div>

                <div className='accountListBox'>
                    <div className='accountSearch'>
                        <select className='selectList' onChange={handleSelect} value={selected} >
                            { searchSelectList.map((item) => {
                                return (
                                    <option value={item.value} key={item.value}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>
                        <input type='text' className='searchInput' />
                        <button className='searchBtn'><IoSearch className='searchIcon'/>조회</button>
                    </div>
                    <div className='userListTable'>
                        <div className='boardCount'>
                            <span>총 게시물: 30</span>
                        </div>
                        
                        <div className='boardBox'>
                            <table className='boardTable'>
                                <caption></caption>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>아이디</th>
                                        <th>이름</th>
                                        <th>이메일</th>
                                        <th>부서명</th>
                                        <th>등록날짜</th>
                                        <th>수정날짜</th>
                                        <th>최근 접속날짜</th>
                                        <th>상태</th>  
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AccountData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.userId}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.department}</td>
                                            <td>{item.regDate}</td>
                                            <td>{item.updDate}</td>
                                            <td>{item.lastDate}</td>
                                            <td>{item.accountState}</td> 
                                            <td><a href=''><IoSettingsSharp /></a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='pagenation' style={{marginTop:'50px'}}>
                            <ul>
                                <li className='active'><a href='/'>1</a></li>
                                <li><a href='/'>2</a></li>
                                <li><a href='/'>3</a></li>
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

export default SystemManagement;