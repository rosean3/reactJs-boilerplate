import React from 'react';
import { Container } from './style';
import { Logo } from '../../assets';

export const Home: React.FC = () => (
  <Container>
    <img src={Logo} alt="" />
    <h1>ReactJS Boilerplate</h1>
    <p>
      Made with
      {' '}
      <strong>&lt; &#x0002F; &gt;</strong>
      {' '}
      and
      {' '}
      <strong>&hearts;</strong>
      {' '}
      by CITi
    </p>
  </Container>
);
