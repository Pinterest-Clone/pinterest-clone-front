import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./style";
import Reply from "./Reply";

import { ReactComponent as Smile } from "../../assets/icons/smile.svg";
import { ReactComponent as Down } from "../../assets/icons/triangleDown.svg";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as Link } from "../../assets/icons/link.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";

import EmojiPicker from "emoji-picker-react";

export default function PinDetailPage() {
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const emojiPickerRef = useRef(null);

  useEffect(() => {
    // figure 요소의 높이 계산
    const pinImgHeight = document.getElementById("pin-image").clientHeight;

    // figure 높이를 기준으로 section 요소의 최대 높이 설정
    const sectionElement = document.getElementById("pin-desc");

    if (sectionElement) {
      sectionElement.style.maxHeight = `${pinImgHeight}px`;
    }

    // 바깥 영역 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleOutsideClick);

    // 컴포넌트가 unmount될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const onClickEmojiButtonHandler = (event) => {
    event.stopPropagation(); // 이벤트 중단
    setShowEmojiBox((prevShowEmojiBox) => !prevShowEmojiBox);
  };

  const handleOutsideClick = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setShowEmojiBox(false);
    }
  };

  return (
    <Styled.Detailmain>
      <Styled.DetailArticle>
        <figure>
          <img
            id="pin-image"
            src="https://blog.kakaocdn.net/dn/5UYz8/btq4diRXkGE/HkHufR4G8X4bIX3h3lNjck/img.jpg"
            // src="https://i.pinimg.com/564x/5c/8f/a8/5c8fa873f3f824a6b51513508c90f440.jpg"
            // src="https://i.pinimg.com/564x/99/63/ff/9963ff14e2e1b62a9cf2b3a6f115a828.jpg"
            alt=""
          />
        </figure>
        <section id="pin-desc">
          <Styled.DetailHeadNav>
            <div>
              <button>
                <Dots />
              </button>
              <button>
                <Share />
              </button>
              <button>
                <Link />
              </button>
            </div>
            <button>
              저장 <ArrowDown />
            </button>
          </Styled.DetailHeadNav>
          <Styled.DetailContentBox>
            <Styled.DetailPinInfo>
              <h1>제목</h1>
              <p>내용내용</p>
            </Styled.DetailPinInfo>
            <Styled.DetailUserInfo>
              <figure>
                <div>
                  <img src="" alt="" />
                </div>
                <figcaption>
                  <p>작성자</p>
                  <p>팔로워 수 700만명</p>
                </figcaption>
              </figure>
              <button>팔로우</button>
            </Styled.DetailUserInfo>
            <Styled.DetailReplyBox>
              {false ? (
                <div>댓글</div>
              ) : (
                <div>
                  댓글{" "}
                  <button>
                    <ArrowDown />
                  </button>
                </div>
              )}
              {false ? (
                <p>
                  아직 댓글이 없습니다. 대화를 시작하려면 하나를 추가하세요.
                </p>
              ) : (
                <Styled.DetailReplyList>
                  <Reply />
                  <Reply />
                  <Reply />
                </Styled.DetailReplyList>
              )}
            </Styled.DetailReplyBox>
          </Styled.DetailContentBox>
          <Styled.DetailAddBox>
            <div>
              <div className="row">
                {false ? <h3>어떠셨나요?</h3> : <h3>댓글 3개</h3>}
                <div>🤍</div>
              </div>
              <div className="row">
                <figure>
                  <img src="" alt="" />
                </figure>
                <Styled.DetailAddInputBox>
                  <input type="text" />
                  <button
                    onClick={onClickEmojiButtonHandler}
                    className={showEmojiBox ? "emojiButtonActive" : ""}
                  >
                    <Smile fill="gray" />
                  </button>
                  {showEmojiBox && (
                    <div id="emojiBox" ref={emojiPickerRef}>
                      <Down />
                      <EmojiPicker height="400px" />
                    </div>
                  )}
                </Styled.DetailAddInputBox>
              </div>
            </div>
          </Styled.DetailAddBox>
        </section>
      </Styled.DetailArticle>
    </Styled.Detailmain>
  );
}
