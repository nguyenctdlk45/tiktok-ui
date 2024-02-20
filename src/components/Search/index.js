import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import axios from 'axios';

import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/popper';
import { useDebounce } from '~/hooks';
import instance from '~/utils/httpRequest';
import * as searchServices from '~/components/apiServices/searchServices';
const cx = classNames.bind(styles);
function Search() {
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        // const search = async () => {

        if (!debounced) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fathapi = async () => {
            const res = await searchServices.search(debounced);
            setSearchResult(res);
            setLoading(false);
        };
        fathapi();
        // console.log(searchResult);
    }, [debounced]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div>
            <HeadlessTippy
                visible={searchResult.length > 0 && showResult}
                interactive={true}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={(e) => {
                            e.target.value = e.target.value.trimStart();
                            setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {loading && (
                        <AiOutlineLoading3Quarters className={cx('loading')} />
                    )}

                    {!loading && searchValue && (
                        <div className={cx('close-btn')} onClick={handleClear}>
                            <IoCloseCircleSharp />
                        </div>
                    )}

                    <div className={cx('search-btn')}>
                        <SearchIcon className={cx('search-icon')} />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
