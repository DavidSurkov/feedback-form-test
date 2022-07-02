import React from 'react';
import styled from "styled-components";
import facebookSvg from './assets/icons/facebook.svg';
import twitterSvg from './assets/icons/twitter.svg';
import linkedinSvg from './assets/icons/linkedin.svg';
import pinterestSvg from './assets/icons/pinterest.svg';
import greenSmile from './assets/greenSmile.svg';
import yellowSmile from './assets/yellowSmile.svg';
import pinkSmile from './assets/pinkSmile.svg';

const Container = styled.div`
  background-color: rgba(250, 250, 250, 1);
  border: 1px solid rgba(216, 216, 216, 1);
  height: 20vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Icon = styled.img``;

const GreenSmile = styled.img`
  margin-left: 60%;
  align-self: flex-start;
`;

const YellowSmile = styled.img`
  justify-self: flex-end;
`;

const PinkSmile = styled.img`
  align-self: flex-start;
  height: 200px;
  width: 200px;
`;

const IconBlock = styled.div`
  margin-left: 5%;
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const Footer = () => {
  return (
    <Container>
      <PinkSmile src={pinkSmile} alt={'smile'}/>
      <IconBlock>
        <Icon src={facebookSvg}/>
        <Icon src={twitterSvg}/>
        <Icon src={linkedinSvg}/>
        <Icon src={pinterestSvg}/>
      </IconBlock>
      <GreenSmile src={greenSmile} alt={'smile'}/>
      <YellowSmile src={yellowSmile} alt={'smile'}/>
    </Container>
  );
};

