import React from 'react';

import '../../style/product_index.scss'

import SortFilter from './sort';

import ProductList from './product_list';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      sort: '',
      currentPage: 1,
      productsperPage: 10
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    this.setState({ sort: e.target.value });
  }
  
  componentDidMount() {
    // debugger
    this.props.fetchProducts(() => (this.setState({
      products: this.props.products
    })));
  }

  render() {
    if (!this.state.products) return 'loading';

    const sortedProducts = this.props.products.sort((a,b) => {
      if (this.state.sort === 'Date Posted: Newest') {
        return new Date(b.created_at) - new Date(a.created_at);
      } else if (this.state.sort === 'Date Posted: Oldest') {
        return new Date(a.created_at) - new Date(b.created_at);
      } else if (this.state.sort === 'Title: Ascending') {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else return 0;
      } else if (this.state.sort === 'Title: Descending') {
        if (b.title < a.title) {
          return -1;
        } else if (b.title > a.title) {
          return 1;
        } else return 0;
      } else if (this.state.sort === 'Price: High to Low') {
        return b.price - a.price;
      } else if (this.state.sort === 'Price: Low to High') {
        return a.price - b.price;
      }
    });

    return (
      <>
        <div>
        <SortFilter handleSort={this.handleSort}/>
        </div>

        <ProductList products={sortedProducts}/>
      </>
    )
  }
}

export default ProductIndex;