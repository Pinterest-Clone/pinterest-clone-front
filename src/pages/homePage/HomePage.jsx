import React from "react";
import { styled } from "styled-components";
import { useQuery } from "react-query";

import jejus from "../../assets/img/jejus.jpg";
import ten from "../../assets/img/10.jpg";
import { useNavigate } from "react-router-dom";

// axios 함수
import { getAllPins } from "../../axios/Home";

export default function HomePage() {
  const imgs = [jejus, ten];

  const navigate = useNavigate();

  const saveBtnClickHandler = () => {};

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (700 - 200 + 1) + 200) + "px"; // 200px부터 500px 사이의 랜덤 높이
  };

  const { data, isLoading, isError, error } = useQuery(
    "getAllPins",
    getAllPins
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const allPins = data;
  console.log(allPins);

  const dummyPins = [
    {
      pin_id: 1,
      image: "이미지 url",
    },
    {
      pin_id: 2,
      image: "이미지 url",
    },
  ];

  return (
    <div>
      <PinCardContainer>
        {imgs.map((image) => (
          <PinCard onClick={() => navigate("/detail/:1")}>
            <img src={image} alt="하강~" />
            <SaveButton onClick={() => saveBtnClickHandler}>저장</SaveButton>
          </PinCard>
        ))}
        <PinCard height={getRandomHeight()}>card3</PinCard>
        <PinCard height={getRandomHeight()}>card4</PinCard>
        <PinCard height={getRandomHeight()}>card5</PinCard>
        <PinCard height={getRandomHeight()}>card6</PinCard>
        <PinCard height={getRandomHeight()}>card7</PinCard>
        <PinCard height={getRandomHeight()}>card8</PinCard>
        <PinCard height={getRandomHeight()}>card1</PinCard>
        <PinCard height={getRandomHeight()}>card2</PinCard>
        <PinCard height={getRandomHeight()}>card3</PinCard>
        <PinCard height={getRandomHeight()}>card4</PinCard>
        <PinCard height={getRandomHeight()}>card5</PinCard>
        <PinCard height={getRandomHeight()}>card6</PinCard>
        <PinCard height={getRandomHeight()}>card7</PinCard>
        <PinCard height={getRandomHeight()}>card8</PinCard>
        <PinCard height={getRandomHeight()}>card5</PinCard>
        <PinCard height={getRandomHeight()}>card6</PinCard>
        <PinCard height={getRandomHeight()}>card7</PinCard>
        <PinCard height={getRandomHeight()}>card8</PinCard>
        <PinCard height={getRandomHeight()}>card5</PinCard>
        <PinCard height={getRandomHeight()}>card6</PinCard>
        <PinCard height={getRandomHeight()}>card7</PinCard>
        <PinCard height={getRandomHeight()}>card8</PinCard>
      </PinCardContainer>
    </div>
  );
}

const PinCard = styled.div`
  width: 240px;
  border: none;
  border-radius: 12px;
  position: relative;
  height: ${({ height }) => height};
  background-color: lightgray;
  margin: 12px;
  display: inline-block;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const PinCardContainer = styled.div`
  column-width: 230px;
  margin: 10px 50px 0 50px;
`;

const SaveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${PinCard}:hover & {
    opacity: 1;
  }
`;

//onmouse? mouse over 사용해서 true false 설정해주기!
