import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import images from '~/asstes/images';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={images.noImage} alt="" />
                <Button className={cx('btn-follow')} primary small>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyenthihoa</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Pham Thi Hoa</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Follower</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
