### Run MondgoDB

`brew services start mongodb-community@4.2`

or

`mongod --config /usr/local/etc/mongod.conf --fork`


### Run app

`npm start`


### Users API

POST /api/users

GET /api/users/:userId

PUT /api/users/:userId

DELETE /api/users/:userId

GET /api/users/:userid/inventory

GET /api/users


### Items API

POST /api/items

GET /api/items/:itemId

PUT /api/items/:itemId

DELETE /api/items/:itemId

GET /api/items