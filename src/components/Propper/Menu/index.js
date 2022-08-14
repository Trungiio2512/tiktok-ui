import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Propper';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currrentMenu = history[history.length - 1];
    const hanldeBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderItem = () => {
        return currrentMenu.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            offset={[30, 10]}
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div tabIndex="-1" className={cx('menu-list')} {...attrs}>
                    <PropperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && <Header title={currrentMenu.title} onBack={hanldeBackMenu} />}
                        {renderItem()}
                    </PropperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
