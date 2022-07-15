import classNames from 'classnames/bind'
import { NavLink } from "react-router-dom";

import { HouseDoor, JournalText, Newspaper, ShieldCheck, Telephone } from '../Icons';
import styles from './index.module.scss'

const cx = classNames.bind(styles)

function Navbar({ className }) {
    return (
        <div className={cx("wrapper", className)}>
            <NavLink className={(nav) => cx("link", { "active": nav.isActive })} to="/trang-chu">
                <HouseDoor className={cx('icon')} />
                Trang chủ
            </NavLink>
            <NavLink className={(nav) => cx("link", { "active": nav.isActive })} to="/tin-tuc-san-pham">
                <Newspaper className={cx('icon')} />
                Tin tức
            </NavLink>
            <NavLink className={(nav) => cx("link", { "active": nav.isActive })} to="/gioi-thieu-va-lien-he">
                <Telephone className={cx('icon')} />
                Giới thiệu & liên hệ
            </NavLink>
            <NavLink className={(nav) => cx("link", { "active": nav.isActive })} to="/chinh-sach-bao-hanh">
                <ShieldCheck className={cx('icon')} />
                Chính sách bảo hành
            </NavLink>
            <NavLink className={(nav) => cx("link", { "active": nav.isActive })} to="/nhat-ki-thuong-ngay">
                <JournalText className={cx('icon')} />
                Blog
            </NavLink>
        </div>
    );
}

export default Navbar;