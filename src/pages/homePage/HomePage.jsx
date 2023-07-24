import React, { useState } from "react";
import { styled } from "styled-components";
import jejus from '../../assets/img/jejus.jpg'
import ten from '../../assets/img/10.jpg'

export default function HomePage() {

  const imgs = [jejus, ten];

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (700 - 200 + 1) + 200) + "px"; // 200px부터 500px 사이의 랜덤 높이
  };

  return (
    <div>
      <PinCardContainor>
        {imgs.map((image) => (
          <PinCard>
            <img src={image} alt='하강~' />
            <SaveButton>저장</SaveButton>
          </PinCard>
        )
        )}
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
      </PinCardContainor>
    </div>
  )
}

const PinCard = styled.div`
  width: 240px;
  border: none;
  border-radius: 12px;
  position: relative;
  height : ${({ height }) => height};
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
`

const PinCardContainor = styled.div`
  column-width: 230px;
  margin: 10px 50px 0 50px;
`


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