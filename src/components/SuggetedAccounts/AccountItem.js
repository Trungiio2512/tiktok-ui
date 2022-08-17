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

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountPreview />
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
                    <img className={cx('avatar')} src={images.noImage} alt="noimgae" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenthihoa</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Pham Thi Hoa</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
