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
  }

  render() {
    return (
      <div> 
        This will be all the products
        {Object.values(this.state.products).map(product => 
          <div>
            {product.title}
          </div>
        )}
      </div>
    )
  }
}

export default Products;