import React, { FC, useState } from 'react';

import { ROUTERS } from './../../constants/constantsRouter';
import * as S from './styled';

export const Navigation: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <S.NavBar>
        <S.Logo>Todo list</S.Logo>
        <S.BurgerContainer onClick={toggleMenu} data-testid="burger-button">
          <S.Burger open={menuOpen}>
            <span />
            <span />
            <span />
          </S.Burger>
        </S.BurgerContainer>
        <S.NavLinksDesktop>
          <S.StyledLink to={ROUTERS.home}>Home</S.StyledLink>
          <S.StyledLink to={ROUTERS.settings}>Settings</S.StyledLink>
        </S.NavLinksDesktop>
      </S.NavBar>
      <S.NavLinksMobile open={menuOpen}>
        <S.StyledLink to={ROUTERS.home} onClick={closeMenu}>
          Home
        </S.StyledLink>
        <S.StyledLink to={ROUTERS.settings} onClick={closeMenu}>
          Settings
        </S.StyledLink>
      </S.NavLinksMobile>
    </>
  );
};
