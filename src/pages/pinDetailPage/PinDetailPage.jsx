import React from "react";
import { styled } from "styled-components";

export default function PinDetailPage() {
  return (
    <Detailmain>
      <DetailArticle>
        <figure>
          <img
            src="https://i.pinimg.com/564x/ae/79/58/ae7958c658065b4090f2610429ece419.jpg"
            alt=""
          />
        </figure>
        <section>
          <DetailHeadNav>
            <div>
              <button>...</button>
              <button>공유</button>
              <button>🔗</button>
            </div>
            <button>저장 ▼</button>
          </DetailHeadNav>
          <DetailContentBox>
            <DetailPinInfo>
              <h1>제목</h1>
              <p>내용내용</p>
            </DetailPinInfo>
            <DetailUserInfo>
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
            </DetailUserInfo>
            <DetailReplyBox>
              <button>댓글 ▼</button>
              {false ? (
                <p>
                  아직 댓글이 없습니다. 대화를 시작하려면 하나를 추가하세요.
                </p>
              ) : (
                <DetailReplyList>
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
                          <button>...</button>
                        </div>
                      </figcaption>
                    </figure>
                  </DetailReplyItem>
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
                          <button>...</button>
                        </div>
                      </figcaption>
                    </figure>
                  </DetailReplyItem>
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
                          <button>...</button>
                        </div>
                      </figcaption>
                    </figure>
                  </DetailReplyItem>
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
                          <button>...</button>
                        </div>
                      </figcaption>
                    </figure>
                  </DetailReplyItem>
                </DetailReplyList>
              )}
            </DetailReplyBox>
          </DetailContentBox>
          <DetailAddBox>
            <div>
              <div className="row">
                {false ? <h3>어떠셨나요?</h3> : <h3>댓글 3개</h3>}
                <div>🤍</div>
              </div>
              <div className="row">
                <figure>
                  <img src="" alt="" />
                </figure>
                <DetailAddInputBox>
                  <input type="text" />
                  <button>😍</button>
                </DetailAddInputBox>
              </div>
            </div>
          </DetailAddBox>
        </section>
      </DetailArticle>
    </Detailmain>
  );
}

const Detailmain = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
`;

const DetailArticle = styled.article`
  display: flex;
  width: 60%;
  max-height: 900px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & > figure {
    flex: 1;
    overflow: hidden;
    border-radius: 20px 0 0 20px;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    border-radius: 0 20px 0 20px;
  }
`;

const DetailHeadNav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: #f9f9f9;

  & button {
    min-width: 60px;
    min-height: 40px;
    border: none;
    cursor: pointer;
  }
`;

const DetailContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 40px;
  padding: 0 30px;
`;

const DetailPinInfo = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }
`;

const DetailUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      min-width: 40px;
      min-height: 40px;
      border-radius: 50%;
      background: black;
    }

    figcaption {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

const DetailReplyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > button {
    width: 100px;
  }
`;

const DetailReplyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailReplyItem = styled.li`
  figure {
    display: flex;
    align-items: center;
    gap: 10px;

    & > div {
      min-width: 35px;
      min-height: 35px;
      border-radius: 50%;
      background: black;
    }

    figcaption {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

const DetailAddBox = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid gray;
  padding-top: 20px;

  .row:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .row:last-child {
    display: flex;
    align-items: center;
    gap: 10px;

    figure {
      min-width: 35px;
      min-height: 35px;
      border-radius: 50%;
      background: black;
    }
  }
`;

const DetailAddInputBox = styled.div`
  box-sizing: border-box;
  padding: 5px;
  background: gray;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    width: 100%;
    border: none;
    background: none;
    padding: 5px 5px 5px 10px;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
  }
`;
