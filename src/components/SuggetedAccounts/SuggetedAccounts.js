import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggetedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggetedAccounts({ label, data = [] }) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-btn')}>See All</p>
        </div>
    );
}

SuggetedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggetedAccounts;
