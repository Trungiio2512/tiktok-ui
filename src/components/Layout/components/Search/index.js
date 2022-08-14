import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
//----------------------------------------------------------------
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 800);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fecthApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fecthApi();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleSideResult = () => {
        setShowResult(false);
    };

    const handleChangeInput = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div tabIndex="-1" className={cx('search-result')} {...attrs}>
                        <PropperWrapper>
                            <span className={cx('search-title')}>Accounts</span>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PropperWrapper>
                    </div>
                )}
                onClickOutside={handleSideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        spellCheck={false}
                        placeholder="Tìm kiếm tài khoản và video"
                        onChange={handleChangeInput}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
