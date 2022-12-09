import { BsCartPlus } from 'react-icons/bs';
import styles from './Cart.module.css'

const Cart = () => {

  return (
    
   <div className={`flex justify-between items-center gap-1 cart_Unique ${styles?.cart_Unique}`}>
    <span>05</span>
    <span><BsCartPlus/></span>
   </div>
  )
}

export default Cart