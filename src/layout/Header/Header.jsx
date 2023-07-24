import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import HeaderLogout from "./HeaderLogout";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/Modals/LoginModal";


export default function Header(props) {
  const [isLogIn, setLogIn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogin = () => {
    setLogIn(true);
  };

  const handleLogout = () => {
    setLogIn(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // const HeaderLogo = () => {
  //   window.history.go(0);
  // }

  const handleModalLogin = () => {
    setLogIn(true);
    setModalOpen(false);
  };



  return (
    <HeaderContainer>
      {isLogIn ? (
        <HeaderLogin onLogout={handleLogout} />
      ) : (
        <HeaderLogout
          onLogin={handleLogin}
          onModalOpen={handleModalOpen}
          onModalLogin={handleModalLogin}
        />
      )}
      {isModalOpen && <LoginModal onClose={handleModalClose} onLogin={handleModalLogin} />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 6px;
  background-color: white;
  color: black;

`;

