import React from 'react'

import '../../style/sort.scss';

const SortFilter = (props) => {
  return (
    <div className="sort-filter-wrapper">
      <select className="sort-filter" defaultValue="Sort" onChange={props.handleSort}>
        <option disabled value="Sort">Sort</option>
        <option value="Title: Ascending">Title: Ascending</option>
        <option value="Title: Descending">Title: Descending</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
        <option value="Date Posted: Newest">Date Posted: Newest</option>
        <option value="Date Posted: Oldest">Date Posted: Oldest</option>
      </select>
    </div>
  )
}

export default SortFilter;
