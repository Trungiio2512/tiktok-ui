import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/asstes/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, customFallback = images.noImage, ...props }, ref) => {
    // const [fallback, setFallback] = useState(null);

    // const handleError = () => {
    //     setFallback(customFallback);
    // };

    return (
        <img
            className={classNames(styles.image, className)}
            ref={ref}
            src={src || images.noImage}
            alt={alt}
            {...props}
            // onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
