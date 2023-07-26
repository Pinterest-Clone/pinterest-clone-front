import React from 'react';
import styled from "styled-components";
import { FullPage, Slide } from 'react-full-page';

const IntroPage = () => {
  return (
    <>
      <FullPage>
        <Slide>
          <Main>
            <button>방식은 다음과 같습니다▾</button>
          </Main>
        </Slide>
        <Slide>
          <Main $bgColor="#fffd92">
          </Main >
        </Slide>
        <Slide>
          <Main $bgColor="#dafff6">
          </Main >
        </Slide>
        <Slide>
          <Main $bgColor="#ffe2eb">
          </Main >
        </Slide>
        <Slide>
          <Main $bgColor="white">
          </Main >
        </Slide>
      </FullPage>
    </>
  );
};
//컨트롤을 false로 지정해주기?

export default IntroPage;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ $bgColor }) => $bgColor};

  & > button{
    position: absolute; 
    bottom: 0; 
    background: #fffd92; 
    height: 8vh;
    width: 100%;
    box-sizing: border-box; 
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`