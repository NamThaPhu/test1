import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function CategoryItem({ data, ...props }) {
    const to = '/danh-muc/' + data._id

    return (
        <NavLink to={to} className={(nav) => cx('wrapper', { 'active': nav.isActive })} {...props}>
            <img className={cx("image")} src={data.image} alt={'Ảnh danh mục'} />
            <div className={cx("name")}>{data.name}</div>
        </NavLink>
    );
}

export default CategoryItem;