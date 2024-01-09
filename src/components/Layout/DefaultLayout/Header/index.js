import styles  from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import 'tippy.js/dist/tippy.css'; // optional
import {useState} from 'react'

import {faCircleXmark, faSpinner, faMagnifyingGlass, 
	faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard,
	faCloudUpload, faMessage, faUser, faCoins ,faGear,
	faSignOut} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import images from '@/assets/images'
import {Wrapper as PopperWrapper} from '@/components/Popper'
import AccountItem from '@/components/AccountItem'
import Menu from '@/components/Popper/Menu'
import Button from '@/components/Button'


const cx = classNames.bind(styles);
// console.log(images)

const currentUser = true;
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

] ;



function Header(){

	const userMenu = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			title: 'view Profile',
			to: '/@Hoa'
		},
		{
			icon: <FontAwesomeIcon icon={faCoins} />,
			title: 'Get Coins',
			to: '/coin'
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			title: 'Setting',
			to: '/setting'
		},
		...MENU_ITEMS,
		{
			icon: <FontAwesomeIcon icon={faSignOut} />,
			title: 'Log Out',
			to: '/logout',
			seperate: true
		},
	];

	const [searchResult, setSearchResult ] = useState(['k']);

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
			{
				currentUser 
			? 
			(
				<>
					<Tippy delay={[0, 200]} content="Upload Video">
						<button className={cx('action-btn')}>
							<FontAwesomeIcon icon={faCloudUpload} />
						</button>
					</Tippy>
					<button className={cx('action-btn')}>
						<FontAwesomeIcon icon={faMessage} />
					</button>
				</>
			) 
			: 
			(
				<>
					<Button text>Upload</Button>
					<Button primary >Log in</Button>
					{/*<Button  className={cx('custom-login')}>CSS Rg</Button>*/}
					
				</>
			)
			}

			<Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
				{ currentUser ? (
					<img 
					src="https://tiemanhsky.com/wp-content/uploads/2020/03/61103071_2361422507447925_6222318223514140672_n_1.jpg"
					className={cx('user-avatar')} alt="nguyen van a" />
				) : (
					<button className={cx('more-btn')}>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</button>
				)}
				
			</Menu>


			</div>
		</div>
	</header>
	
	)
	
}

export default Header
