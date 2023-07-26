import React, { useState } from "react";
import * as s from "./style";
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
    <s.ProfileOuter>
      <s.ProfileContentBox>
        <s.ProfileImg src='' alt='' />
        <s.ProfileName>abxl</s.ProfileName>
        <s.ProfileId>{`@abxl`}</s.ProfileId>
        
        <s.ContentContainer>
          <s.ProfileWeb>
            <a href="https://abxl-l.tistory.com/">
            abxl-l.tistory.com
            </a>
            </s.ProfileWeb>·
          <s.ProfileComment>핀터레스트 처음 써 봅니다.</s.ProfileComment>
        </s.ContentContainer>
        <div>팔로잉 0명</div>
        <s.ProfileBtnSet>
          <s.ProfileBtn>공유</s.ProfileBtn>
          <s.ProfileBtn onClick={()=>navigate('/profile/edit/:userid')}>프로필 수정</s.ProfileBtn>
        </s.ProfileBtnSet>
      </s.ProfileContentBox>

      <s.PinViewBox>
        <div>
          <s.CreatedPin isSelected={isCreatedSelected} onClick={createdToggleHandler}>생성됨</s.CreatedPin>
          <s.SelectedBar isSelected={isCreatedSelected}></s.SelectedBar>
        </div>
        <div>
          <s.CreatedPin isSelected={isSavedSelected} onClick={savedToggleHandler}>저장됨</s.CreatedPin>
          <s.SelectedBar isSelected={isSavedSelected}></s.SelectedBar>
        </div>
      </s.PinViewBox>

      <s.ContentsWrap>
        <s.PinMakeBtn onClick={clickedToggleHandler} isClicked={isClicked}>
          <AddArrow style={{ fill: isClicked ? '#efefef' : '#000' ,}} />
        </s.PinMakeBtn>
      </s.ContentsWrap>
        
      <s.PinCardContainer>
        {(!isCreatedSelected && !isSavedSelected) && ( // 선택이 아무것도 안된 경우
          <>
            <s.PinCard height={getRandomHeight()}>card1 생성됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card2 생성됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card3 생성됨</s.PinCard>
            {/* ... 생성됨 버튼에 따른 다른 카드들 */}
          </>
        )}

        {isCreatedSelected && ( // 생성됨 버튼이 선택된 경우
          <>
            <s.PinCard height={getRandomHeight()}>card1 생성됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card2 생성됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card3 생성됨</s.PinCard>
            {/* ... 생성됨 버튼에 따른 다른 카드들 */}
          </>
        )}

        {isSavedSelected && ( // 저장됨 버튼이 선택된 경우
          <>
            <s.PinCard height={getRandomHeight()}>card1 저장됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card2 저장됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card3 저장됨</s.PinCard>
            {/* ... 저장됨 버튼에 따른 다른 카드들 */}
          </>
        )}
      </s.PinCardContainer> 
    </s.ProfileOuter>
  );
}