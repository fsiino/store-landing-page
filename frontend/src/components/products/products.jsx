import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    }
  }
  

  componentDidMount() {
    this.props.fetchProducts(() => (this.setState({
      products: this.props.products,
    })));
    // this.props.fetchProducts();
  }

  render() {

    if (!this.props.products) return 'loading';

    // debugger
    return (
      <div> 
        This will be all the products
        {this.props.products.map(product => 
          <div>
            {product.title}
          </div>
        )}
      </div>
    )
  }
}

export default Products;