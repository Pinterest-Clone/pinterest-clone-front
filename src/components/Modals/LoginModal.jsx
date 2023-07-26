import React, { useState } from "react";
import * as s from './style';
import Logo from "../../assets/icons/PinterestLogoLogin.png"

const LoginModal = ({ onClose, onLogin }) => {
  const [isModalLogIn, setModalLogIn] = useState(false);

  const handleModalLogin = () => {
    // 로그인 폼과 관련된 로직을 구현합니다.
    // 모달 안의 로그인 버튼을 눌렀을 때 isModalLogIn 값을 true로 변경하는 것으로 가정합니다.
    setModalLogIn(true);
  };

  const handleCloseModal = () => {
    onClose();
    setModalLogIn(false);
  };

  return (
    <s.ModalOverlay>
      <s.ModalContent>
        <s.HeaderContainer>
          <s.LogoImageIcon src={Logo} alt="image" />
          <s.CloseButton onClick={handleCloseModal}>X</s.CloseButton>
        </s.HeaderContainer>
        <s.WelcomeText>Pinterest에 오신 것을 <br />환영합니다</s.WelcomeText>
        <s.Form>
          <s.LoginText>이메일</s.LoginText>
          <s.Input type="text" placeholder="이메일" />
          <s.LoginText>비밀번호</s.LoginText>
          <s.Input type="password" placeholder="비밀번호" />
          <s.ForgotText>비밀번호를 잊으셨나요?</s.ForgotText>
          <s.Button type="submit" onClick={handleModalLogin}>로그인</s.Button>
          <s.OrText>또는</s.OrText>
          <s.FacebookButton>Facebook으로 로그인하기</s.FacebookButton>
          <s.GoogleButton>Google로 로그인하기</s.GoogleButton>
        </s.Form>
      </s.ModalContent>
    </s.ModalOverlay>
  );
};

export default LoginModal;

//리다이렉션 쏴서 토큰 받아서 쿠키 저장