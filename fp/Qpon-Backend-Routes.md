# Backend Routes
## HTML
* GET / StaticPagesController#root
## API Endpoints
## users
* GET /api/users - returns the user information of displayed chirps and for the User Search feature
* POST /api/users - sign up
## session
* POST /api/session - log in
* DELETE /api/session - log out
## products
* GET /api/products - returns relevant products (filtered by location/category)
* GET /api/products/:id - returns product
* POST /api/products - creates a product
* PATCH /api/products/:id - edit a product
* DELETE /api/products/:id - remove a product
## orders
* GET /api/users/:user_id/order - show a order
* DELETE /api/users/:user_id/order - delete a order