import React from 'react'

import './style.css';

export default props => {
  return (
    <div>
      <div className='phantom' />
      <div className='style'>
        <ul className="icons">
          <li><a href="https://www.facebook.com/XebiaGlobal/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="https://twitter.com/Xebia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="https://in.linkedin.com/company/xebia"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/xebianl/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

