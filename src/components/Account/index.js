import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function Account() {

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('item')} to="/nguoi-dung/tai-khoan">Tài khoản của tôi</Link>
            <Link className={cx('item')} to="/nguoi-dung/don-hang">Đơn hàng</Link>
        </div>
    );
}

export default Account;