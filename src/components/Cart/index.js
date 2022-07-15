import classNames from 'classnames/bind'

import ProductItem from './ProductItem'
import styles from './index.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function Cart() {
    const product1 = {
        id: 1,
        name: 'Sản phẩm 1',
        image: {
            src: 'https://tronhouse.com/assets/data/editor/source/meo-chup-anh-san-pham-quan-ao-de-kinh-doanh-online-hieu-qua/chup-anh-quan-ao-3.jpg',
            alt: 'Ảnh sản phẩm'
        },
        quantity: 12,
        price: 945000
    }
    const product2 = {
        id: 2,
        name: 'Sản phẩm 2',
        image: {
            src: 'https://tronhouse.com/assets/data/editor/source/meo-chup-anh-san-pham-quan-ao-de-kinh-doanh-online-hieu-qua/chup-anh-quan-ao-3.jpg',
            alt: 'Ảnh sản phẩm'
        },
        quantity: 12,
        price: 945000
    }
    const product3 = {
        id: 3,
        name: 'Sản phẩm 3asfdkasdfhkahdakfdhdkahfk',
        image: {
            src: 'https://tronhouse.com/assets/data/editor/source/meo-chup-anh-san-pham-quan-ao-de-kinh-doanh-online-hieu-qua/chup-anh-quan-ao-3.jpg',
            alt: 'Ảnh sản phẩm'
        },
        quantity: 12,
        price: 945000
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Giỏ hàng</div>
            <div className={cx('list')}>
                <ProductItem data={product1} />
                <ProductItem data={product2} />
                <ProductItem data={product3} />
            </div>
            <div className={cx('action')}>
                <Button to="/gio-hang">Xem giỏ hàng</Button>
            </div>
        </div>
    );
}

export default Cart;