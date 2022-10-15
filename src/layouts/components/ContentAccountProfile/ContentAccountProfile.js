import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ContentAccountProfile.module.scss';
import { useState } from 'react';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ContentAccountProfile() {
    const [isLoading, setLoading] = useState(false);
    const params = useParams();

    return isLoading ? (
        <div>loading</div>
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('user-header')}>
                <div className={cx('user-info')}>
                    <span>
                        {' '}
                        <Image />
                    </span>
                    <div></div>
                </div>
                <div className={cx('user-count_info')}></div>
            </div>
            <div className={cx('user-body')}></div>
        </div>
    );
}

export default ContentAccountProfile;
