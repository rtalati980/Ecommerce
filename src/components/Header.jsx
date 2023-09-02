import React from 'react'
import { AiOutlineSearch ,AiOutlineHeart} from 'react-icons/ai'
import {BsTelephone ,BsCart} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'
import {Link} from 'react-router-dom'



 

const Header=()=> {
  return <>
    <header className='header-top-strip p-1 shadow-sm'>
     <div className='container-xxl'>
        <div className='row align-items-center'>
            <div className="col-6">
                <p>The Trading Outfit at chepest price</p>
            </div>
            <div className='col-6 d-flex justify-content-between'>
            <div> <a href="ph:1234567890"> reach us +1234567890 </a>
            </div>
        <div>
       <Link> <BsTelephone className='fs-3 mx-4'/></Link>
       <Link><CiMail className='fs-3 mx-4'/></Link>
        </div>
        </div>
        </div>
     </div>
    </header>
    <header className='header-upper '>
         <div className="container-xxl">
            <div className="row">
                <div className="col-4 d-flex align-item-center mt-3">
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon1"/>
                <span class="input-group-text" id="basic-addon2"><AiOutlineSearch/></span>
                </div>
                </div>
                <div className="nav-link col-5 d-flex align-content-center justify-content-between m-auto ">
                    <Link to={"/"} >Home</Link>
                    <Link to={"/about"} >About</Link>
                    <Link to={"/contact"} >Contact</Link>
                </div>
                <div className="col-2 d-flex align-item-center justify-content-between m-auto "> 
                 <Link to={"wishlist"}  className='d-flex'><AiOutlineHeart className='fs-3 mr-2' /> <p>WishList</p></Link>
                 <Link  to={"/cart"} className='d-flex' ><BsCart className='fs-3 mr-2' /> <p>Cart</p></Link>
                </div>
            </div>
         </div>
    </header>
  
  </>
}
export default Header