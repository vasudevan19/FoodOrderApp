import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import './FoodOrder.css'

function Navigation({cartItem}) {
  const navigate = useNavigate()

  const goToCart = () => {
      navigate ("/foodcart");
  }
  return (
    <Navbar expand="lg" className='nav-bgcolor'>
      <Container className='navbar' onClick={goToCart}>
        <Navbar.Brand href="/#home" className='brand'>PizzaHut</Navbar.Brand>
        <div className='carticon' ><FaShoppingCart /> <span>{cartItem.length}</span></div>
      </Container>
    </Navbar>
  );
}

export default Navigation

