import React, { ForwardedRef, forwardRef } from "react";

import styled from "@emotion/styled";

import { Body1Bold, Body2, Body2Light } from "../index";

import IconRating from "@asset/icons/star.svg";

interface IFoodCardProps {
  linkUrl: string;
  placeImage: string;
  placeName: string;
  placeRating?: string;
  placeAddress: string;
}

const Link = styled.a`
    width: 100%;
    height: 100%;
    display: block;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
`;

const Card = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: flex-start;
`;

const ImageFrame = styled.div`
    width: 100%;
    min-width: 150px;
    min-height: 150px;
    aspect-ratio: 1;
    display: block;
    border-radius: 15px;
    overflow: hidden;

    transition: all 0.5s ease;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1px;
`;

const Title = styled.div`
    display: flex;
    gap: 2px;
    align-items: flex-end;
`;

const Name = styled(Body1Bold)`
    flex: 1;

    width: auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const Rating = styled.div`
    display: flex;
    align-items: center;
    flex: 0;
`;

const Description = styled(Body2Light)`
    width: auto;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const FoodCard = (
  {
    linkUrl,
    placeImage,
    placeName,
    placeRating = '0.0',
    placeAddress,
  }: IFoodCardProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Link href={linkUrl}>
      <Card>
        <ImageFrame>
          <img src={placeImage} alt={'음식점 이미지'}/>
        </ImageFrame>
        
        <TextWrapper>
          <Title>
            <Name size={'12px'}>
              {placeName}
            </Name>
            <Rating>
              <img src={IconRating} alt={'별점 아이콘'}/>
              <Body2 size={'12px'}>
                {placeRating}
              </Body2>
            </Rating>
          </Title>
          
          <Description>
            {placeAddress}
          </Description>
        </TextWrapper>
      </Card>
    </Link>
  )
}

export default forwardRef(FoodCard);