import { Fragment, useState } from 'react';
import classNames from 'classnames/bind'

import ActionBar from './ActionBar';
import Navbar from '../../components/Navbar';
import styles from './index.module.scss'
import { List } from '../../components/Icons';
import Container from '../../components/Container';

const cx = classNames.bind(styles)

function Header() {
    const [hide, setHide] = useState(false)

    function toggleMenu() {
        setHide(!hide)
    }

    return (
        <Fragment>
            <div className={cx("wrapper")}>
                <Container className={cx("container-header")}>
                    <ActionBar />
                    <Navbar className={cx("headerbar")} />
                    <div onClick={toggleMenu} className={cx("menu-icon")}>
                        <List height="1.5rem" width="1.5rem" />
                    </div>
                </Container>
            </div>
            {
                hide && (
                    <Navbar className={cx("sidebar")} />
                )
            }
        </Fragment>
    );
}

export default Header;