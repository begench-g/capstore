import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {useContext} from 'react';
import './CartIcon.scss';
import {CartContext} from '../../contexts/CartContext'

const CartIcon=()=>{
	const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
	const toggleIscartOpen=()=>setIsCartOpen(!isCartOpen)
	return(
		<div className="cart-icon-container" onClick={toggleIscartOpen}>
			<ShoppingIcon className="shopping-icon"/>
			<span className="item-count">{cartCount}</span>

		</div>
		)
}
export default CartIcon