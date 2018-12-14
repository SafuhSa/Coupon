# Frontend Routes
components are 
* Root
  * App
     * NavBar
     * ProductsIndexContainer
     * ProductShowContainer
     * CartshowContainer
     * createUserContainer.
     * listNewProductContainer
     * root

The following routes, defined in App, will render components between NavBar and Footer
* /
  * Splash
* /login
  * SessionForm
* /signup
  * SessionForm
* /products
  * productsIndex
    * productIndexItem  
* /users/:userId
  * ProfileComponent
     * order(cart)   
* /products/new
  * listNewProductForm
* /products/:productId
  * ProductShow

// need some help here with routes!!