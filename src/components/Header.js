import React from 'react'
import Search from './Search'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown,Image } from 'react-bootstrap';
import { logOut } from '../action/userActions';


const Header = () => {

  const {user}=useSelector(state=>state.userState)
  const dispatch=useDispatch()
  let cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')).length:0
  const navigate = useNavigate()
  const logouthandler = ()=>{
    dispatch(logOut)
    navigate('/login')
  }
  
  return (
    <>
      <section id="header">
        <div className='d-flex'>
          <Link to="/" id="title">Shopping Website</Link>   
        </div>
        <div style={user.id?{}:{display:"none"}} className="search ">
          <Search/>
        </div>
        <div style={user.id?{}:{display:"none"}}>
          <ul id="navbar">
            <div>
              <Dropdown className=' d-inline'>
                <Dropdown.Toggle variant='default text-dark pr-5' id='dropdown-basic'>
                  <figure className='avatar avatar-nav'>
                    <Image width="50px" src={user.image}/>
                  </figure>
                  <span className={"font"} style={{color:"black"}}>{user.username}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  <Dropdown.Item onClick={logouthandler} className='text-danger'>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>           
            </div>
            <li><Link className={"font"}><i className="fa fa-shopping-cart">{cartItems}</i></Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header