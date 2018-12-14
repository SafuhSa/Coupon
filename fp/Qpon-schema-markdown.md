***
Database Schema

***

## `users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username  `      | string    | not null, indexed, unique
`email `           | string    | not null, indexed, unique
`password_digest ` | string    | not null
`session_token `   | string    | not null, indexed, unique
--- 
- index on username, unique: true
- index on session_token, unique: true
- index on email, unique: true


## `products`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`seller_id `      | integer    | not null, indexed, unique
`product_name `   | string    | not null, indexed, unique
`price`           | integer    | not null, indexed
`description `    | string    |
`quantity `       | integer    | not null
`category `       | string    | not null, indexed
--- 
- seller_id references users
- index on seller_id, unique: true
- index on product_name, unique: true


## `Images`
column name     | data type | details
----------------|-----------|-----------------------
`id `               | integer   | not null, primary key
`main_image `       | string    | not null
`product_id`        | integer   |	not null
`image_file_name `  | string    | not null
--- 


## `Orders`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`buyer_id `        | integer    | not null, indexed, unique
`product_id `     | integer    |
`quantity `       | integer    | not null
`purchase_total ` | integer    | not null
--- 
- buyer_id references users
- index on buyer_id, unique: true