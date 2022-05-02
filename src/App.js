import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer'
import { calculateTotals, getCartItems } from './redux/features/cart/cartSlice';
import Modal from './components/Modal';

const App = () => {
  const { cartItems, isLoading, error } = useSelector(state => state.cart)
  const { isOpen } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems,dispatch])

  useEffect(() => {
    dispatch(getCartItems())
  },[dispatch])

  if(isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(error) {
    return (
      <div className='loading'>
        <h1>Something went wrong</h1>
      </div>
    )
  }
  
  return (
    <>
      { isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
