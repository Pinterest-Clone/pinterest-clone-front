import React from "react";
import { DetailReplyItem } from "./style";

import { ReactComponent as Dots } from "../../assets/icons/dots.svg";

export default function Reply() {
  return (
    <DetailReplyItem>
      <figure>
        <div>
          <img src="" alt="" />
        </div>
        <figcaption>
          <div>
            <span>작성자</span>
            <span>댓글내용</span>
          </div>
          <div>
            <span>5주 전</span>
            <button>🤍</button>
            <button>
              <Dots />
            </button>
          </div>
        </figcaption>
      </figure>
    </DetailReplyItem>
  );
}
