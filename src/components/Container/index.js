import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function Container({ className, children, title, ...props }) {

    return (
        <div className={cx('wrapper', className)} {...props}>
            {title && <div className={cx('title')}>{title}</div>}
            {children}
        </div>
    );
}

export default Container;