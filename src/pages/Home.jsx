import React from 'react'
import { Link } from 'react-router-dom'
import Features from '../components/Features'

const Home =() => {
  return <>

  <section className='banner'>
    <div className="container-xxl">
      <div className="row">
        <div className='banner-details p-5 d-flex flex-column align-item-center justify-content-center'>
          <span className='shadow-lg p-3 text-white'>Offer</span>
          <h1>Super Discount</h1>
          <h2>On All Product</h2>
          <Link className='button-link mb-3'>Shop now</Link>
        </div>
      </div>
    </div>
  </section>
  <div>
 <Features/>
  </div>
  </>
}

export default Home