import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'

import Button from '../../components/Button'
import TagSalesOff from './TagSalesOff';
import styles from './index.module.scss'

const cx = classNames.bind(styles)

function ProductItem({ data, className, ...props }) {
    const to = '/san-pham/' + data._id
    data.percentSalesOff = 99
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                placement="bottom"
                offset={[0, -16]}
                interactive
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <div className={cx('action')}>
                            <Button className={cx('add-cart')} size="sm">Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                )}
            >
                <Link to={to} className={cx('wrapper', className)} {...props}>
                    <TagSalesOff data={data} />
                    <div className={cx('item-image')}>
                        <img className={cx("image")} src={data.images[0]} alt={data.name} />
                    </div>
                    <div className={cx("price")}>
                        <div className={cx('default')}>{data.price.default}₫</div>
                    </div>
                    <Tippy
                        placement="top"
                        offset={[0, 36]}
                        interactive
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <div className={cx('name')}>{data.name}</div>
                            </div >
                        )}
                    >
                        <div className={cx('name-short')}>{data.name}</div>
                    </Tippy >
                </Link>
            </Tippy>
        </div>
    );
}

export default ProductItem;