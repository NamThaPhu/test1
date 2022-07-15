import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'

import Account from '../../../components/Account'
import Cart from '../../../components/Cart';
import { Basket } from '../../../components/Icons';
import styles from './index.module.scss'

const cx = classNames.bind(styles)

function ActionBar() {
    const isSignin = false
    return (
        <div className={cx("wrapper")}>
            {
                (isSignin && (
                    <Tippy
                        placement='bottom-start'
                        interactive
                        offset={[0, -4]}
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <Account />
                            </div>
                        )}
                    >
                        <Link className={cx('account', 'sign-in')} to='/nguoi-dung'>
                            <img className={cx('image')} src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg" alt="Ảnh" />
                            <div className={cx('left')}>
                                <div className={cx('name')}>Thái Phương Nam</div>
                                <div className={cx('nickname')}>@namthaphu1071</div>
                            </div>
                        </Link>
                    </Tippy>
                )) || (
                    <div className={cx('account')}>
                        <Link className={cx('action')} to="/dang-nhap">Đăng nhập</Link>
                        <Link className={cx('action')} to="/dang-ky">Đăng ký</Link>
                    </div>
                )
            }

            <Tippy
                placement='bottom'
                interactive
                offset={[0, -4]}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <Cart />
                    </div>
                )}
            >
                <Link to="/gio-hang" className={cx('cart')}>
                    <Basket height="1.5rem" width="1.5rem" className={cx('icon')} />
                    <span>Giỏ hàng</span>
                    <div className={cx('quantity')}>+44</div>
                </Link>
            </Tippy>
        </div >
    );
}

export default ActionBar;