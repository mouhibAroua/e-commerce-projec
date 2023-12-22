import React, { useState,useContext } from 'react';
import Rating from './Rating.jsx'; 
import '../css/ProdDetails.css';
import Product from './Product.jsx';
import Color from './Color.jsx';
import SizePicker from './Size.jsx';
import QuantitySelector from './Quantity.jsx';
import CartButton from './CartBtn.jsx';
import WishlistButton from './WishlistBtn.jsx';
import DeliveryOptions from './DeliveryOptions.jsx';
import { DataContext } from '../context.js'

function ProductDetails({user}) {
  const [hoveredImage, setHoveredImage] = useState(null);
  const { products,oneProduct,handleOneProd } = useContext(DataContext);
  const handleImageHover = (imageSrc) => {
    setHoveredImage(imageSrc);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

 console.log("usss",user);
  return (
    <div>
    <div className='alldetails'>
      <div className='image-container'>
        <img
          src={oneProduct&&oneProduct.imageUrl[0]}
          alt=''
          className='hover-image'
          onMouseOver={() => handleImageHover(oneProduct&&oneProduct.imageUrl[0])}
          onMouseLeave={handleImageLeave}
        />
        <img src='https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg' alt='' className='hover-image'
          onMouseOver={() => handleImageHover('https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg')}
          onMouseLeave={handleImageLeave}
        />
        <img src='https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg' alt='' className='hover-image'
          onMouseOver={() => handleImageHover('https://i.pinimg.com/564x/72/94/5e/72945e47255e96e0056b874a1c72796c.jpg')}
          onMouseLeave={handleImageLeave}
        />
        <img
          src='https://i.pinimg.com/736x/8b/8a/26/8b8a26cef978562faa328441b3cf5b80.jpg'
          alt=''
          className='hover-image'
          onMouseOver={() => handleImageHover('https://i.pinimg.com/736x/8b/8a/26/8b8a26cef978562faa328441b3cf5b80.jpg')}
          onMouseLeave={handleImageLeave}
        />
      </div>
      <img src={hoveredImage || oneProduct&&oneProduct.imageUrl[0]} alt='' className='display-image' />
      <div className="product-info-container">
      <div className="productname">{oneProduct&&oneProduct.productName}</div>
      <div className="productrating">
        <span className="reviews"> (150 reviews)</span>
        <span className="separator"> | </span>
        <span className="in-stock">{oneProduct&&oneProduct.available}</span>
      </div>
      <div className="productprice">{oneProduct&&oneProduct.price}DT</div>
      <div className="productdescription">{oneProduct&&oneProduct.description}</div>
      <div className="bottomborder"></div>
    </div>
    </div>
    <div className='related'>
    <div class="square"></div>
  <h2 class="jfy">Related Items</h2>
  </div>
  <div>
    <Rating/>
    <Color/>
    <SizePicker/>
    <QuantitySelector/>
    <CartButton/>
    <WishlistButton dataUser={user}/>
    <DeliveryOptions/>
    </div>
    <div className="allprod">
   {products.filter((e,i)=>e.categories[0]===oneProduct.categories[0]).map((el, i) => {
          return (
            <div className="product-container" key={i}>
              <div className="product-image" >
                <img src={el.imageUrl&&el.imageUrl[0]} alt="" onClick={()=>handleOneProd(el.id)} />
                <button className="buy-button">Buy Now</button>
              </div>
              <div className="product-details" >
                <div className="product-name">{el.productName}</div>
                <div className="product-price">{el.price}DT</div>
                
              </div>
            </div>
          );
        })}
</div>
    </div>
  );
}

export default ProductDetails;
