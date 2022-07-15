import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    size,
    children,
    className,
    icon,
    onClick,
    disabled,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // check invalid props
    const isSize = ['md', 'lg', 'sm'].includes(size)
    const isIcon = icon ? ['t', 'r', 'b', 'l'].includes(icon.placement) && icon.element : false
    // remove event listeners when btn is disabled
    // if (disabled) {
    //     Object.keys(props).forEach((key) => {
    //         if (key.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     });
    // }

    const classes = cx('wrapper', {
        [className]: className,
        [size]: isSize,
        disabled
    });

    return (
        <Comp className={classes} {...props}>
            {isIcon && <span className={cx('icon')}>{icon.element}</span>}
            {children}
        </Comp>
    );
}

export default Button;
