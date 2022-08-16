import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import Header from './Header';
import PropTypes from 'prop-types';
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
    const renderResult = (attrs) => (
        <div tabIndex="-1" className={cx('menu-list')} {...attrs}>
            <PropperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={currrentMenu.title} onBack={hanldeBackMenu} />}
                <div className={cx('menu-body')}> {renderItem()}</div>
            </PropperWrapper>
        </div>
    );

    // reset to fisrt page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            interactive
            offset={[30, 10]}
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
