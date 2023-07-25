import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
import { ReactComponent as Smile } from "../../assets/icons/smile.svg";
import { ReactComponent as Down } from "../../assets/icons/triangleDown.svg";

import * as Styled from "./style";

export default function MakePinPage() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [divContent, setDivContent] = useState("");
  const [showEmojiBox, setShowEmojiBox] = useState(false);

  const emojiPickerRef = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleDivChange = (event) => {
    const { value } = event.target;
    setDivContent(value);
  };

  useEffect(() => {
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
    <Styled.MakePinMain>
      <Styled.MakePinArticle>
        <Styled.ArticleHeadNav>
          <button>
            <Dots />
          </button>
          <button>
            저장 <ArrowDown />
          </button>
        </Styled.ArticleHeadNav>
        <Styled.ArticleBodyBox>
          <div className="col1">
            <input type="file" />
          </div>
          <div className="col2">
            <Styled.TitleInput
              type="text"
              onChange={handleTitleChange}
              value={title}
              placeholder="제목 추가"
              $isEmpty={title === "" ? true : false}
            />
            <Styled.MakeUserInfo>
              <figure>
                <div>
                  <img src="" alt="" />
                </div>
                <figcaption>
                  <p>작성자</p>
                </figcaption>
              </figure>
            </Styled.MakeUserInfo>
            <Styled.MakePinInputBox $isEmpty={divContent === "" ? true : false}>
              <p>사람들에게 회원님의 핀에 대해 설명해 보세요</p>
              <section>
                <div
                  contentEditable
                  onInput={handleDivChange}
                  dangerouslySetInnerHTML={{ __html: divContent }}
                />
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
              </section>
            </Styled.MakePinInputBox>
            <Styled.LinkInput
              type="text"
              onChange={handleLinkChange}
              value={link}
              placeholder="랜딩 페이지 링크 추가"
              $isEmpty={link === "" ? true : false}
            />
          </div>
        </Styled.ArticleBodyBox>
      </Styled.MakePinArticle>
    </Styled.MakePinMain>
  );
}
