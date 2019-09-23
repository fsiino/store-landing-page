# Store Landing Page

Live Link: <a href="http://obscure-sea-02521.herokuapp.com/#/">http://obscure-sea-02521.herokuapp.com/#/</a>

## Objective 
Publish a sample store landing page with basic product tiles. This application will be seeded with 40 product listings comprised of product details, seller information, images, and more. In addition to product listings, the app will have a functionality to show all users that were previously logged in, a back button, and a personalized welcome message when signed in. Frontend routes should be protected, requiring the user to log in to view the products.

<img src="https://github.com/fsiino/store-landing-page/blob/master/frontend/public/assets/back-button.gif?raw=true" alt="product perusing"/>

## Features
### User Authentication
Routes are defined on the backend to check for existing accounts with a given email address, compare inputted passwords with their salted and hashed version, and generate session tokens. All login and registration attempts go through validation, such as checking that no field is empty, that both the ```password``` and ```confirm password``` fields for matching values, and enforcing length minimums for ```password``` and ```handle```.

### Sort Product Tiles
Users are able to sort the product list by date posted, title, or list price. When an option in the dropdown is selected, a ```handleSort``` method gets called from the ```ProductList``` component, which listens for an ```onChange``` event in the ```SortFilter``` functional component.

<img src="https://github.com/fsiino/store-landing-page/blob/master/frontend/public/assets/sort-pages.gif?raw=true" alt="sort feature"/>

```js
// product_index.js
handleSort(e) {
  this.setState({ sort: e.target.value });
}
...
render() {
  ...
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
}
```

### Pagination
Products are broken up into pages for a more dynamic user experience and better performance. Should there be any additional products added to the database, the page feature will automatically increase and map the products accordingly, without the need for any code changes.

```js
// product_list.js
handleClick(e) {
  this.setState({
    currentPage: Number(e.target.id)
  });
  window.scrollTo(0,0);
  }
...
render() {
  
  const { currentPage, productsPerPage } = this.state;
  const idxOfLastProduct = currentPage * productsPerPage;
  const idxOfFirstProduct = idxOfLastProduct - productsPerPage;
  const currentProducts = this.props.products.slice(idxOfFirstProduct, idxOfLastProduct);

  const pageNums = [];
  for (let i = 1; i < Math.ceil(this.props.products.length / productsPerPage); i++) {
    pageNums.push(i);
  }

  ...

  const renderPageNums = pageNums.map(num => {
    return (
      <li
        key={num}
        id={num}
        onClick={this.handleClick} 
      >
        {num}&nbsp;&nbsp;
      </li>
    )
  })
```

### User Registration Log
The Users page contains an index of all registered users, along with their registration date and time.

<img src="https://github.com/fsiino/store-landing-page/blob/master/frontend/public/assets/users.png?raw=true" alt="user idx feature"/>

## Technologies/Libraries
* MongoDB
* Express
* React / Redux
* Node.js
* HTML5
* Cascading Style Sheets / SASS
* Bcrypt
* Passport.js middleware
* <a href="https://github.com/rcaferati/react-awesome-slider">React Awesome Slider</a>

