import classNames from 'classnames/bind'

import Container from '../../components/Container';
import Page from '../../components/Page';
import Form from "../../components/Form";
import setTitle from "../../utils/setTitle";
import styles from './index.module.scss'

const cx = classNames.bind(styles)

function SignUp({ title }) {
    setTitle(title)

    const data = {
        title: 'Đăng ký',
        list: [
            {
                label: 'Số điện thoại',
                type: 'text',
                name: 'user-name',
                placeholder: 'Nhập số điện thoại',
            },
            {
                label: 'Mật khẩu',
                type: 'password',
                name: 'password',
                placeholder: 'Nhập mật khẩu',
            },
            {
                label: 'Nhập lại mật khẩu',
                type: 'password',
                name: 'repassword',
                placeholder: 'Nhập lại mật khẩu',
            },
        ],
        actions: [
            {
                to: '/dang-nhap',
                size: 'md',
                children: 'Đăng ký',
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

export default SignUp;