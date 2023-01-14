import React, { FC } from 'react';
import s from './Header.module.scss';

const Header: FC = () => {
  return (
<<<<<<< HEAD
    <header className={styles.header}>113</header>
=======
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header_inner}>
          <div className={s.brand}>
            Invenire
          </div>
          <nav className={s.nav}>
            <div className={s.nav_item}>
              Projects
            </div>
            <div className={s.nav_item}>
              Teams
            </div>
            <div className={s.nav_item}>
              About us
            </div>
          </nav>
          <div className={s.user_photo}>
            <img src="" alt="ava" />
          </div>
        </div>
      </div>
    </header>
>>>>>>> c811b5c (header)
  );
};

export default Header;