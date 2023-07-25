import { styled } from "styled-components";

const EditOuter = styled.div`
  padding: 80px 0 80px 0;
  flex-direction: row;
`

const ContentOuter = styled.div`
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const EditNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 25%;
  margin-right: 100px;
  padding-right: 100px;
  
  
  & > div {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: fit-content;
    margin: 10px 0 0 10px;

    div:first-child{
      width: fit-content;
      box-sizing: border-box;
      padding: 10px;
      font-weight:600;
      
      
      &:hover {
        background: ${(props) => (props.isSelected ? "none" : "#efefef")};
        border-radius: 10px;
      }
    }
  }
`

const SelectedBar = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1px 0;
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  background: ${(props) => (props.isSelected ? "black" : "none")};
`

const EditSection = styled.div`
  max-width: 490px;
  box-sizing: border-box;
  width: 75%;
  margin-top: 10px;
`

const OpenProfileEdit = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TextAlign = styled.div`
  margin-top: 18px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 12px;
`

const Input = styled.input`
width: 220px;
padding: 10px;
border: 1px solid lightgrey;
border-radius: 14px;

&:hover {
  border-color: grey;
};
`

const PersonalInfoEdit = styled.div`
`

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  border-top: 1px solid #efefef;
  background-color: #fff;
  box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.1);
`

const SaveBtn = styled.div`
  cursor: pointer;
  padding: 15px;
  margin: 15px 0 15px 10px;
  border: box-sizing;
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "red" : "#efefef"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "#5e5e5e")};
  border-radius: 50px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;
`;

export {
  EditOuter,
  ContentOuter,
  EditNav,
  SelectedBar,
  EditSection,
  OpenProfileEdit,
  TextAlign,
  Input,
  PersonalInfoEdit,
  FooterSection,
  SaveBtn,
}
