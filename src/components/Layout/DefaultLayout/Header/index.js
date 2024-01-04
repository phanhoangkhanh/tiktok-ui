import styles  from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import Tippy from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import {useState} from 'react'

import {faCircleXmark, faSpinner, faMagnifyingGlass, 
	faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import images from '@/assets/images'
import {Wrapper as PopperWrapper} from '@/components/Popper'
import AccountItem from '@/components/AccountItem'
import Menu from '@/components/Popper/Menu'
import Button from '@/components/Button'


const cx = classNames.bind(styles);
// console.log(images)

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English',
		children: {
			title: 'Language',
			data:[
				{
					type: 'language',
					code: 'en',
					title: 'English'
				},
				{
					code: 'vi',
					title: 'VietNam >>',
					children: {
						title: 'Tiếng Việt',
						data:[
							{
								type: 'language',
								code: 'en',
								title: 'Tiếng Tày'
							},
							{
								type: 'language',
								code: 'vi',
								title: 'Tiếng Hmong',
								
							}
						]
					}
				},
				{
					code: 'esp',
					title: 'Espanish'
				}
			]
		}
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback & Help',
		to: 'feedback'
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard shortcuts'
	},

]

function Header(){

	const [searchResult, setSearchResult ] = useState(['ka']);

	const handleMenuChange = (q) =>{
		console.log(q);
	}

	return (

	<header className={cx('wrapper')}>
		<div className={cx('inner')}>
			<div className={cx('logo')}>
				<img src={images.logo} alt="TikTok" />
			</div>

			<Tippy 
				interactive
				visible={searchResult.length > 0}
					render={ (attrs)=>(
						<div className={cx('search-result')} tabIndex="-1"  {...attrs}>
						<PopperWrapper>
							<h4 className={cx('search-title')}>Accounts</h4>
							<AccountItem />
							<AccountItem />
							<AccountItem />
						</PopperWrapper>	
						</div>			
					)}
			>

			<div className={cx('search')}>
				<input placeholder="Tìm kiếm videos" spellCheck={false} />
				<button className={cx('clear')}>
					<FontAwesomeIcon icon={faCircleXmark} />
				</button>
				<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

				
				<button className={cx('search-btn')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>

			</Tippy>

			<div className={cx('actions')}>
				<Button text>Upload</Button>
				<Button primary >Log in</Button>
				{/*<Button  className={cx('custom-login')}>CSS Rg</Button>*/}
				<Menu items={MENU_ITEMS} onChange={handleMenuChange}>
					<button className={cx('more-btn')}>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</button>
				</Menu>
				
			</div>
		</div>


	</header>
	
	)
	
}

export default Header
