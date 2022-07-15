import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function ProductItem({ data }) {
    const to = '/san-pham/' + data.id
    return (
        <Link to={to} className={cx('wrapper')}>
            <img className={cx("image")} src={data.image.src} alt={data.image.alt} />
            <div className={cx("name")}>{data.name}</div>
            <div className={cx("quantity")}>&times;{data.quantity}</div>
            <div className={cx("price")}> = ₫{data.price}</div>
        </Link>
    );
}

export default ProductItem;