## Top Level State Shape
```js
{
  entities: {
    users: {
      3: {
        id: 3,
        username: 'Andy',
        email: 'Andy@email.com',
        password_digest: '1232mds45',
        session_token: '009923hmd'
        }
    },

    products: {
      1: {
        id: 1,
        product_name: "hp 15' laptop N500",
        seller_id: 3,
        price: 800,
        description: 'This stylish laptop offers reliable performance and long-lasting battery life so you can easily surf, stream, and stay in touch with what matters most.',
        quantity: 12,
        category: 'Electronics',
      },
      2: {
        id: 2,
        product_name: "Capurro's",
        seller_id: 3,
        price: 59,
        description: "Crab Dinner at Capurro's",
        quantity: 20,
        category: 'Restaurants'
      }
    },

    Images: {
      1: {
        id: 1,
        main_image: 'imageRst4',
        product_id: 2
      }
    }, 

    Orders: {
      1: {
        id: 1,
        buyer_id: 3,
        quantity: 2,
        purchase_total: 2,
        product_id: [2, 5] 
        //??  how can I have muliple products with diffrent quatity for each product

      }
    }
  }
}

```