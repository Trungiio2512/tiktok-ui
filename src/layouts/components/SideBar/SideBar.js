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
const cx = classNames.bind(styles);

function SideBar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userSuggeted.getSuggeted(1, 5);
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
            <SuggetedAccounts label="Suggeted Account" data={suggestedUser} />
            {/* <SuggetedAccounts label="following Account" /> */}
        </aside>
    );
}

export default SideBar;
