import classNames from 'classnames/bind'

import setTitle from "../../utils/setTitle";
import styles from './index.module.scss'
import Form from '../../components/Form';
import Page from '../../components/Page';
import Container from '../../components/Container';

const cx = classNames.bind(styles)

function SignIn({ title }) {
    setTitle(title)

    const data = {
        title: 'Đăng nhập',
        list: [
            {
                label: 'Tên đăng nhập',
                type: 'text',
                name: 'user-name',
                placeholder: 'Nhập số điện thoại đăng nhập',
            },
            {
                label: 'Mật khẩu',
                type: 'password',
                name: 'password',
                placeholder: 'Nhập mật khẩu',
            },
        ],
        actions: [
            {
                to: '/trang-chu',
                size: 'md',
                children: 'Đăng nhập',
            },
        ],
    }

    return (
        <Page className={cx('wrapper')}>
            <Container className={cx('container')}>
                <Form data={data} />
            </Container>
        </Page>
    );
}

export default SignIn;