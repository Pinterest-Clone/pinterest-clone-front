import React, { useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as AddArrow } from '../../assets/icons/addArrow.svg';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const [isCreatedSelected, setIsCreatedSelected] = useState(false);
  const [isSavedSelected, setIsSavedSelected] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const createdToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isCreatedSelected) {
      setIsCreatedSelected(true);
      setIsSavedSelected(false);
    }
  };

  const savedToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isSavedSelected) {
      setIsSavedSelected(true);
      setIsCreatedSelected(false);
    }
  };
  
  const clickedToggleHandler = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    navigate('/make');
  }

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (700 - 200 + 1) + 200) + "px"; // 200px부터 700px 사이의 랜덤 높이
  };

  return (
    <ProfileOuter>
      <ProfileContentBox>
        <ProfileImg src='' alt='' />
        <ProfileName>abxl</ProfileName>
        <ProfileId>{`@abxl`}</ProfileId>
        
        <ContentContainer>
          <ProfileWeb>
            <a href="https://abxl-l.tistory.com/">
            abxl-l.tistory.com
            </a>
            </ProfileWeb>·
          <ProfileComment>핀터레스트 처음 써 봅니다.</ProfileComment>
        </ContentContainer>
        <div>팔로잉 0명</div>
        <ProfileBtnSet>
          <ProfileBtn>공유</ProfileBtn>
          <ProfileBtn onClick={()=>navigate('/profile/edit/:userid')}>프로필 수정</ProfileBtn>
        </ProfileBtnSet>
      </ProfileContentBox>

      <PinViewBox>
        <div>
          <CreatedPin isSelected={isCreatedSelected} onClick={createdToggleHandler}>생성됨</CreatedPin>
          <SelectedBar isSelected={isCreatedSelected}></SelectedBar>
        </div>
        <div>
          <CreatedPin isSelected={isSavedSelected} onClick={savedToggleHandler}>저장됨</CreatedPin>
          <SelectedBar isSelected={isSavedSelected}></SelectedBar>
        </div>
      </PinViewBox>

      <ContentsWrap>
        <PinMakeBtn onClick={clickedToggleHandler} isClicked={isClicked}>
          <AddArrow style={{ fill: isClicked ? '#efefef' : '#000' ,}} />
        </PinMakeBtn>
      </ContentsWrap>
        
      <PinCardContainer>
        {(!isCreatedSelected && !isSavedSelected) && ( // 선택이 아무것도 안된 경우
          <>
            <PinCard height={getRandomHeight()}>card1 생성됨</PinCard>
            <PinCard height={getRandomHeight()}>card2 생성됨</PinCard>
            <PinCard height={getRandomHeight()}>card3 생성됨</PinCard>
            {/* ... 생성됨 버튼에 따른 다른 카드들 */}
          </>
        )}

        {isCreatedSelected && ( // 생성됨 버튼이 선택된 경우
          <>
            <PinCard height={getRandomHeight()}>card1 생성됨</PinCard>
            <PinCard height={getRandomHeight()}>card2 생성됨</PinCard>
            <PinCard height={getRandomHeight()}>card3 생성됨</PinCard>
            {/* ... 생성됨 버튼에 따른 다른 카드들 */}
          </>
        )}

        {isSavedSelected && ( // 저장됨 버튼이 선택된 경우
          <>
            <PinCard height={getRandomHeight()}>card1 저장됨</PinCard>
            <PinCard height={getRandomHeight()}>card2 저장됨</PinCard>
            <PinCard height={getRandomHeight()}>card3 저장됨</PinCard>
            {/* ... 저장됨 버튼에 따른 다른 카드들 */}
          </>
        )}
      </PinCardContainer> 
    </ProfileOuter>
  );
}

const ProfileOuter = styled.div`
  margin-top: 100px;
`

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

const ContentContainer = styled.div`
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

    &:hover {
    background-color:${(props) => props.isClicked ?'#000' : '#efefef'};
    border-radius: 50%;
    };
`

const PinViewBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 45px;
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
  font-weight: 600;
  margin: 15px 10px 0 10px;
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'none' : '#efefef')};
  }
`;

const SelectedBar = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 60%;
  height: 3px;
  border-radius: 5px;
  background: ${(props) => (props.isSelected ? "black" : "none")};
  margin: 0 auto; // 가로 방향으로 중앙 정렬

  &:hover {
    background: none; // 선택된 상태에서 hover 효과 없음
  }
`;



const PinCardContainer = styled.div`
  column-width: 230px;
  margin: 10px 50px 0 50px;
  gap: 20px;
`

const PinCard = styled.div`
  width: 240px;
  border: none;
  border-radius: 12px;
  height: ${({ height }) => height};
  background-color: lightgray;
  margin: 12px;
  display: inline-block;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;