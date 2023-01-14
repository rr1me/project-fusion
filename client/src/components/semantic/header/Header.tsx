import React, {FC} from 'react';
import s from './Header.module.scss';
import {Link} from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header_inner}>
                    <div className={s.brand}>
                        Invenire
                    </div>

                    <nav className={s.nav}>
                        <div className={s.nav_item}>
                            <Link to={'/projects'}>
                                Projects
                            </Link>
                        </div>
                        <div className={s.nav_item}>
                            <Link to={'/teams'}>
                                Teams
                            </Link>
                        </div>
                        <div className={s.nav_item}>
                            <Link to={'/about-us'}>
                                About us
                            </Link>
                        </div>
                    </nav>

                    <div className={s.user_photo}>
                        <img src='' alt='ava'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;