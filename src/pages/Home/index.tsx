import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';

import {
  Title,
  Who,
  BoxesContainer,
  BoxImage,
  BoxText,
  BoxAdd,
  BoxAddIcon,
} from './styles';

const Home: React.FC = () => {
  const profileImages = [
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABSvOp0oUwV5U7Qacn8Paw4aVoZTdnAJWnqUkM83Ddk1Rx1-xp1r9jBFabf69Nfs44lGpWq-CtO2dEh4Svy7zT4UlkguE.png?r=fcc',
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQazGc8OxX63e1mRo_dG4rnAjvy-KW57vP-CaAUavTsm33zC29Zx30V6AA0Ma8x_nqX7LNVfRMVbpvQzf3xT4C1muU9z.png?r=f80',
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeZakDz11ZWzhgfol0EvY3nQQfPNItHRE_Ek8LFdWkZ3fEf_a2By9czWI0zTV-AtR_B66axVhJUOqTD6vMmPlhnFyZaE.png?r=f71',
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABRq_vg6q9dpRE2HYHKyX3w-_2oQxO-MlioyEjsO67x-bgwuVzoatgKMM2p0MWafIg8breI6Sr6aICA4Hk3JanZf8hIEM.png?r=1b8',
  ];

  return (
    <>
      <Logo />
      <Who>
        <Title>Quem está assistindo?</Title>
        <BoxesContainer>
          <Link to="/browse/0">
            <BoxImage src={profileImages[0]} />
            <BoxText>Victor</BoxText>
          </Link>
          <Link to="/browse/1">
            <BoxImage src={profileImages[1]} />
            <BoxText>Cleiton</BoxText>
          </Link>
          <Link to="/browse/2">
            <BoxImage src={profileImages[2]} />
            <BoxText>Cleber</BoxText>
          </Link>
          <Link to="/browse/3">
            <BoxImage src={profileImages[3]} />
            <BoxText>Infantil</BoxText>
          </Link>
          <Link to="/">
            <BoxAdd className="add">
              <BoxAddIcon className="icon" />
            </BoxAdd>
            <BoxText>Adicionar perfil</BoxText>
          </Link>
        </BoxesContainer>
        <Link className="manage-profile-button" to="/">
          Gerenciar perfis
        </Link>
      </Who>
    </>
  );
};

export default Home;
