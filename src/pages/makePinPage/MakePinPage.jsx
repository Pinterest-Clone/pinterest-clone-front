import React, { useState } from "react";

import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";

import * as Styled from "./style";
import { PinUserInfo } from "./PinUserInfo";
import { PinTextarea } from "./PinTextarea";

export default function MakePinPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <Styled.MakePinMain>
      <Styled.MakePinArticle>
        <Styled.ArticleHeadNav>
          <button>
            <Dots stroke="black" />
          </button>
          <button>
            <p>저장</p>
            <ArrowDown fill="white" />
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
            <PinUserInfo />
            <PinTextarea content={content} setContent={setContent} />
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
