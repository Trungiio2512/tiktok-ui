import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ContentAccountProfile.module.scss';
import { useEffect, useState } from 'react';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { getProfileAccount } from '~/services/searchService';

const cx = classNames.bind(styles);

function ContentAccountProfile() {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const params = useParams();

    useEffect(() => {
        // setLoading(true);

        const getProfile = async () => {
            const res = await getProfileAccount(params.nickname);
            setUser(res);
            console.log(params);
            console.log(res);
        };

        getProfile();
        setLoading(false);
    }, [params]);
    console.log('render');
    return isLoading ? (
        <div>loading</div>
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('account-header')}>
                <div className={cx('account-info')}>
                    <div>
                        <Image className={cx('avatar')} src={user?.data?.avatar} />
                    </div>
                    <div className={cx('account-info__body')}>
                        <h1 className={cx('nickname')}>
                            {user?.data?.nickname}
                            {user?.data?.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                        </h1>
                        <h3 className={cx('fullname')}>{`${user?.data.first_name} ${user?.data.last_name}`}</h3>
                        <div className={cx('follow')}>
                            <div className={cx('follow-wrapper')}>
                                <Button primary full>
                                    Follow
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('account-count_info')}>
                    <div className={cx('number')}>
                        <strong>{user?.data.followings_count}</strong>
                        <span>Đang follow</span>
                    </div>
                    <div className={cx('number')}>
                        <strong>{user?.data.followers_count}</strong>
                        <span>Follower</span>
                    </div>
                    <div className={cx('number')}>
                        <strong>{user?.data.likes_count}</strong>
                        <span>Thích</span>
                    </div>
                </div>
                <div className={cx('account-bio')}>{user?.data.bio}</div>
            </div>
            <div className={cx('account-body')}></div>
        </div>
    );
}

export default ContentAccountProfile;
