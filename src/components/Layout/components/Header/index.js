import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { faSearch, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/asstes/images';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const timseSearch = setTimeout(() => {
            setSearchResult([]);
        }, 0);
        return () => clearTimeout(timseSearch);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* {logo} */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* {Search} */}
                <Tippy
                    interactive
                    visible={searchResult > 0}
                    render={(attrs) => (
                        <div tabIndex="-1" className={cx('search-result')} {...attrs}>
                            <PropperWrapper>
                                <span className={cx('search-title')}>Accounts</span>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PropperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
