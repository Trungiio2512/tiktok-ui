import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(
    {
        to,
        href,
        leftIcon,
        rightIcon,
        primary = false,
        small = false,
        medium = false,
        outline = false,
        large = false,
        text = false,
        disabled = false,
        rounded = false,
        className,
        onClick,
        children,
        ...passProps
    },
    ref,
) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // remove event when btn disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        small,
        medium,
        outline,
        large,
        text,
        rounded,
        disabled,
    });

    return (
        <Comp className={classes} {...props} ref={ref}>
            {leftIcon && (
                <span style={{ marginRight: 12 }} className={cx('icon')}>
                    {leftIcon}
                </span>
            )}
            <span className={cx('title')}>{children}</span>
            {rightIcon && (
                <span style={{ marginLeft: 12 }} className={cx('icon')}>
                    {rightIcon}
                </span>
            )}
        </Comp>
    );
}

export default forwardRef(Button);
