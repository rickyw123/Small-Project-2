import React from 'react';
import '../style/allproduct.css'
import {Link} from 'react-router-dom'
import productData from './../Data/product.json';

const allproduct = () => {
    return (
        <>
        <div>
	        <div className="nav">
		        <div className="ricky">
                    <p>Ricky's Shop</p>
                </div>
		        <div className="rickyend"> 
			        <div className="search">
                        <form>
                            <input type="text" placeholder="PRODUCT" />
                            <button>
                                <img src={process.env.PUBLIC_URL + 'img/search.png'} width="20"/>
                            </button>
                        </form>
                    </div>
			        <div className="shopping-cart">
                        <Link to='/cart'>
			                <img src={process.env.PUBLIC_URL + 'img/shopping-cart.png'} alt="Cart" width="30" />
		        </Link>
                    </div>
                </div>
            </div>


            <div className="features">
                <div className="fea1"><a href="">FEATURED</a></div>
                
                <a href="">CATEGORY 1</a>
                <a href="">CATEGORY 2</a>
                <a href="">CATEGORY 3</a>
                <a href="">CATEGORY 4</a>
                <a href="">CATEGORY 5</a>
            </div>

        </div>

        <div className="filter">
            <div className="filterr"><a href="">ALL</a>
                <a href="">FILTER 1</a>
                <a href="">FILTER 2</a>
                <a href="">FILTER 3</a>
                <a href="">FILTER 4</a>
                <a href="">FILTER 5</a>
            </div>
	    </div> 
        <div className="pindahtengah">
        {
            productData.map(data =>(
        <Link to={`/product/${data.id}`} className="rectangle">
            {/* ${ } -> untuk umentmuaknggil variabel dalam literal string */}
                    <div>
                        <div className="category2">
                            <div className="untukp">
                                <p><b>{data.name}</b></p>
                            </div>
                            <div className="untukpp"><p>CATEGORY</p></div>
                        </div>
                    </div>
                </Link>
            ))
        }
        </div>
    </>
    
    )
}

export default allproduct;
