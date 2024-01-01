import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '@/components/Popper'

import MenuItem from './MenuItem.js'

const cx = classNames.bind(styles);

function Menu({children, items = [] }){

	const renderItems = () => {
		return items.map( (item, index) => (
			<MenuItem key={index} data={item}/>
		))
	}

	return (
		<Tippy 
			interactive
			// visible
			// tra trong library atomiks.github
			delay={[0, 800]}
			placement = 'bottom-end'
				render={ (attrs)=>(
					<div className={cx('menu-list')} tabIndex="-1"  {...attrs}>
						<PopperWrapper className={cx('menu-popper')}>
							{renderItems()}
						</PopperWrapper>	
					</div>			
				)}
			>

			{children}

		</Tippy>
	)
}

export default Menu;