import React from 'react';

import { Link } from 'react-router-dom';

import '../../style/product_index.scss';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      productsPerPage: 10,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
    window.scrollTo(0,0);
  }

  render() {
  
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

  const { currentPage, productsPerPage } = this.state;

  // Pagination  
  const idxOfLastProduct = currentPage * productsPerPage;
  const idxOfFirstProduct = idxOfLastProduct - productsPerPage;
  const currentProducts = this.props.products.slice(idxOfFirstProduct, idxOfLastProduct);

  // Page Numbers
  const pageNums = [];
  for (let i = 1; i < Math.ceil(this.props.products.length / productsPerPage); i++) {
    pageNums.push(i);
  }

  const renderProducts = currentProducts.map((product, idx) => {

    const getImgs = () => {
      let imgs = [];
      for (let i = 0; i < product.media.length; i++) {
        imgs.push(<div data-src={product.media[i].sizes[0].url} className="product-idx-img" />)
      }
      return imgs;
    };

    return (
      <div className="product-idx-tile" key={product.product_id}>

        <div className="img-tile-wrapper">
          <AwesomeSlider>
            {/* <div data-src={product.media[0].sizes[0].url} className="product-idx-img" />
            <div data-src={product.media[0].sizes[0].url} className="product-idx-img" /> */}
            {getImgs()}
          </AwesomeSlider>
        </div>
        <div>
          <div className="product-idx-details">
            <Link to={`/products/${product.product_id}`}>
              <div className="product-title">{product.title}</div>
            </Link>
            <h5>Date Listed: {convertDate(product.created_at)}, at {convertTime(product.created_at)}</h5>
            <div className="product-price">{product.currency_symbol}{product.price}.00</div>
            <div>
              <button className="product-idx-atc">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const renderPageNums = pageNums.map(num => {
    return (
      <li
        key={num}
        id={num}
        onClick={this.handleClick}
      >
        {num}&nbsp;&nbsp;
      </li>
    )
  })

  return (
    <div className="products-idx-container">
      <div className="products-pg-container">
        Page:&nbsp; {renderPageNums}
      </div>
      <div className="products-container">
        {renderProducts}
      </div>
      <div className="products-pg-container">
        Page:&nbsp; {renderPageNums}
      </div>
    </div>
  )

  }
}

export default ProductList;