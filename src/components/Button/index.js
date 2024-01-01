import classNames from "classnames/bind";
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({to, href, primary, 
	outline=false, text =false,
	rounded=false,
	small=false, large=false, disabled =false,
	children, className, leftIcon, rightIcon,
	onClick, ...passProps}){

	let Comp = "button"

	// button cơ bản nhất có OBJ có thuoc tính onClick + các thứ linh tinh pass vào
	const props = {
		onClick,
		...passProps
	}

	// mếu có thêm các biến khác turyen vào thì thêm thuộc tính vào props và spread vào DOM
	if(to){
		//biến Button thành link và kèm thuoc tính 'to= link...' truyền vào thẻ Link 
		props.to = to
		Comp = Link
	}else if(href){
		props.href = href
		Comp = 'a'
	}

	//nếu có thêm prop thuoc tính gì thì thêm thuoc tính vào classes- CHỨ KO PHÀI TRUYỀN VÔ PROPS
	const classes = cx('wrapper', 
		{
			// obj className trueyn giá trị vô để ăn css vói header.module.scss ở lớp cha
			[className]:className,
			primary,
			outline,
			small,
			large,
			text,
			disabled,
			rounded
		})

	//nếu có trang thái disabled thì ta hủy props onClick - QUAN TRỌNG
	if(disabled){
		delete props.onClick 
	}

	return (
		<Comp className={classes} {...props}>
			{leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
			<span className={cx('title')}>{children}</span>
			{rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
		</Comp>
	);
}

export default Button;