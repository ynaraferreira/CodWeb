import React from 'react';
import styled from 'styled-components';
import EstudosSrc from './assets/estudos.jpg';
import AnalystSrc from './assets/analyst.png';
import FutureSrc from './assets/foguete.jpg';
import {FaCheckCircle } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Section = styled.div`
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const UpperSection = styled(Section)`
background-color: #fff;
color: #4682B4;
display: flex;
align-items: center;
justify-content: left;
text-align: left;
`;

const MiddleSection = styled(Section)`
background-color: #ADD8E6;
display: flex;
align-items: center;
justify-content: left;
text-align: center;
color: #4682B4;

`;

const LowerSection = styled(Section)`
  background-color: #fff;
  color: #4682B4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #4682B4;
`;

const FutureSection = styled(Section)`
  background-color: #B0C4DE;
  color: #4682B4;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  `;

const SubHeading = styled.h2`
  margin-top: 20px;
  font-size: 2em;
`;

const Text = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  margin-left: 100px;
  margin-right: 50px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin-left: 200px;
`;

const ListItem = styled.li`
  font-size: 1.2em;
  margin: 10px 0;
  display: flex;
  align-items: center;
  text-align: center;

  svg {
    margin-right: 10px;
    color: #008000;
  }
`;


const Tecnologias = () => {
  return (
    <Container>
      <UpperSection>
      <Heading>O que aprendi ao longo do tempo...</Heading>

      <Image src={EstudosSrc} alt="Imagem Descritiva" /> 
      
        <Text>JavaScript, React, Bootstrap, CSS, HTML, básico em C e C++. Em paralelo a isso, estudei gestão de tráfego, design e copy, para atuar em MKt Digital. Como desenvolvi grande interesse na área de dados, estou fazendo um curso online de Engenharia de Dados, estudando a linguagem Python e SQL.</Text>
        
      </UpperSection>
      <MiddleSection>
        <SubHeading>Trabalhei durante 3 anos com Marketing Digital.<br></br>Atualmente sou Analista de Business Intelligence</SubHeading>
        <Image src={AnalystSrc} alt="Imagem Descritiva" />
        <Text></Text>
      </MiddleSection>
      <LowerSection>
      <Image src={FutureSrc} alt="Imagem Descritiva" />
       <SubHeading>No futuro, eu desejo me tornar Front-End por gostar muito das tecnologias estudadas, entretanto quero solidificar minha carreira na área de dados. </SubHeading>
        
      </LowerSection>
      <FutureSection>
        <SubHeading>O que desejo aprender</SubHeading>
        <List>
            <ListItem><FaCheckCircle /> Linguagem Python</ListItem>
            <ListItem><FaCheckCircle /> SQL</ListItem>
            <ListItem><FaCheckCircle /> Inteligência Artificial</ListItem>
            <ListItem><FaCheckCircle /> Área de Engenharia de Dados</ListItem>
            </List>
      </FutureSection>
    </Container>
  );
};

export default Tecnologias;
