import React from 'react';
import './App.css';
import { Form } from './Form';
import styled from 'styled-components';
import { Footer } from './Footer';
import mapSvg from './assets/map.svg';
import yellowSmile from './assets/yellowSmile.svg';
import yellowSmileDown from './assets/yellowSmileDown.svg';
import pinkSmile from './assets/pinkSmile.svg';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const Body = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const MapBlock = styled.div`
  display: flex;
  align-items: flex-start;
`;
const StyledSvgBlock = styled.div`
  align-self: center;
  display: flex;
`;
const Img = styled.img`
  max-width: 600px;
  max-height: 85vh;
`;
const YellowSmile = styled.img`
  position: absolute;
  margin-top: -110px;
`;
const YellowSmileDown = styled.img`
  align-self: flex-start;
`;
const PinkSmile = styled.img``;

function App() {
  return (
    <Container className="App">
      <Body>
        <FormBlock>
          <YellowSmile src={yellowSmile} alt={'smile'} />
          <Form />
        </FormBlock>
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
