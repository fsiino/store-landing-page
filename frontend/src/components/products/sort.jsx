import React from 'react'

import '../../style/product_index.scss';

const SortFilter = (props) => {
  return (
    <div className="sort-filter-wrapper">
      <select defaultValue="Sort" onChange={props.handleSort}>
        <option disabled value="Sort">Sort</option>
        <option value="Name: Ascending">Name: Ascending</option>
        <option value="Name: Descending">Name: Descending</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
        <option value="Date Posted: Newest">Date Posted: Newest</option>
        <option value="Date Posted: Oldest">Date Posted: Oldest</option>
      </select>
    </div>
  )
}

export default SortFilter;
