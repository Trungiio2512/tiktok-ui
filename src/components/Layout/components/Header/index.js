import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faCoins,
    faEarthAsia,
    faEllipsisV,
    faKeyboard,
    faSignOutAlt,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
//----------------------------------------------------------------
import images from '~/asstes/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Propper/Menu';
import Search from '../Search';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, UploadIcon, InboxIcon } from '~/components/Icons';

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
    const currentUser = true;

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
                <Search />

                {/* action user  */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tải video" placement="bottom">
                                <Button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </Button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                <Button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </Button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                                <Button className={cx('actions-btn')}>
                                    <InboxIcon />
                                </Button>
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
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-hai-1-600x600.jpg"
                            />
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
