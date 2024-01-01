import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'

const cx = classNames.bind(styles)

function AccountItem(){
	return(
		<div className={cx('wrapper')}>
			<img className={cx('avata')} 
			src="https://chupanhthe.vn/img/Tiem-chup-anh-the-lam-ho-chieu-lay-ngay-tphcm-14.jpg" alt="Hooaa" />

			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>Nguyen Van A</span>
					<FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
				</h4>
				<span className={cx('username')}>Nguyen van A</span>
			</div>

		</div>
	)
}

export default AccountItem;