import classNames from 'classnames/bind';
import config from '~/config';
import styles from './SideBar.module.scss';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggetedAccounts from '~/components/SuggetedAccounts';
import { useState, useEffect } from 'react';
import * as userSuggeted from '~/services/userService';
import Button from '~/components/Button';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function SideBar() {
    const user = useSelector((state) => state.auth.user);
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [followingList, setFollowingList] = useState(null);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userSuggeted.getSuggeted(1, 5);
            if (user) {
                const res = await userSuggeted.getListFollower(1, user?.meta.token);
                console.log(res);
            }
            setSuggestedUser(result);
        };
        fetchApi();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="For you"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            {!user && (
                <div className={cx('box-login')}>
                    <p className={cx('title-login')}>Đăng nhập để follow các tác giả, thích video và xem bình luận</p>
                    <Button outline full>
                        Đăng nhập
                    </Button>
                </div>
            )}
            <SuggetedAccounts label="Suggeted Account" data={suggestedUser} />
            {user && <SuggetedAccounts label="following Account" />}
        </aside>
    );
}

export default SideBar;
