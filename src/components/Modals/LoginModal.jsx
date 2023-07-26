import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/icons/PinterestLogoLogin.png";
import { useMutation } from "react-query";
import { login } from "../../axios/auth";

const LoginModal = ({ onClose, onLogin }) => {
  const [isModalLogIn, setModalLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      if (data) {
        alert("로그인 성공!");
      }
    },
    onError: (error) => {
      alert("다시 시도해주세요");
    },
  });

  const handleModalLogin = () => {
    const loginInfo = { email, password };
    mutation.mutate(loginInfo);
    setModalLogIn(true);
  };

  const handleCloseModal = () => {
    onClose();
    setModalLogIn(false);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <HeaderContainer>
          <LogoImageIcon src={Logo} alt="image" />
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
        </HeaderContainer>
        <WelcomeText>
          Pinterest에 오신 것을 <br />
          환영합니다
        </WelcomeText>
        <div>
          <LoginText>이메일</LoginText>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="이메일"
          />
          <LoginText>비밀번호</LoginText>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="비밀번호"
          />
          <ForgotText>비밀번호를 잊으셨나요?</ForgotText>
          <Button type="submit" onClick={handleModalLogin}>
            로그인
          </Button>
          <OrText>또는</OrText>
          <FacebookButton>Facebook으로 로그인하기</FacebookButton>
          <GoogleButton>Google로 로그인하기</GoogleButton>
        </div>
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
  width: 484px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WelcomeText = styled.div`
  font-size: xx-large;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0px 0px 0px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 20px;
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
    border-color: gray;
  }
`;

const Button = styled.button`
  width: 268px;
  height: 40px;
  margin: 20px auto;
  background-color: red;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

const FacebookButton = styled.button`
  width: 268px;
  height: 40px;
  margin-top: 10px;
  background-color: #3b5998; /* Facebook blue color */
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  display: block; /* Ensure the button takes the full width of its container */
`;

const GoogleButton = styled.button`
  width: 268px;
  height: 40px;
  margin-top: 10px;
  background-color: #4285f4; /* Google blue color */
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  display: block; /* Ensure the button takes the full width of its container */
`;

const CloseButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
`;

const OrText = styled.div`
  font-size: small;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ForgotText = styled.div`
  font-size: small;
  font-weight: bold;
  padding: 10px 0px 10px 0px;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

const LogoImageIcon = styled.img`
  width: 40px;
  height: 38px;
  margin-bottom: auto;
  margin-top: 10px;
`;

export default LoginModal;

//리다이렉션 쏴서 토큰 받아서 쿠키 저장
