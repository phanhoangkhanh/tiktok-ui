import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'

const cx = classNames.bind(styles)

function AccountItem(){
	return(
		<div className={cx('wrapper')}>
			<img className={cx('avata')} 
			src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e8ffc55359eeb14df7c7dfc4666c2ec7.jpeg?lk3s=a5d48078&x-expires=1703574000&x-signature=oS1531DAp6ZaFIXxDYRd6W5QucU%3D" alt="Hooaa" />

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