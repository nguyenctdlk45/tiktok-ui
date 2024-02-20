import styles from './Image.module.scss';
import classNames from 'classnames';
import images from '~/assets/images';
import { useState, forwardRef } from 'react';
function Image({ className, src, alt, elseImage = images.noAvartar, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(elseImage);
    };
    return <img className={classNames(styles.wrapper, className)} alt={alt} src={fallback || src} ref={ref} {...props} onError={handleError} />;
}

export default forwardRef(Image);
