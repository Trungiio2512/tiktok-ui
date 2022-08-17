import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggetedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggetedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See All</p>
        </div>
    );
}

SuggetedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggetedAccounts;
