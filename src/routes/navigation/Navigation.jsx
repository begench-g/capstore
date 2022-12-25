import {Outlet, Link} from 'react-router-dom';
import {Fragment,useContext} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/CartIcon'
import {UserContext} from '../../contexts/UserContext'
import {CartContext} from '../../contexts/CartContext'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import './navigation.scss'
import {signOutUser} from '../../utils/firebase'
const Navigation=()=>{
  const {currentUser,setCurrentUser}=useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  const signOutHandler=async ()=>{
    const res = await signOutUser();
    console.log(res)
    setCurrentUser(null)
  }
  return(
    <Fragment>
     
        <div className='navigation'>
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ?(
              <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
              ):(
            <Link className="nav-link" to="/auth">
                Auth
            </Link>
              )}
          <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
     
    </Fragment>
    )
}

export default Navigation;