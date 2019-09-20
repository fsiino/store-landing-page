import React from 'react';

import '../../style/product_detail.scss';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    }
  }

  componentWillMount() {
    this.props.fetchProduct(this.props.match.params.product_id, () => {
      this.setState({
        product: this.props.product
      })
    })
  }

  render() {
    return (
      <>
        <h1>Testing the detail page</h1>
        The product is {this.state.product.title}
      </>
      
    )
  }
}

export default ProductDetail;