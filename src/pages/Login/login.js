import './login.css';
import eduImg from '../../image/edu.jpg';
import eduImg2 from '../../image/images.jpg';
import { FaArrowCircleRight } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";


function Login() {



  return (
    <div className="login">
      <div className='fBox'>
        <div className='mainTitle'>
          <div className='font-white'>함안콘크리트&nbsp;</div>
          <div>중대재해 관리 시스템</div>
        </div>
      </div>
      <div className='sBox'>
        <div className='menuBox'>
          <div className='box1'>
            <div className='imgBox'>
              <img src={eduImg2} height={250} width={330} ></img>
              <img src={eduImg} height={250} width={380} style={{padding: '0 0 0 50px'}}></img>
            </div>
            <div className='navBox'>
              <a href='/industry'>중대산업재해 바로가기</a>
              <a href='/citizen'>중대시민재해 바로가기</a>
            </div>
          </div>
          <div className='box2'>
            <a href='/registration'>유해·위험요인 신고 <FaArrowCircleRight className='arrow-right'/></a>
            <a href='/citizen/ideaOffer'>재해예방 아이디어 제안 <FaArrowCircleRight className='arrow-right'/></a>
            <a href='/'>중대재해 발생 신고 <FaArrowCircleRight className='arrow-right'/></a>
          </div>
        </div>

        <div className='loginBox'>
          <div className='loginTit'>중대재해 관리시스템</div>
          
          <div className='loginWrt'>
            <div className='idBox'>
              {/* <div className='id'>아이디 또는 이메일</div> */}
              <input type='text' className='idWrt' placeholder='아이디 또는 이메일'></input>
            </div>

            <div className='passBox'>
              <div className='pass'>
                <input type='password' className='passWrt' placeholder='비밀번호'></input>
                <button type='button' className='eyeBtn'><FiEyeOff /></button>
              </div>
            </div>
          </div>

          <div className='loginBtn'>
            <button>로그인</button>
            <button style={{marginTop: '5px'}}>회원가입</button>
            <button style={{marginTop: '5px'}}>아이디 / 비밀번호 찾기</button>
          </div>
        </div>

      </div>
      <div className='tBox'></div>
    </div>

  );
}

export default Login;
