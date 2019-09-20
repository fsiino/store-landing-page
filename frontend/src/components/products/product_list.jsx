import React from 'react';

import { Link } from 'react-router-dom';

import '../../style/product_index.scss';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const ProductList = ({ products }) => {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   products: props.products
  //   // }
  // }

  // render() {

    const convertDate = (date) => {
      let newDate = new Date(date);
      return `${1 + newDate.getMonth()}/${newDate.getDate()}/${1900 + newDate.getYear()}`;
    };

    const convertTime = (time) => {
      let newDate = new Date(time);
      let amPm;
      let hours = newDate.getHours();
      let mins = newDate.getMinutes();
      if (hours > 12) {
        amPm = 'PM';
        hours -= 12;
      } else {
        amPm = 'AM';
      }
      mins < 10 ? mins = `0${mins}` : mins = newDate.getMinutes();
      return `${hours}:${mins} ${amPm}`;
    };


    return (
      <div className="products-container">
        {products.map((product) =>
          <div className="product-idx-tile" key={product.product_id}>

            <div className="img-tile-wrapper">
              <AwesomeSlider>
                <div data-src={product.media[0].sizes[0].url} className="product-idx-img" />
                <div data-src={product.media[0].sizes[0].url} className="product-idx-img" />
                <div data-src={product.media[0].sizes[0].url} className="product-idx-img" />

                {/* { `${product.media[1].sizes[0].url}` === undefined ? null : <div data-src={product.media[1].sizes[0].url} className="product-idx-img" /> } */}
              </AwesomeSlider>
            </div>
            <div>
              <div className="product-idx-details">
                <Link to={`/products/${product.product_id}`}>
                  <div className="product-title">{product.title}</div>
                </Link>
                <h5>Date Listed: {convertDate(product.created_at)}, at {convertTime(product.created_at)}</h5>
                <div className="product-price">${product.price}.00</div>
                <div>
                  <button className="product-idx-atc">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
// }

export default ProductList;