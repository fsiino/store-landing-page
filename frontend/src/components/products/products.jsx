import React from 'react';

import './products.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      sorted: false
    };
  }
  
  componentDidMount() {
    this.props.fetchProducts(() => (this.setState({
      products: this.props.products,
    })));
  }

  render() {

    // const intToFloat = (num, decPlaces) => { return num.toFixed(decPlaces); };

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
      <div className="products-container"> 
        {this.props.products.map(product => 
          <div className="product-idx-tile" key={product.product_id}>
            <h3>{product.title}</h3>
              <img src={product.media[0].sizes[Array.length-1].url} className="product-idx-img"/>
              <div>
                <h5>${product.price}.00</h5>
                <h5>Date Listed: {convertDate(product.created_at)}, at {convertTime(product.created_at)}</h5>
              </div>
          </div>
        )}
      </div>
    )
  }
}

export default Products;