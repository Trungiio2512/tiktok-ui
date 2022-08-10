import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudUpload,
    faCog,
    faCoins,
    faEarthAsia,
    faEllipsisV,
    faKeyboard,
    faSearch,
    faSignOutAlt,
    faSpinner,
    faTimesCircle,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
//----------------------------------------------------------------
import images from '~/asstes/images';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Propper/Menu';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                { code: 'en', title: 'English' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
    },
    {
        icon: <FontAwesomeIcon icon={faCog} />,
        title: 'Cài đặt',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOutAlt} />,
        title: 'Đăng xuất',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        const timseSearch = setTimeout(() => {
            setSearchResult([]);
        }, 0);
        return () => clearTimeout(timseSearch);
    }, []);

    const handleChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* {logo} */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* {Search} */}
                <HeadlessTippy
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
                </HeadlessTippy>
                {/* action user  */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <span tabIndex="0">
                                    <Button className={cx('actions-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </Button>
                                </span>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button medium primary to="/login">
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-hai-1-600x600.jpg"
                            ></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
