import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "../../assets/icons/PinterestLogoLogin.png"

const SignUpModal = ({ onClose, onSignUp }) => {
  const [isModalLogIn, setModalLogIn] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleModalLogin = () => {
    // 로그인 폼과 관련된 로직을 구현합니다.
    // 이 예시에서는 간단하게 모달 안의 로그인 버튼을 눌렀을 때 isModalLogIn 값을 true로 변경하는 것으로 가정합니다.
    setModalLogIn(true);
  };

  const handleCloseModal = () => {
    onClose();
    setModalLogIn(false);
  };

  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };


  return (
    <ModalOverlay>
      <ModalContent>
        <HeaderContainer>
          <LogoImageIcon src={Logo} alt="image" />
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
        </HeaderContainer>
        <WelcomeText>Pinterest에 오신 것을 <br />환영합니다</WelcomeText>
        <TryText>시도해 볼 만한 새로운 아이디어 찾기</TryText>
        <Form>
          <LoginText>이메일</LoginText>
          <Input type="text" placeholder="이메일" />
          <LoginText>비밀번호</LoginText>
          <Input type="password" placeholder="비밀번호" />
          <LoginText>생년월일</LoginText>
          <DatePickerInput
            selected={dateOfBirth}
            onChange={handleDateOfBirthChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="생년월일을 선택하세요"
          />
          <Button type="submit" onClick={handleModalLogin}>계속하기</Button>
          <TryText>또는</TryText>
          <FacebookButton>Facebook으로 로그인하기</FacebookButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  /* 오버레이를 화면 전체를 덮도록 설정합니다. */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:484px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const WelcomeText = styled.div`
  font-size: xx-large;
  font-weight: bold;
   display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0px 0px 0px;
`;

const TryText = styled.div`
  font-size: medium;
  padding: 10px 0px 0px 0px;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 20px;
`;

const LoginText = styled.div`
  font-size: small;
  padding: 10px 0px 10px 0px;
  display: flex;
  text-align: left;
`;

const Input = styled.input`
  width: 268px;
  height: 35px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 16px;
  border-color: #dfdfdf;
   &:hover {
    border-color: gray;}
`;

const Button = styled.button`
  width: 268px;
  height: 40px;
  margin: 20px auto ;
  background-color: red;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  /* display: block; */
`;

const FacebookButton = styled.button`
  width: 268px;
  height: 40px;
  margin: 10px auto;
  background-color: #3b5998; 
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;


const CloseButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
  
`;

const DatePickerInput = styled(DatePicker)`
  width: 268px;
  height: 35px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 16px;
  border-color: #dfdfdf;
  &:hover {
    border-color: gray;
  }
`;



const LogoImageIcon = styled.img`
width: 40px;
height: 38px;
margin-bottom: auto;
margin-top: 10px;
`;

export default SignUpModal;