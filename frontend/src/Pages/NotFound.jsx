import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'

const NotFound = () => {
  return (
    <>
      <section className='notFound' id='notFound'>
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>Look like you are lost</h1>
          <p>We can not seem to find the page you are looking for.</p>
          <Link to={'/'}>Home <span><HiOutlineArrowRight /></span></Link>
        </div>
      </section>
    </>
  )
}

export default NotFound