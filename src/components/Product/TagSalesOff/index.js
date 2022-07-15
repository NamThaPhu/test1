import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function TagSalesOff({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Sales off</div>
            <div className={cx('value')}>-{data.percentSalesOff}%</div>
        </div>
    );
}

export default TagSalesOff;