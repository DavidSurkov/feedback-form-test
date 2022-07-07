import React from 'react';
import './App.css';
import { Form } from './Form';
import styled from 'styled-components';
import { Footer } from './Footer';
import mapSvg from './assets/map.svg';
import yellowSmile from './assets/yellowSmile.svg';
import yellowSmileDown from './assets/yellowSmileDown.svg';
import pinkSmile from './assets/pinkSmile.svg';
import { devices } from './mediaQuery/mediaQuery';

const Container = styled.div`
  display: flex;
  text-align: center;
  width: content-box;
  flex-direction: column;
  justify-content: space-between;
  @media ${devices.tablet} {
    display: flex;
    text-align: center;
    width: content-box;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const MapBlock = styled.div`
  display: none;
  @media ${devices.tablet} {
    display: flex;
    align-items: flex-start;
  }
`;
const StyledSvgBlock = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  max-width: 600px;
  max-height: 85vh;
`;
const YellowSmile = styled.img`
  display: none;
  @media ${devices.tablet} {
    display: block;
    max-width: 122px;
    max-height: 122px;
    position: absolute;
    align-self: flex-start;
  }
`;
const YellowSmileDown = styled.img`
  align-self: flex-start;
`;
const PinkSmile = styled.img``;

function App() {
  return (
    <Container className="App">
      <Body>
        <YellowSmile src={yellowSmile} alt={'smile'} />
        <Form />
        <MapBlock>
          <StyledSvgBlock>
            <YellowSmileDown src={yellowSmileDown} alt={'smile'} />
            <PinkSmile src={pinkSmile} alt={'smile'} />
          </StyledSvgBlock>
          <Img src={mapSvg} />
        </MapBlock>
      </Body>
      <Footer />
    </Container>
  );
}

export default App;
