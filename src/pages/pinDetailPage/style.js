import { styled } from "styled-components";

const Detailmain = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
`;

const DetailArticle = styled.article`
  display: flex;
  width: 60%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & > figure {
    flex: 1;
    overflow: hidden;
    border-radius: 20px 0 0 20px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  section {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    border-radius: 0 20px 0 20px;
    height: 100%;
    min-height: 500px;
  }
`;

const DetailHeadNav = styled.nav`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 30px;
  background: #f9f9f9;
  border-bottom: 1px solid #e7e7e7;

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
  padding: 30px;
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
  height: 120px;
  box-sizing: border-box;
  padding: 30px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid #e7e7e7;
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
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background: #d3d3d3;
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
`;

export {
  Detailmain,
  DetailArticle,
  DetailPinInfo,
  DetailHeadNav,
  DetailContentBox,
  DetailUserInfo,
  DetailReplyBox,
  DetailReplyList,
  DetailReplyItem,
  DetailAddBox,
  DetailAddInputBox,
};
