# Licious.com

"Licious is India's largest D2C Unicorn ,  it's provide the fresh Meat Delivery system and user can see and buy any type of meat category it's branch all over India"

# Project Name : - Meat House
# Project Code : - astute-ice-7958
# Project Member : - 
 - Mohammad Hassim
 - Syed Anwar
 - Param Raj
 - Ajit Shelake
 
 # Backend : Tech Stack -
  - Node
  - ExpressJS
  - MongoDB
  
  ## Backend npm Package Liabrary
   - Mongoose
   - JWT
   - bcrypt
   - request-ip
 
 # Product API
 - Chicken Collection API
     - All Category API 
    - GET REQUEST : `<a>http://localhost:8080/Chicken</a>`
     - Sub Category API
       <b>Pass a Query : category_id , sort_by_price </b>
      - GET REQUEST : - `<a>http://localhost:8080/Chicken/?category_id&sort_by_price</a>`
     - Single Product API
       - Pass a Param for Single Product
     - GET REQUEST : <a>`http://localhost:8080/Chicken/:id`</a>
     
 - Mutton Collection API
     - All Category API 
    - GET REQUEST : `<a>http://localhost:8080/Mutton</a>`
     - Sub Category API
       <b>Pass a Query : category_id , sort_by_price </b>
     - GET REQUEST :  - `<a>http://localhost:8080/Mutton/?category_id&sort_by_price</a>`
     - Single Product API
       - Pass a Param for Single Product
    - GET REQUEST : `<a>http://localhost:8080/Mutton/:id</a>`
     
- Prawns Collection API
     - All Category API 
    - GET REQUEST : `<a>http://localhost:8080/Prawns</a>`
     - Sub Category API
       <b>Pass a Query : category_id , sort_by_price </b>
      - GET REQUEST : - `<a>http://localhost:8080/Prawns/?category_id&sort_by_price</a>`
     - Single Product API
       - Pass a Param for Single Product
    - GET REQUEST : `<a>http://localhost:8080/Prawns/:id</a>`
     
- Eggs Collection API
     - All Category API 
    - GET REQUEST : `<a>http://localhost:8080/Eggs</a>`
     - Sub Category API
       <b>Pass a Query : category_id , sort_by_price </b>
     - GET REQUEST :  - `<a>http://localhost:8080/Eggs/?category_id&sort_by_price</a>`
     - Single Product API
       - Pass a Param for Single Product
   - GET REQUEST :  `<a>http://localhost:8080/Eggs/:id</a>`
     
     
# User Authenticated API

 - USER SIGNUP
   - POST REQUEST :- <a> `user/signup` </a>
   `mandatory` - `email , password`
   
 - Features : -
   - `Password is encrypted`
   
- USER LOGIN 
  - POST REQUEST :- `user/login`
   `mandotory` - `email , password`
 - Features : -
   - `Token Send for Authorization`
   
- USER DETAIL UPDATE
   - PATCH REQUEST : - `user/updatedetail`
    `payload : - {email , password , name , gender , maritalStatus}`


# User-cart API   `(Relation Ship with User Collection)`

 - POST REQUEST : <b>`When User want to Add the Item in the cart`</b> 
   - Pass the ID as a Params - `/cart:id`
   - Send the `token` in headers as authorization
   - UserID already exist beacuse it was a Parent ID
    - headers : {
    `Authorization` : `Bearer <token>`
    }
    
 - GET REQUEST : <br>`All Product list data which is added by the User  "/cart"`</br>
 
 - DELETE REQUEST : <b>`When User want to Delete the Item in the cart`</b> 
  - Pass the ID as a Params - `/cart:id`
   - Send the `token` in headers as authorization
   - UserID already exist beacuse it was a Parent ID
    - headers : {
    `Authorization` : `Bearer <token>`
    }
  
 # User-Address API   `(Relation Ship with User Collection)`

 - POST REQUEST : <b>`When User want to Add the Address in our own collection`</b> 
   -  - `/address`
   - Send the `token` in headers as authorization
   - UserID already exist beacuse it was a Parent ID
    - headers : {
    `Authorization` : `Bearer <token>`
    }
    `response send` : `User own address not everyone address`
    
 



