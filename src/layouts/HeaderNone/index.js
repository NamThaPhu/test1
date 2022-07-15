import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function HeaderNone() {
    return (
        <div className={cx("wrapper")}>

        </div>
    );
}

export default HeaderNone;