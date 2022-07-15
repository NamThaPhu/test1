import classNames from 'classnames/bind';

import styles from './index.module.scss';
import setTitle from "../../utils/setTitle";
import Page from '../../components/Page'

const cx = classNames.bind(styles)

function PageNotFound({ title }) {
    setTitle(title)
    return (
        <Page className={cx('wrapper')}>404 ERROR!!!</Page>
    );
}

export default PageNotFound;