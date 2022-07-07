import React from 'react';
import styled from 'styled-components';
import facebookSvg from './assets/icons/facebook.svg';
import twitterSvg from './assets/icons/twitter.svg';
import linkedinSvg from './assets/icons/linkedin.svg';
import pinterestSvg from './assets/icons/pinterest.svg';
import greenSmile from './assets/greenSmile.svg';
import yellowSmile from './assets/yellowSmile.svg';
import pinkSmile from './assets/pinkSmile.svg';
import { devices } from './mediaQuery/mediaQuery';

const Container = styled.div`
  height: 20vh;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(250, 250, 250, 1);
  border: 1px solid rgba(216, 216, 216, 1);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Icon = styled.img``;

const GreenSmile = styled.img`
  position: absolute;
  top: 0;
  right: 20%;
  @media ${devices.tablet} {
    right: 10%;
  }
`;

const YellowSmile = styled.img`
  position: absolute;
  right: -20px;
`;

const PinkSmile = styled.img`
  display: none;
  @media ${devices.tablet} {
    display: block;
    align-self: flex-start;
    height: 200px;
    width: 200px;
  }
`;

const IconBlock = styled.div`
  margin-left: 5%;
  display: flex;
  justify-content: space-around;
`;
const Link = styled.a`
  margin: 0 15px;
`;

export const Footer = () => {
  return (
    <Container>
      <PinkSmile src={pinkSmile} alt={'smile'} />
      <IconBlock>
        <Link href="https://facebook.com">
          <Icon src={facebookSvg} />
        </Link>
        <Link href="https://twitter.com">
          <Icon src={twitterSvg} />
        </Link>
        <Link href="https://www.linkedin.com/">
          <Icon src={linkedinSvg} />
        </Link>
        <Link href="https://www.pinterest.com">
          <Icon src={pinterestSvg} />
        </Link>
      </IconBlock>
      <GreenSmile src={greenSmile} alt={'smile'} />
      <YellowSmile src={yellowSmile} alt={'smile'} />
    </Container>
  );
};
