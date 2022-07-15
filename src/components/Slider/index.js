import Sl from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from 'classnames/bind'

import "./index.scss"
import styles from './index.module.scss'

const cx = classNames.bind(styles)

function Slider({ className, children, setting, ...props }) {

    let settings = {
        dots: false,
        arrows: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // centerMode: true,
        // centerPadding: '16px'
    }

    settings = Object.assign(settings, setting)

    return (
        <Sl className={cx('wrapper', className)} {...settings} {...props}>
            {children}
        </Sl>
    );
}

export default Slider