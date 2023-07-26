import React from "react";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import * as Styled from "./style";

function PinReplyList() {
  return (
    <Styled.DetailReplyList>
      <Styled.DetailReplyItem>
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
      </Styled.DetailReplyItem>
      <Styled.DetailReplyItem>
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
      </Styled.DetailReplyItem>
      <Styled.DetailReplyItem>
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
      </Styled.DetailReplyItem>
      <Styled.DetailReplyItem>
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
      </Styled.DetailReplyItem>
    </Styled.DetailReplyList>
  );
}

export default PinReplyList;
