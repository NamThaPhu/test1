import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function Page({ className, children, ...props }) {

    return (
        <div className={cx('wrapper', { [className]: className })} {...props}>
            {children}
        </div >
    );
}

export default Page;