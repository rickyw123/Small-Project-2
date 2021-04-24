import React, {useState} from 'react';
import '../style/storepage.css';
import {Link} from 'react-router-dom';
import {HiShoppingCart} from 'react-icons/hi';
import {addItemToCart} from '../actions/cartActions';
import {useDispatch} from 'react-redux';
import productdata from '../Data/product.json'


const Test = ({match}) => {
  const [sizeActive, setSizeActive] = useState(false);
  const [choosenSize, setChoosenSize] = useState('Small');
  const image = ['img.jpeg', 'search.png'];
  const [currentImage, setCurrentImage] = useState(0);
  const dispatch = useDispatch()
  const datadariproduct = productdata.find(productdata => productdata.id === match.params.id)
  // const datadariproduct untuk ambil data sesuai id yang dipilih
  //usestate -> hook buat bikin variabel
  // const [variabelSaya, setVariabelSaya] = useState()
  // let a = 1; a = 2
  // variabelSaya -> nama; setVariabelSaya('test')

  const handleChangeSize = size => {
    setChoosenSize(size);
    setSizeActive(false);
  }

  const handleChangeImage = type => {
    if (type === 'left') {
      if (currentImage === 0) {
        setCurrentImage(image.length-1);
      } else {
        const newImg = currentImage - 1;
        setCurrentImage(newImg);
      }
    } else {
      if (currentImage === image.length - 1) {
        setCurrentImage(0);
      } else {
        const newImg = currentImage + 1;
        setCurrentImage(newImg);
      }
    }
  }

  const addtocart = (size, id) => {
    dispatch (addItemToCart(id, size)) 
  }  

  return (
    <div className='test-container'>
      <div className="shopping-cart">
        <Link to='/cart'>
          <HiShoppingCart />
        </Link>
      </div>
      {/* 'asd' + image + 'asd */}
      {/* `string ${image} yugu` -> backtick (literal string) */}
      {/* image[0] */}
      <main>
        <div className="left-content">
          <img src={process.env.PUBLIC_URL + `/img/${image[currentImage]}`} alt="Product"/>
          <button onClick={() => handleChangeImage('left')}>&lt;</button>
          <button onClick={() => handleChangeImage('right')}>&gt;</button>
        </div>
        <div className="right-content">
          <h2>Color</h2>
          <h2 className='item-type'>Item Type / Name</h2>
          <h3 className="price">$19.99</h3>
          <h3 className="beforePrice">$30.99</h3>
          <p className="short-desc">{datadariproduct.name}</p>
          <p className="long-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor magnam voluptates voluptatum autem molestias blanditiis inventore dolorum impedit non iste minus quidem, qui facere! Consequuntur quos sequi sit quas!
          </p>
          <div className="size-selector">
            <p className="size">Size</p>
            <h2 className="choosed-size" onClick={() => setSizeActive(!sizeActive)}>{choosenSize}</h2>
            <div className={`size-list ${sizeActive && 'active'}`}>
              <button onClick={() => handleChangeSize('Small')}>Small</button>
              <button onClick={() => handleChangeSize('Medium')}>Medium</button>
              <button onClick={() => handleChangeSize('Large')}>Large</button>
            </div>
          </div>
          <button onClick={() => addtocart(choosenSize, datadariproduct.id) }>Add To Cart</button>

        </div>
      </main>
    </div>
  )
}

export default Test;