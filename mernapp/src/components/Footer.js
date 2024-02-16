import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
  return (
    <footer>
    <div className='footerContainer'>
  <div className='socialIcons'>
   <a href=''><i className='fa fa-facebook'></i></a>
   <a href=''><i className='fa fa-instagram'></i></a>
   <a href=''><i className='fa fa-twitter'></i></a>
   <a href=''><i className='fa fa-google-plus'></i></a>
   <a href=''><i className='fa fa-youtube'></i></a>
  </div>
  <div className='footerNav'>
    <ul>
      <li><a href=''>Home</a></li>
      <li><a href=''>News</a></li>
      <li><a href=''>About</a></li>
      <li><a href=''>Contact-us</a></li>
      <li><a href=''>Our Team</a></li>
    </ul>
  </div>
    </div>
    <div className='footerBottom'>
 <p>© 2023 Epic Eats, Inc </p>
  </div>
    </footer>
  )
}
