import React from 'react';
import { Link } from 'react-router-dom';

import './product_index.scss';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import SortFilter from './sort';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      sort: ''
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    console.log('it works');
    this.setState({ sort: e.target.value });
  }

  // cleanData(data) {
  //   const cleanedData = data.body.items.map((product) => {
  //     if (product.)
  //   })
  // }
  
  componentDidMount() {
    this.props.fetchProducts(() => (this.setState({
      products: this.props.products,
    })));
  }

  render() {

    // const intToFloat = (num, decPlaces) => { return num.toFixed(decPlaces); };

    const sortedProducts = this.state.products.sort((a,b) => {
      if (this.state.sort === 'Date Posted: Newest') {
        return parseInt(b.created_at.substring(0, 4)) - parseInt(a.created_at.substring(0, 4))
      } else if (this.state.sort === 'Date Posted: Newest') {
        return parseInt(a.created_at.substring(0, 4)) - parseInt(b.created_at.substring(0, 4))
      }
    })

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
      mins < 10 ? mins = `0${mins}` : mins = mins;
      return `${hours}:${mins} ${amPm}`;
    };

    if (!this.props.products) return 'loading';

    return (
      <>
        <div>
        <SortFilter handleSort={this.handleSort}/>
        </div>

        <div className="products-container"> 
          {this.props.products.map((product) => 
            <div className="product-idx-tile" key={product.product_id}>
              
              <div className="img-tile-wrapper">
                <AwesomeSlider>
                  <div data-src={product.media[0].sizes[0].url} className="product-idx-img"/>
                  <div data-src={product.media[0].sizes[0].url} className="product-idx-img"/>
                  <div data-src={product.media[0].sizes[0].url} className="product-idx-img"/>

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
      </>
    )
  }
}

export default Products;