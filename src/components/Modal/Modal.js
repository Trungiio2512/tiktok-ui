import classNames from 'classnames/bind';
import { useRef, useState, useEffect, useCallback } from 'react';

import Portal from '~/components/Portal';
import styles from './Modal.module.scss';
import { TimeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Modal({ isOpen = false, shouldCloseOverlayClick = true, children, onRequestClose = defaultFn }) {
    const [closesing, setClosing] = useState(false);
    const containerRef = useRef();

    const handleRequestClose = useCallback(() => {
        setClosing(true);
        containerRef.current.addEventListener(
            'animationend',
            () => {
                setClosing(false);
                onRequestClose();
            },
            { once: true },
        );
    }, [onRequestClose]);

    useEffect(() => {
        const handleClickOnKeyboard = (e) => {
            if (isOpen && e.code === 'Escape') {
                handleRequestClose();
            }
        };
        document.addEventListener('keydown', handleClickOnKeyboard);

        return () => {
            document.removeEventListener('keydown', handleClickOnKeyboard);
        };
    }, [isOpen, handleRequestClose]);

    if (!isOpen) return null;

    return (
        <Portal>
            <div className={cx('wrapper', { closesing })}>
                <div className={cx('overlay')} onClick={shouldCloseOverlayClick ? handleRequestClose : defaultFn} />
                <div className={cx('container')} ref={containerRef}>
                    <button onClick={handleRequestClose} className={cx('close-btn')}>
                        {<TimeIcon width={25} />}
                    </button>
                    {children}
                </div>
            </div>
        </Portal>
    );
}

export default Modal;
