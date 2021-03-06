Description: Publish a sample Store Landing Page with basic product tiles
(ex. https://store.hp.com/app/slp/weekly-deals/top-deals)
- Open book
- No time limit (recommend 4 to 8 hours)
- Feel free to use any styling library for basic styling
 Build the app with listing products using the test-data.json. You don’t have to use the whole
entire file, you can short the number of products to 40-50.
 On the first visit, the user should see the login form, where he can type his name and submit this
form (no validation needed).
 After submitting the login form, user&#39;s name should appear on the navbar with something like
&quot;Welcome, %userName%&quot; and take the user to the main page.

 The main listing page should display all the products with their image, name, price and the time
they were created at.
 Clicking on a single product should send the user to that products’ detail page, where user can
see the detailed information about this product.(for ex. seller, created_at, categories,
product_id etc).
 The user should be able to go back to the main page from the product-detail one.
Key points:
- Use React and Redux to build this app.
- Use a database(MongoDB is preferred) to store user&#39;s information in it. The App should have a
functionality to show all users that were previously logged in.
- Create a feature that will allow to sort the products on the main page based on their price, time
created, and name.
- Prevent unlogged users from going to the main page(or product-details page).
- Host it on any platform you want(ex. AWS, Heroku etc.)
Bonus points:
- Use SSR
- Build some unit tests for this App(ex. using jest, mocha etc.)
- Implement pagination for the main page, so it will show 20-25 products per page.
Once you are done, send us a demo link, and a link to the source code.