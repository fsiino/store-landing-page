import React from 'react';

import '../../style/product_detail.scss';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    }
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id, () => {
      this.setState({
        product: this.props.product
      })})
  }

  render() {

    let productId = this.props.match.params.id;
    let products = this.props.products || [];
    let product = products.find(p => {
      return p.product_id  === productId 
    }) || {};


    return (
      <>
        <h1>Testing the detail page</h1>
        The product is {product.title}
      </>
      
    )
  }
}

export default ProductDetail;