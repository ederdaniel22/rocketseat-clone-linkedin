import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars1.githubusercontent.com/u/60990935?s=460&u=6eac8c5d69de73a638cad6d0dab0889cb32f4283&v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;