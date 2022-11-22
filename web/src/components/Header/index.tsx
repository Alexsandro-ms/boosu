import React, { useState } from 'react';

// Icons
import { List, X, User, House, NoteBlank } from 'phosphor-react';

import { Container, Menu } from './styles';

function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleStateMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <Container>
      <button onClick={handleStateMenu}>
        <List size={32} />
      </button>
      <h1>Boosu</h1>
      {isActiveMenu && (
        <Menu>
          <button onClick={handleStateMenu}>
            <X size={24} />
          </button>
          <div className="user-container">
            <div className="user">
              <User size={32} />
            </div>
            <strong>Boosu</strong>
            <div className="list-category">
              <ul>
                <li>
                  <a href="#">
                    <House size={24} />
                    <span>Página Inicial</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <NoteBlank size={24} />
                    <span>Pedidos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Menu>
      )}
    </Container>
  );
}

export default Header;
