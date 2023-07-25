import React from "react";
// import { useState } from "react";
import { styled } from "styled-components";

export default function ProfileEditPage() {

  //const [ isSelected, setIsSelected ] = useState(false);

  //const selectedHandler = () => {}

  return (
    <>
      <EditOuter>
        <EditNav>
          <div>공개 프로필</div>
          <div>개인 정보</div>
        </EditNav>
        <EditSection>
          <OpenProfileEdit>
            <div style={{ textAlign: 'left', fontWeight: 600, }}>공개 프로필</div>
            <div style={{ textAlign: 'left', fontWeight: 400, marginTop: '8px' }}>회원님의 프로필을 방문하려는 사용자에게 다음 정보가 표시됩니다.</div>

            <div style={{ marginTop: '32px', marginBottom: '4px', textAlign: 'left', }}>사진</div>
            <div style={{ alignItems: 'center', flexDirection: 'row', }}>
              <div style={{ marginTop: '32px', marginBottom: '4px' }}>img</div>
              <div style={{ marginTop: '32px', marginBottom: '4px' }}>변경</div>
            </div>

            <div>
              <div>이름</div>
              <div>이름 input</div>
              <div>성</div>
              <div>성 input</div>
            </div>

            <div>
              <div>소개</div>
              <div>소개 input</div>
            </div>

            <div>웹사이트</div>
            <div>웹사이트 input</div>
            <div>사용자 이름</div>
            <div>사용자 이름 input</div>
            <div>{`www.pinterest.com/`}</div>
          </OpenProfileEdit>
          <PersonalInfoEdit>

          </PersonalInfoEdit>
        </EditSection>
      </EditOuter>
    </> 
  );
}

const EditOuter = styled.div`
  margin-top: 80px;
`

const EditNav = styled.div`

`

const EditSection = styled.div`

`

const OpenProfileEdit = styled.div`

`

const PersonalInfoEdit = styled.div`

`