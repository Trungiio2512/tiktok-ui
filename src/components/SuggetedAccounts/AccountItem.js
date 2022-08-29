import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
//----------------------------------------------------------------
import styles from './SuggetedAccounts.module.scss';
import images from '~/asstes/images';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountPreview data={data} />
                </PropperWrapper>
            </div>
        );
    };
    return (
        //Using a wrapper <div>
        // tag around the reference element solves this by creating a new parentNode context
        <div>
            <Tippy offset={[-30, 0]} delay={[800, 300]} interactive placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
