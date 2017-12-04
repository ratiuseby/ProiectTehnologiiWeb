# Express and sequelizejs 


## run the backend
```sh
    nodemon ./bin/www
```

after you setup the connection info for the database in src/config/config.js run
```sh
sequelize db:migrate
```
this will create the tables in your database.

for generatic models 
```sh 
sequelize model:create --name todo --attributes title:string
``` 
more on the tutorial url
### Docs
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize