# labtemplate

# Setup

## Tools

* [Nodejs LTS ](https://nodejs.org/en/)
* [git](https://git-scm.com/downloads)
* [SourceTree](https://www.sourcetreeapp.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [postgres](https://www.postgresql.org/) or download [docker for windows](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows), and start a postgres container and setup the devdb

```sh
docker run --name postgresdb -p 32768:5432 -d postgres
docker exec -it postgresdb psql --username postgres -c \ "CREATE DATABASE devdb OWNER postgres;"
docker exec -it postgresdb psql --username postgres -c \ "GRANT ALL PRIVILEGES ON DATABASE devdb TO postgres;"
```

### After install we need some npm utils so open the cli and type the following
```sh
npm install -g @angular/cli
npm install -g nodemon
npm install -g sequelize-cli
```

## Books
* Pro git
* Pro Angular, 2nd Edition
* Express.js Deep API Reference
* Express.js Guide
* Pro Express.js
* more on [allitebooks](http://www.allitebooks.com/)

## List of tech stack

* [Angular ](https://angular.io/)
* [angular-cli](https://github.com/angular/angular-cli)
* [Express js](https://expressjs.com/)
* [squel](https://hiddentao.com/squel/)
* [Sequelize](http://docs.sequelizejs.com/)
* Ui components: 
    * [primeng](https://www.primefaces.org/primeng/#/)
    * [bootstrap](https://getbootstrap.com/)
    * [ng-bootstrap](https://ng-bootstrap.github.io/#/home)
    * [ng2-semantic-ui](https://edcarroll.github.io/ng2-semantic-ui/#/getting-started)
* [dbdesigner](https://dbdesigner.net/)
* [Postman](https://www.getpostman.com/)

## TO DO

* Baza de date :
	- users
	- produse
	- facturi
	- comenzi