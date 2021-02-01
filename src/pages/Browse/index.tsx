import React, { useCallback, useRef, useState } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';
import {
  Header,
  SearchButton,
  RightMenu,
  NotificationsButton,
  ProfileMenu,
  ProfileImage,
  Caret,
  ProfileDropdown,
  Line,
  ProfileDropdownContainer,
  SearchInputContainer,
  SearchInput,
} from './styles';
import Logo from '../../components/Logo';

interface ProfileImageParam {
  profileImage: string;
}

const Browse: React.FC = () => {
  const { params } = useRouteMatch<ProfileImageParam>();

  const [searchShown, setSearchShown] = useState(false);

  const searchInput = useRef<HTMLInputElement>(null);

  const toggleSearch = useCallback(() => {
    setSearchShown(true);
    setTimeout(() => {
      searchInput.current?.focus();
    }, 200);
  }, []);

  const handleSearchInputBlur = useCallback(() => {
    setSearchShown(false);
  }, []);

  const profileImages = [
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABSvOp0oUwV5U7Qacn8Paw4aVoZTdnAJWnqUkM83Ddk1Rx1-xp1r9jBFabf69Nfs44lGpWq-CtO2dEh4Svy7zT4UlkguE.png?r=fcc',
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQazGc8OxX63e1mRo_dG4rnAjvy-KW57vP-CaAUavTsm33zC29Zx30V6AA0Ma8x_nqX7LNVfRMVbpvQzf3xT4C1muU9z.png?r=f80',
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeZakDz11ZWzhgfol0EvY3nQQfPNItHRE_Ek8LFdWkZ3fEf_a2By9czWI0zTV-AtR_B66axVhJUOqTD6vMmPlhnFyZaE.png?r=f71',
    'https://occ-0-1125-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABRq_vg6q9dpRE2HYHKyX3w-_2oQxO-MlioyEjsO67x-bgwuVzoatgKMM2p0MWafIg8breI6Sr6aICA4Hk3JanZf8hIEM.png?r=1b8',
  ];

  return (
    <Header>
      <Logo />
      <ul className="main-menu">
        <li>
          <a className="active" href="/">
            Início
          </a>
        </li>
        <li>
          <a href="/">Séries</a>
        </li>
        <li>
          <a href="/">Filmes</a>
        </li>
        <li>
          <a href="/">Bombando</a>
        </li>
        <li>
          <a href="/">Minha lista</a>
        </li>
      </ul>
      <RightMenu>
        <SearchInputContainer shown={searchShown}>
          <SearchButton className="icon" />
          <SearchInput
            ref={searchInput}
            onBlur={handleSearchInputBlur}
            placeholder="Títulos, gente e gêneros"
          />
        </SearchInputContainer>

        <SearchButton
          className="icon"
          onClick={toggleSearch}
          shown={searchShown}
        />
        <a className="infantil" href="/">
          Infantil
        </a>
        <NotificationsButton className="icon" />
        <ProfileMenu>
          <ProfileImage
            src={profileImages[parseInt(params.profileImage, 10)]}
          />
          <Caret />
          <ProfileDropdownContainer>
            <ProfileDropdown>
              <ul className="profile-menu">
                <li>
                  <Link to="/browse/0">
                    <ProfileImage src={profileImages[0]} />
                    Victor
                  </Link>
                </li>
                <li>
                  <Link to="/browse/1">
                    <ProfileImage src={profileImages[1]} />
                    Cleiton
                  </Link>
                </li>
                <li>
                  <Link to="/browse/2">
                    <ProfileImage src={profileImages[2]} />
                    Cleber
                  </Link>
                </li>
                <li>
                  <Link to="/browse/3">
                    <ProfileImage src={profileImages[3]} />
                    Infantil
                  </Link>
                </li>
                <li>
                  <Link to="/">Gerenciar perfis</Link>
                </li>
              </ul>
              <Line />
              <ul className="profile-menu profile-sub-menu">
                <li>
                  <Link to="/">Conta</Link>
                </li>
                <li>
                  <Link to="/">Centro de ajuda</Link>
                </li>
                <li>
                  <Link to="/">Sair da Netflix</Link>
                </li>
              </ul>
            </ProfileDropdown>
          </ProfileDropdownContainer>
        </ProfileMenu>
      </RightMenu>
    </Header>
  );
};

export default Browse;
