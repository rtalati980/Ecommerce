import React from 'react'
import {MdOutlineDiscount  ,MdOutlineSavings} from 'react-icons/md'
import {GrDeliver} from 'react-icons/gr'
import {BiLock} from 'react-icons/bi'

function Features() {
  return (
    <div className='row'>
        <div className='d-flex justify-content-center gap-4 mt-2 md-2'>
        <span ><MdOutlineDiscount size="80px" /></span>
        <GrDeliver size="80px"/>
        <MdOutlineSavings size="80px"/>
        <BiLock size='80px'/>
        </div></div>
  )
}

export default Features