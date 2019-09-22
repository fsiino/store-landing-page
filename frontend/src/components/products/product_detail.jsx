import React from 'react';

import '../../style/product_detail.scss';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    }
  }

  componentDidMount() {
    window.scrollTo(0,0)
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

    if (!product.media) return 'loading';

    const getImgs = () => {
      let imgs = [];
      for (let i = 0; i < product.media.length; i++) {
        imgs.push(<div data-src={product.media[i].sizes[0].url} className="product-idx-img" />)
      }
      return imgs;
    };

    return (
      <>
      <div className="bg">
        <div className="product-detail-container">
          <div className="product-detail-img-wrapper">
            <AwesomeSlider>

            {getImgs()}

            </AwesomeSlider>
          </div>
          <div className="product-detail-right-wrapper">
            <div className="product-detail-title">
              {product.title}
            </div>
            
            <ul className="product-desc-wrapper">
              <li>
                <span>Sold by: </span>
                {product.seller.first_name} {product.seller.last_name}
              </li>
              <li>
                <span>Description: </span>
                {product.description}
              </li>
              <li>
                <span>Location: </span>
                {product.seller.country}
              </li>
            </ul>
            
            <div className="price-atc-wrapper">
              <div className="product-price">
                {product.currency_symbol}{product.price}.00
              </div>
              <button className="product-detail-atc">Add To Cart</button>
            </div>
          </div>
        </div>
        </div>
      </>
      
    )
  }
}

export default ProductDetail;