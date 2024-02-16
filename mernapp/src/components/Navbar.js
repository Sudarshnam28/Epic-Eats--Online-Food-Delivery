import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal'
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
import './Navbar.css'
import Chat from './Chat.js';

export default function Navbar() {
 let data=useCart();

  const [cartView,setCartView]=useState(false);
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate('/login');
  }
  return (
    <div >
      <nav  id="nav" className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/"><img src="https://static.wixstatic.com/media/2c004c_227034b2e8fd486c92d2853124793ddd~mv2.png/v1/fill/w_458,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Main%20Logo%20White%20With%20Slogan.png" style={{ width: "120px", height: "80px" }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link text-white active fs-5 mt-3" to="/">Home    
                </Link>
              </li>
             {(localStorage.getItem("authToken"))?
             <li className="nav-item">
             <Link className="nav-link text-white active fs-5 mt-3" to="/myOrder">My Orders
              </Link>
               </li>
                 :""
                 }

            </ul>
            {(!localStorage.getItem("authToken"))?
            <div className='d-flex'>
              <Link className=" btn bg-white text-success mx-1" to="/login">Login</Link>
              <Link className=" btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
            </div>
            :
            <div>
            <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
            My Cart {" "}
            <Badge pill bg="danger">{data.length}</Badge>
            </div>
            {cartView? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
            <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
             Logout
            </div>
            <a className='btn bg-white text-danger mx-2' href='/Chat'>help</a>
            </div>
             }
          </div>
        </div>
      </nav>
    </div>
  )
}

