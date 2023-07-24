import React from "react";
import styled from "styled-components";
import Logo from "../../assets/icons/PinterestLogoLogin.png"

const LoginModal = ({ onClose }) => {
    // 로그인 폼과 관련된 로직을 구현합니다.
    // useState를 사용하여 폼 입력값을 관리하고, handleLogin 함수를 사용하여 로그인 절차를 처리합니다.

    return (
        <ModalOverlay>
            <ModalContent>
                <LogoImageIcon src={Logo} alt="image" />
                <form>
                    <input type="text" placeholder="이메일" />
                    <input type="password" placeholder="비밀번호" />
                    <ForgotText>비밀번호를 잊으셨나요?</ForgotText>
                    <button type="submit">로그인</button>
                </form>
                <CloseButton onClick={onClose}>닫기</CloseButton>
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
  border-radius: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
`;

const ForgotText = styled.div`
    font-size: small;
    font-weight: bold;
    &:hover {
    text-decoration: underline;}
    cursor: pointer;
`;

const LogoImageIcon = styled.img`
width: 40px;
height: 38px;
margin-bottom: auto;

`;

export default LoginModal;