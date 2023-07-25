import styled from "styled-components";

export const MakePinMain = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  background: #efefef;
`;

export const MakePinArticle = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 700px;
  padding: 50px;
  height: fit-content;
  background: #ffffff;
  border-radius: 20px;
`;

export const ArticleHeadNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

export const ArticleBodyBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .col1 {
    width: 35%;
    border-radius: 10px;
    background: #efefef;
  }

  .col2 {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const TitleInput = styled.input`
  border: none;
  font-size: 30px;
  font-weight: 700;
  border-bottom: ${(props) => (props.$isEmpty ? "1px solid gray" : "none")};

  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;

export const MakeUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
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

export const MakePinInputBox = styled.div`
  section {
    position: relative;
    width: 100%;
    margin-bottom: 150px;
    box-sizing: border-box;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: ${(props) => (props.$isEmpty ? "1px solid gray" : "none")};

    & > div {
      width: 100%;
      border: none;
      background: none;
      resize: none;
      user-select: text;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      line-height: 1.3;

      &:focus {
        outline: none;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      position: relative;
      border: none;
      background: none;
      cursor: pointer;

      &:hover {
        background: rgba(231, 231, 231, 0.7); //#e7e7e7
      }
    }

    .emojiButtonActive {
      background: rgba(231, 231, 231, 0.7);
    }

    #emojiBox {
      position: absolute;
      bottom: 45px;
      right: 0;
      z-index: 1;

      svg {
        width: 30px;
        position: absolute;
        bottom: -18px;
        right: 10px;
      }
    }
  }

  & > :focus-within {
    border-bottom: 2px solid blue;
  }
`;

export const LinkInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: ${(props) => (props.$isEmpty ? "1px solid gray" : "none")};

  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;
