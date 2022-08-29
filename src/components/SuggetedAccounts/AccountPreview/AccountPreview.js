import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import images from '~/asstes/images';

const cx = classNames.bind(styles);

function AccountPreview({ data: user }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={user.avatar} alt={user.nickname} />
                <Button className={cx('btn-follow')} primary small>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{user.nickname}</strong>
                    {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${user.first_name} ${user.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{user.followings_count}</strong>
                    <span className={cx('label')}>Folowing</span>
                    <strong className={cx('value')}>{user.followers_count}</strong>
                    <span className={cx('label')}>Follower</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
