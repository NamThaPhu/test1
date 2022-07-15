import classNames from 'classnames/bind'

import Button from '../Button';
import FormItem from './FormItem';
import styles from './index.module.scss'

const cx = classNames.bind(styles)

function Form({ data }) {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{data.title}</div>
            <div className={cx('list')}>
                {
                    data.list.map((item, index) => (
                        <FormItem key={index} data={item} />
                    ))
                }
            </div>
            <div className={cx('actions')}>
                {
                    data.actions.map((action, index) => (
                        <Button className={cx('action')} key={index} to={action.to} size={action.size}>{action.children}</Button>
                    ))
                }
            </div>
        </div >
    );
}

export default Form;