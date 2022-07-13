import React, { useState, useEffect }  from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props?.orders?.map(el => 
      ( <Order onDelete = {props.onDelete} key={el?.id} item = {el} />))} 
        <p className='summa'>Сума: {new Intl.NumberFormat().format(summa)}$</p>
  </div>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>Корзина пуста</h2>
    </div>
  )
}

export default function Header(props) {
const [cartOpen, setCartOpen] = useState(false)

useEffect(() => {
  console.log(cartOpen, 'cartOpen');
}, [cartOpen]);

  return (
    <header>
<div>
    <span className='logo'>House Staff</span>
    <ul className='nav'>
        <li>Про нас</li>
        <li>Контакти</li>
        <li>Особистий кабінет</li>
    </ul>

<FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && ':active'}`} />

{cartOpen && (
  <div className='shop-cart'>
{props.orders.length > 0 ?
showOrders(props) : showNothing() }
  </div>
)}
</div>
<div className='presentation'></div>
    </ header>
  )
}
