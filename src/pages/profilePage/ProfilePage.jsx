import React, { useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as AddArrow } from '../../assets/icons/addArrow.svg';
import { ReactComponent as SelectedBar } from '../../assets/icons/selectedBar.svg';


export default function MyPage() {

  const [ isSelected, setIsSelected ] = useState(false);
  const [ isClicked, setIsClicked ] = useState(false);
  
  const selectToggleHandler = () => {
    setIsSelected(!isSelected);
  }

  const clickedToggleHandler = () => {
    setIsClicked(true);
  }

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (700 - 200 + 1) + 200) + "px"; // 200px부터 500px 사이의 랜덤 높이
  };

  return (
    <>
      <ProfileContentBox>
        <ProfileImg src='' alt='' />
        <ProfileName>abxl</ProfileName>
        <ProfileId>{`@abxl`}</ProfileId>
        
        <ContentContainor>
          <ProfileWeb>
            <a href="https://abxl-l.tistory.com/">
            abxl-l.tistory.com
            </a>
            </ProfileWeb>·
          <ProfileComment>핀터레스트 처음 써 봅니다.</ProfileComment>
        </ContentContainor>
        <div>팔로잉 0명</div>
        <ProfileBtnSet>
          <ProfileBtn>공유</ProfileBtn>
          <ProfileBtn>프로필 수정</ProfileBtn>
        </ProfileBtnSet>
      </ProfileContentBox>

      <PinViewBox>
        <div>
          <CreatedPin onClick={selectToggleHandler}>생성됨</CreatedPin>
          <SelectedBar>{SelectedBar}</SelectedBar>
        </div>
        <div>
          <CreatedPin onClick={selectToggleHandler}>저장됨</CreatedPin>
          <SelectedBar>{SelectedBar}</SelectedBar>
        </div>
      </PinViewBox>

      <ContentsWrap>
        <PinMakeBtn onClick={clickedToggleHandler}>
          <AddArrow/>
        </PinMakeBtn>
      </ContentsWrap>
        
      <PinCardContainor>
      {isSelected
        ? 
        (
        <>
          <PinCard height={getRandomHeight()}>card3</PinCard>
          <PinCard height={getRandomHeight()}>card4</PinCard>
          <PinCard height={getRandomHeight()}>card5</PinCard>
          <PinCard height={getRandomHeight()}>card6</PinCard>
          <PinCard height={getRandomHeight()}>card7</PinCard>
          <PinCard height={getRandomHeight()}>card8</PinCard>
          <PinCard height={getRandomHeight()}>card1</PinCard>
          <PinCard height={getRandomHeight()}>card2</PinCard>
          <PinCard height={getRandomHeight()}>card3</PinCard>
          <PinCard height={getRandomHeight()}>card4</PinCard>
          <PinCard height={getRandomHeight()}>card5</PinCard>
          <PinCard height={getRandomHeight()}>card6</PinCard>
          <PinCard height={getRandomHeight()}>card7</PinCard>
          <PinCard height={getRandomHeight()}>card8</PinCard>
          <PinCard height={getRandomHeight()}>card5</PinCard>
          <PinCard height={getRandomHeight()}>card6</PinCard>
          <PinCard height={getRandomHeight()}>card7</PinCard>
          <PinCard height={getRandomHeight()}>card8</PinCard>
        </>
        )
        : 
        (
        <>
          <PinCard height={getRandomHeight()}>card3</PinCard>
          <PinCard height={getRandomHeight()}>card4</PinCard>
          <PinCard height={getRandomHeight()}>card5</PinCard>
          <PinCard height={getRandomHeight()}>card6</PinCard>
          <PinCard height={getRandomHeight()}>card7</PinCard>
          <PinCard height={getRandomHeight()}>card8</PinCard>
          <PinCard height={getRandomHeight()}>card1</PinCard>
          <PinCard height={getRandomHeight()}>card2</PinCard>
          <PinCard height={getRandomHeight()}>card3</PinCard>
          <PinCard height={getRandomHeight()}>card4</PinCard>
          <PinCard height={getRandomHeight()}>card5</PinCard>
        </>
        )
      }


        {/* {imgs.map((image)=>(
          <PinCard>
          <img src={image} alt='하강~'/>
          </PinCard>
          )
        )}
        */}
      </PinCardContainor>
    </>
  );
}

const ContentsWrap = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: 20px;
  padding-bottom: 100px;
`

const ProfileContentBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  margin:15px 15px 40px 15px;
`

const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid black;
  border-radius: 60px;
  background-color: black;
  cursor: pointer;
`

const ProfileName = styled.div`
  font-size: 35px;
  font-weight: bold;
`

const ProfileId = styled.div`
  color: #7a7a7a;
`

const ContentContainor = styled.div`
  display: flex;
`

const ProfileWeb = styled.div`
  margin-right: 5px;
  a {
    text-decoration: none; 
    font-size: 15px;
    font-weight: bold;
    color: black;
    &:hover {
      text-decoration: underline; 
    }
  }
`

const ProfileComment = styled.div`
  margin-left: auto;
`

const ProfileBtnSet = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

const ProfileBtn = styled.button`
  width: auto;
  height: auto;
  border: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`

const PinMakeBtn = styled.div`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover { // 미완성
    background-color:${props => props.isClicked ?'#000' : '#efefef'};
    border-radius: 50%;
    };
`

const PinViewBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  margin-left: -8px;
  margin-right: -8px;
`

const CreatedPin = styled.div` // 미완성
  font-size: 17px;
  font-weight:600;
  margin: 15px 10px 0 10px;
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
    border-radius: 10px;
  }
`

const PinCardContainor = styled.div`
  column-width: 230px;
  margin: 10px 50px 0 50px;
  gap: 20px;
`

const PinCard = styled.div` // 미완성
  width: 240px;
  border: none;
  border-radius: 12px;
  height : ${({height})=>height};
  background-color: lightgray;
  margin: 12px;
  display: inline-block;
  overflow: hidden;
  img {
    max-width: 100%;

    &:hover {
      filter: brightness(50%);
    }
  }
` 
