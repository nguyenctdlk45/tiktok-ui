import Styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

const cx = classNames.bind(Styles);
function MenuItem({ item, onClick }) {
    // console.log(item);
    const classes = ['menu-item', { separate: item.separate }];
    return (
        <Button className={cx(classes)} leftIcon={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    );
}

export default MenuItem;
