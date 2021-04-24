import React from 'react';
import {Link} from 'react-router-dom';
import '../style/mainpage.css'

const mainpage = () => {
  return (
    <div>
      <div className="kesatu">
        <div className="choose">
          <p>Choose <b>As You Want</b> Pay <b>As You Can</b></p>
        </div>
        <div className="shopp">
          <div className="untukshop">
            <div className="shop">
              <Link to='/productlist'>Shop Now</Link>
            </div>
          </div>
          <div className="concept"><p><b>New Concept</b> Of Online Shopping</p></div>
        </div>
      </div>

      <div className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
      </div>

      <div className="box11">
        <Link to="" className="box-link">
          <div className="box">
            <div className="box-content">
              <h5>GALLERY</h5>
              <h5>SUBTITLE</h5>
            </div>
          </div>
        </Link>
      </div>

      <div className="box22">
        <Link to="" className="box-linkk">
          <div className="box">
            <div className="box-contentt">
              <h5>GALLERY</h5>
              <h5>SUBTITLE</h5>
            </div>
          </div>
        </Link>
      </div>

      <div className="box33">
        <Link to="" className="box-linkkk">
          <div className="box">
            <div className="box-contenttt">
              <h5>GALLERY</h5>
              <h5>SUBTITLE</h5>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="footer">
        <img src="line.png" />
        <div className="gambarpng">
          <Link to="">
            <img src={process.env.PUBLIC_URL + '/img/Group.png'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default mainpage;