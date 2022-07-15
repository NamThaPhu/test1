import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function Group({ children, className, title, classNameTitle, column, space = 64, ...props }) {

    return (
        <div className={cx('wrapper', className)} {...props}>
            {title && <div className={cx('title', classNameTitle)}>{title}</div>}
            <div className={cx('list-' + column, 'space-' + (Number(space / 4)))}>{children}</div>
        </div>
    );
}

export default Group;