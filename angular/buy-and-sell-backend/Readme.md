# Commands used 

1) Added to script to start nodemon:
`npx nodemon --exec npx babel-node src/server.js`  or 
`npm run dev`

2) Install MySQL from 
https://dev.mysql.com/downloads/mysql/

3) Install MySQL Workbench
https://dev.mysql.com/downloads/workbench/

4) Create Listings Database (see screenshots below)

5) Insert data into Listings Table (see screenshot below)
![Image]()

6) Install npm mysql from backend folder
    `npm i mysql`
7) Creating a new server in MySql (create Users - see screenshot for creating `hapi-server`)
    - add the user
    - add user previleges
8) Use postman to verify if `getListing` and `getAllListings` retrives data (see screenshot)
![Image]()
9) Add `addViewToListing` and `getUserListings` endpoints (see postman screenshots)
10) Create listings by the user 
    install `npm i uuid`