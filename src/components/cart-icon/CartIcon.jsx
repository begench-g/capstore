import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import './CartIcon.scss';

import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';

const CartIcon=()=>{
	const dispatch = useDispatch();
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectCartIsOpen)

	const toggleIscartOpen=()=>dispatch(setIsCartOpen(!isCartOpen))
	return(
		<div className="cart-icon-container" onClick={toggleIscartOpen}>
			<ShoppingIcon className="shopping-icon"/>
			<span className="item-count">{cartCount}</span>

		</div>
		)
}
export default CartIcon