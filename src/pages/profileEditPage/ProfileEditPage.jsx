import React from "react";
import { useState } from "react";
import * as s from "./style";

export default function ProfileEditPage() {

  const [isProfileSelected, setIsProfileSelected] = useState(true);
  const [isPersonalSelected, setIsPersonalSelected] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);

  const profileToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isProfileSelected) {
      setIsProfileSelected(true);
      setIsPersonalSelected(false);
    }
  };

  const personalToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isPersonalSelected) {
      setIsPersonalSelected(true);
      setIsProfileSelected(false);
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIsInputFilled(inputValue.trim() !== "");
  };

  return (
    <>
      <s.EditOuter>
        <s.ContentOuter>
          <div style={{display: 'flex', justifyContent:'space-between', width: '51%', }}>
            <s.EditNav>
              <div>
                <div 
                isSelected={isProfileSelected} 
                onClick={profileToggleHandler}>
                  공개 프로필
                </div>
                <s.SelectedBar isSelected={isProfileSelected}></s.SelectedBar>
              </div>
              <div>
                <div
                  isSelected={isPersonalSelected}
                  onClick={personalToggleHandler}
                >
                  개인 정보
                </div>
                <s.SelectedBar isSelected={isPersonalSelected}></s.SelectedBar>
              </div>
            </s.EditNav>

            <s.EditSection>
              { isProfileSelected && (
                <>
                <s.OpenProfileEdit>
                <div
                  style={{ 
                    textAlign: "left", 
                    fontWeight: 600, 
                    fontSize: "28px" 
                  }}
                >
                  공개 프로필
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontWeight: 400,
                    fontSize: "16px",
                    marginTop: "8px",
                  }}
                >
                  회원님의 프로필을 방문하려는 사용자에게 다음 정보가 표시됩니다.
                </div>

                <s.TextAlign>
                  사진
                </s.TextAlign>
                <div style={{ 
                    display: 'flex',
                    alignItems: "center", 
                    flexDirection: "row",
                    }}>
                  <div style={{ 
                      marginTop: "px", 
                      marginBottom: "10px", 
                      margin: '0 18px 10px 0',
                      width: '75px',
                      height: '75px',
                      borderRadius: '40px',
                      backgroundColor: 'black',
                    }}>
                  </div>
                  <div style={{ 
                      fontWeight: '600',
                      minWidth: '60px',
                      minHeight: '40px',
                      marginTop: "32px", 
                      marginBottom: "4px",
                      boxSizing: 'border-box',
                      backgroundColor:'#efefef',
                      borderRadius: '25px',
                      display:'flex',
                      alignItems: 'center',
                      justifyContent:'center'
                    }}>
                    변경
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '4px'}}>
                  <div style={{ display: 'flex', flexDirection: 'column',}}>
                    <s.TextAlign>이름</s.TextAlign>
                    <s.Input onChange={handleInputChange}/>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column',}}>
                    <s.TextAlign>성</s.TextAlign>
                    <s.Input onChange={handleInputChange}/>
                  </div>
                </div>

                <div>
                  <s.TextAlign>소개</s.TextAlign>
                  <s.Input
                    placeholder="회원님의 이야기를 들려주세요"
                    onChange={handleInputChange}
                    style={{width:'466px', height:'100px'}}
                  />
                </div>

                <div>
                  <s.TextAlign>웹사이트</s.TextAlign>
                  <s.Input
                    placeholder="회원님의 사이트로 트래픽을 유도하는 링크를 추가하세요"
                    onChange={handleInputChange}
                    style={{width:'466px',}}
                  />
                </div>

                <div>
                  <s.TextAlign>사용자 이름</s.TextAlign>
                  <s.Input
                    placeholder="다른 사람들이 회원님을 찾을 수 있도록 잘 선택하세요"
                    onChange={handleInputChange}
                    style={{width:'466px',}}
                  />
                  <div>{`www.pinterest.com/`}</div>
                </div>
              </s.OpenProfileEdit>
                </>
              )}

              { isPersonalSelected && (
                <>
                <s.PersonalInfoEdit>
                <div
                  style={{ textAlign: "left", fontWeight: 600, fontSize: "28px" }}
                >
                  개인 정보
                </div>
                <div
                  style={{ textAlign: "left", fontWeight: 400, fontSize: "16px" }}
                >
                  기본 개인 정보를 수정하여 추천 콘텐츠의 품질을 높이세요. 이
                  정보는 비공개이며 회원님의 공개 프로필에 표시되지 않습니다.
                </div>

                <div>
                  <div>생년월일</div>
                  <input placeholder="MM/DD/YYYY" />
                </div>

                <div>
                  <div>성별</div>
                  <div>남성</div>
                  <div>여성</div>
                  <div>둘 다 아님</div>
                  <input placeholder="원하는 성별을 입력하세요." />
                </div>

                <div>
                  <div>국가/지역</div>
                  <div>국가/지역 select</div>
                </div>

                <div>
                  <div>언어</div>
                  <div>언어 select</div>
                </div>
              </s.PersonalInfoEdit>
                </>
              )}
            </s.EditSection>
          </div>
          <div style={{ 
            backgroundColor: '',
            width: '49%',
            }}></div>
        </s.ContentOuter>
      </s.EditOuter>
      <s.FooterSection>
        <div style={{ display:'flex' , justifyContent:'flex-end', width: '50%', }}>
          <s.SaveBtn onClick={handleReset}>재설정</s.SaveBtn>
          <s.SaveBtn isWritingComplete={isInputFilled}>저장</s.SaveBtn>
        </div>
        <div style={{display: 'flex', justifyContent:'center', width: '50%', }}></div>
      </s.FooterSection>
    </>
  );
}