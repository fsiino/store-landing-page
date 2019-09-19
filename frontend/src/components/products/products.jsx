import React from 'react';

import './products.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    };
  }
  
  componentDidMount() {
    this.props.fetchProducts(() => (this.setState({
      products: this.props.products,
    })));
  }

  render() {

    if (!this.props.products) return 'loading';

    return (
      <div className="products-container"> 
        {this.props.products.map(product => 
          <div className="product-idx-tile" key={product.product_id}>
            <h3>{product.title}</h3>
              <img src={product.media[0].sizes[Array.length-1].url} className="product-idx-img"/>
          </div>
        )}
      </div>
    )
  }
}

export default Products;