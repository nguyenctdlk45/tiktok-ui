import Styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
const cx = classNames.bind(Styles);
function AccountItem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('info')}>
                <div className={cx('name')}>{data.full_name}</div>
                <div className={cx('userName')}>{data.nickname}</div>
            </div>
        </Link>
    );
}

export default AccountItem;
