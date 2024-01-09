import {useState} from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import Header from './Header.js'

import MenuItem from './MenuItem.js'

const cx = classNames.bind(styles);

//neu lỡ ko co truyen fn onChange từ lop cha vào thì mac dinh là fn empty
const defaultFn = () => {}

function Menu({children, items = [], onChange = defaultFn }){

	const [history, setHistory] = useState([{ data: items}]);
	 
	const current = history[history.length - 1];
	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children;

			return <MenuItem key={index} data={item}  
						onClick={()=>{
							if(isParent){
								setHistory((prev)=>[...prev, item.children])

							}else{
								onChange(item)
							}
						}}
					/>
		});
	};
	// logic là history ban đầu lengh= 1obj là data . và show history[0]
	// Sau đó, sethistory thêm 1 obj là item.childer. len = 2 và show history[1]
	// onBack chính là cắt bỏ đối tượng cuối trong mảng và trả về len= 1.
	return (
		<Tippy 
			interactive
			// visible
			// tra trong library atomiks.github
			delay={[0, 800]}
			offset={[12,8]}
			placement = 'bottom-end'
				render={ (attrs)=>(
					<div className={cx('menu-list')} tabIndex="-1"  {...attrs}>
						<PopperWrapper className={cx('menu-popper')}>

							{history.length>1 && <Header title="Language" 
								onBack={()=>{
									//xóa phần tử cuối-lấy cái kế cuối (children)
									setHistory((prev)=>prev.slice(0, prev.length - 1));
								}}
							/>}
							{renderItems()}
						</PopperWrapper>	
					</div>			
				)}
				// khi ẩn thi kich fn trả về phần tử 0
				onHide={()=>setHistory(prev => prev.slice(0,1))}
			>

			{children}

		</Tippy>
	)
}

export default Menu;