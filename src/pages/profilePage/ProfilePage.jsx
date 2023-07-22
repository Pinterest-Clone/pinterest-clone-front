import React from "react";
import { styled } from "styled-components";
import jejus from '../../assets/img/jejus.jpg'
import ten from '../../assets/img/10.jpg'
import { ReactComponent as AddArrow } from '../../assets/icons/addArrow.svg';


export default function MyPage() {

  const imgs = [jejus, ten];


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
        <CreatedPin>생성됨</CreatedPin>
        <CreatedPin>저장됨</CreatedPin>
      </PinViewBox>

      <ContentsWrap>
        <PinMakeBtn>
          <AddArrow/>
        </PinMakeBtn>
      </ContentsWrap>
        

      <PinCardContainor>
        {imgs.map((image)=>(
          <PinCard>
          <img src={image} alt='하강~'/>
          </PinCard>
          )
        )}
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
        <PinCard height={getRandomHeight()}>card5</PinCard>
        <PinCard height={getRandomHeight()}>card6</PinCard>
        <PinCard height={getRandomHeight()}>card7</PinCard>
        <PinCard height={getRandomHeight()}>card8</PinCard>
      </PinCardContainor>
    </>
  );
}

const ContentsWrap = styled.div`
  //position: relative;
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
    //position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
    background-color:#efefef;
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

const CreatedPin = styled.div`
  font-size: 17px;
  font-weight:600;
  margin: 15px 10px 30px 10px;
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

const PinCard = styled.div`
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
  }
` 
