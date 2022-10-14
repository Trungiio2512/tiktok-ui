import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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
import Modal from '~/components/Modal';
import Search from '../Search';
import config from '~/config';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, UploadIcon, InboxIcon } from '~/components/Icons';
import { useState } from 'react';
import LoginModal from '~/layouts/components/LoginModal';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Ngôn ngữ',
            data: [
                { code: 'vi', title: 'Tiếng việt' },
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

const LOGIN_MODAL = 'login_modal';

function Header() {
    const [modal, setModal] = useState(false);
    const user = useSelector((state) => state.auth.user?.data);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleChange = (menuItem) => {
        console.log(menuItem);
    };

    function openModal() {
        setModal(LOGIN_MODAL);
    }

    function closeModal() {
        setModal(null);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* {logo} */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* {Search} */}
                <Search />

                {/* action user  */}
                <div className={cx('actions')}>
                    {isLoggedIn ? (
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
                            <Menu items={USER_MENU} onChange={handleChange}>
                                <Image className={cx('user-avatar')} alt="Nguyen Van A" src={user.avatar} />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <div id="example-portal-btn"></div>
                            <Button medium outline>
                                Upload
                            </Button>
                            <Button medium primary onClick={openModal}>
                                Log in
                            </Button>
                            <Menu items={USER_MENU} onChange={handleChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </button>
                            </Menu>
                        </>
                    )}
                    {/* <Menu items={isLoggedIn ? USER_MENU : MENU_ITEMS} onChange={handleChange}>
                        {isLoggedIn ? (
                            <Image className={cx('user-avatar')} alt="Nguyen Van A" src={user.avatar} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menu> */}
                </div>
            </div>
            <Modal
                isOpen={!isLoggedIn && modal === LOGIN_MODAL}
                shouldCloseOverlayClick={false}
                onRequestClose={closeModal}
            >
                <LoginModal />
            </Modal>
        </header>
    );
}

export default Header;
