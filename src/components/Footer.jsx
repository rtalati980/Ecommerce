import React from 'react'
import {AiFillTwitterCircle ,AiOutlineInstagram} from 'react-icons/ai'
import { BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer className='footer p-5'>
    <div className="container-xsl">
        <div className='row'>
            <div className='col-4 d-flex flex-column'> 
            <h3 className='mb-5'>Contact us</h3>
            <div className="footer-details">
             <p className='mb-3'><b>Address:</b>addres</ p>
             <p className='mb-3'><b>Phone:</b>+91123456789</ p>
             <p className='mb-3'><b>Follow us</b></ p>
             <div className='social-icons col-4  mb-3  d-flex justify-content-around'></div>
             <Link > < AiFillTwitterCircle  size={30}/> </Link>
             <Link> < AiOutlineInstagram  size={30}/> </Link>
             <Link> < BsFacebook  size={30}/> </Link>
            </div>
              </div>
              <div className='col-2'>
                  <h3 className='mb-5'>About</h3>
                  <div className='footer-details d-flex flex-column'>
                    <Link className='mb-3 '>About Us</Link>
                    <Link className='mb-3 '>Delivery</Link>
                    <Link className='mb-3 '>Privacy Policy</Link>
                    <Link className='mb-3 '>Tax Policy</Link>
                    <Link className='mb-3 '>Terms Policy</Link>
                  </div>
               </div>
               <div className='col-2'>
                  <h3 className='mb-5'>Account</h3>
                  <div className='footer-details d-flex flex-column'>
                    <Link className='mb-3 '>Profile</Link>
                    <Link className='mb-3 '>View Cart</Link>
                    <Link className='mb-3 '>Wishlist</Link>
                    <Link className='mb-3 '>My order</Link>
                    <Link className='mb-3 '>Help</Link>
                    <Link className='mb-3 '>Coupen</Link>
                  </div>
               </div>
        </div>
        <hr/>
        <div className='row d-flex justify-content-between'>
             <div className='col-3'>
                <p>&copy; Devloped by Ronak Talati</p>
             </div>
             <div className="col-3 d-flex justify-content-around">
              <Link>Privacy Policy</Link>
              <Link>Terms of use</Link>
              <Link>Contact Me</Link>
             </div>
        </div>


    </div>
   </footer>
  )
}

export default Footer