import React from 'react';
import * as style from './styled';

const Header = () => {
  return (
    <style.Wrapper>
      <style.Title>PokeDex</style.Title>
      <style.SearchInput placeholder={'Digite o nome do seu pokemon'} />
    </style.Wrapper>
  );
};

export default Header;
