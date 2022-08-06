import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/asstes/images';
import { faSearch, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* {logo} */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* {Search} */}
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm tài khoản và video" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
