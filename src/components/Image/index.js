import { forwardRef } from 'react';

function Image({ src, alt, ...props }, ref) {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={src} alt={alt} ref={ref} {...props} />
    );
}

export default forwardRef(Image);
