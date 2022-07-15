import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

import PageNotFound from "../pages/PageNotFound"
import Home from "../pages/Home"
import News from "../pages/News"
import Contact from "../pages/Contact"
import Blogs from "../pages/Blogs"
import Warranty from "../pages/Warranty"
import Cart from "../pages/Cart"
import Products from "../pages/Products"
import Product from "../pages/Product"

export const privateRoutes = [
    {
        path: '/tai-khoan',
        element: Product,
        title: 'Sản phẩm',
    },
    {
        path: '/gio-hang',
        element: Cart,
        title: 'Giỏ hàng của bạn',
    },
]

export const restrictedRoutes = [
    {
        path: '/dang-nhap',
        element: SignIn,
        title: 'Đăng nhập',
    },
    {
        path: '/dang-ky',
        element: SignUp,
        title: 'Đăng ký',
    }
]

export const publicRoutes = [
    {
        path: '/*',
        element: PageNotFound,
        title: 'PAGE NOT FOUND ERROR!',
    },
    {
        path: '/404',
        element: PageNotFound,
        title: 'PAGE NOT FOUND ERROR!',
    },
    {
        path: '/trang-chu',
        element: Home,
        title: 'Trang chủ',
    },
    {
        path: '/',
        element: Home,
        title: 'Trang chủ',
    },
    {
        path: '/tin-tuc-san-pham',
        element: News,
        title: 'Tin tức về sản phẩm',
    },
    {
        path: '/gioi-thieu-va-lien-he',
        element: Contact,
        title: 'Giới thiệu cửa hàng và liên hệ',
    },
    {
        path: '/chinh-sach-bao-hanh',
        element: Warranty,
        title: 'Chính sách bảo hành và đổi trả sản phẩm',
    },
    {
        path: '/nhat-ki-thuong-ngay',
        element: Blogs,
        title: 'Nhật ký thường ngày của tôi',
    },
    {
        path: '/danh-muc/:id',
        element: Products,
        title: 'Trang lọc sản phẩm theo danh mục',
    },
    {
        path: '/san-pham/:id',
        element: Product,
        title: 'Sản phẩm',
    },
]