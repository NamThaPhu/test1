import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

function FormItem({ data, ...props }) {

    return (
        <div className={cx('wrapper')} {...props}>
            <label className={cx('label')}>{data.label}</label>
            <input className={cx('input')} id={data.name} name={data.name} type={data.type} placeholder={data.placeholder} value={data.value} />
        </div>
    );
}

export default FormItem;