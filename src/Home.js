import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import ProfileImageSrc from './assets/ynaraft.png';
import JourneyImageSrc from './assets/journey.jpg'; 

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
  background-color: #ADD8E6; 
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4682B4;
`;

const MiddleSection = styled(Section)`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #4682B4;
`;

const LowerSection = styled(Section)`
  background-color: #B0C4DE;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4682B4;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: #708090 0 0 10px;
`;

const Heading = styled.h1`
  font-size: 2.5em;
`;

const SubHeading = styled.h2`
  font-size: 2em;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
   margin-right: 100px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.2em;
  margin: 10px 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    color: #007bff;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  a {
    margin: 0 10px;
    color: #333;
    font-size: 24px;

    &:hover {
      color: #007bff;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <UpperSection>
        <Heading>Ynara Ferreira</Heading>
        <ProfileImage src={ProfileImageSrc} alt="Foto Perfil" />
        <SubHeading>Olá! Meu nome é Ynara Ferreira, sou uma entusiasta da tecnologia, aprendendo sobre o mundo de desenvolvimento React</SubHeading>
      </UpperSection>
      <MiddleSection>
        <Image src={JourneyImageSrc} alt="Imagem Descritiva" />
        <div>
          <SubHeading>Minha Jornada</SubHeading>
          <List>
            <ListItem><FaCheckCircle /> Comecei em 2016 como estudante de Sistemas para Web, em Fortaleza-CE</ListItem>
            <ListItem><FaCheckCircle /> Estudei Marketing Digital de 2020 à 2023, em Porto-Portugal</ListItem>
            <ListItem><FaCheckCircle /> Em 2023, já em Recife-PE, concluí um curso de Programação Web, pelo SENAC-PE</ListItem>
            <ListItem><FaCheckCircle /> Atualmente sou estudante de Engenharia da Computação</ListItem>
            <Text>Na página seguinte poderá conferir os meus conhecimentos e expectativas para o futuro</Text>
          </List>
        </div>
      </MiddleSection>
      <LowerSection>
        <SubHeading>Contatos</SubHeading>
        <ContactInfo>
          <IconList>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
            <a href="tel:0000000000"><FaPhone /></a>
            <a href="mailto:seu-email@example.com"><FaEnvelope /></a>
            <a href="#"><FaMapMarkerAlt /></a>
          </IconList>
        </ContactInfo>
      </LowerSection>
    </Container>
  );
};


export default Home;
