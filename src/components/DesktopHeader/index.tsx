import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedinIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle, 
  CaretDownIcon, 
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Inicio</span>
            </button>

            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>

            <button>
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/60990935?s=460&u=6eac8c5d69de73a638cad6d0dab0889cb32f4283&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>

          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;