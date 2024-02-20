import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from '~/components/popper/Menu/Header';

const cx = classNames.bind(styles);
function Menu({ children, data = [] }) {
    const [history, setHistory] = useState([{ data: data }]);
    const current = history[history.length - 1];

    function renderItem() {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    item={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                        // else {
                        //     onChange(item);
                        // }
                    }}
                />
            );
        });
    }
    return (
        <Tippy
            // visible={true}
            interactive={true}
            delay={[0, 700]}
            hideOnClick={false}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, history.length - 1),
                                    );
                                }}
                            />
                        )}
                        <div className={cx('menu-wrapper')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
