import React, { useState } from 'react';
import styled from "styled-components";
import { FullPage, Slide } from 'react-full-page';
import Jejus from "../../assets/img/jejus.jpg"

const IntroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // 5 is the total number of slides
  };

  return (
    <>
      <FullPage activeSlide={currentSlide} animate={true}>

        <Slide>
          <Main>
            <button onClick={handleNextSlide}>방식은 다음과 같습니다▾</button>
            <NestedMain>
              <AutoSlides>
                <AutoSlide $bgColor="#ff0000" />
                <AutoSlide $bgColor="#00ff00" />
                <AutoSlide $bgColor="#0000ff" />
                <AutoSlide $bgColor="#ffff00" />
              </AutoSlides>
            </NestedMain>
          </Main>
        </Slide>
        <Slide>
          <Main $bgColor="#fffd92">
            <SlideTextContainer>
              <IntroText color="#C31952">아이디어 검색</IntroText>
              <HalfText color="#C31952">어떤 것을 시도해보고 싶으세요? '닭고기로 만드는 간단한 저녁 메뉴'와 같이 관심 있는 내용을 검색하고 결과를 확인해 보세요.</HalfText>
            </SlideTextContainer>
          </Main >
        </Slide>
        <Slide>
          <Main $bgColor="#dafff6">
            <SlideTextContainer>
              <IntroText color="#006B6C">좋아하는 아이디어를 저장하세요.</IntroText>
              <HalfText color="#006B6C">나중에 다시 볼 수 있도록 좋아하는 콘텐츠를 수집하세요.</HalfText>
            </SlideTextContainer>
          </Main >
        </Slide>
        <Slide>
          <Main $bgColor="#ffe2eb">
            <HalfImg src={Jejus} alt="image" />
            <SlideTextContainer>
              <IntroText color="#C32F00">구매하고, 만들고, 시도하고, 실행하세요.</IntroText>
              <HalfText color="#C32F00">무엇보다도 Pinterest에서는 전 세계 사람들의 아이디어와 새로운 것을 발견할 수 있습니다.</HalfText>
            </SlideTextContainer>
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
  display: flex; 
  align-items: center;
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
const NestedMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const AutoSlides = styled.div`
  display: flex;
  width: 400%;
  animation: autoSlideAnimation 12s linear infinite;
  @keyframes autoSlideAnimation {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
`;

const AutoSlide = styled.div`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
`;

const HalfImg = styled.img`
  width: 50%;
  height: 100%;
`

const SlideTextContainer = styled.div`
  flex: 1; 
  padding: 100px;
`
const IntroText = styled.div`
  font-size: 60px;
  font-weight: bolder;
  text-align: center;
    color: ${(props) => props.color};
`

const HalfText = styled.div`
  font-size: x-large;
  margin: 20px auto;
    color: ${(props) => props.color};

`