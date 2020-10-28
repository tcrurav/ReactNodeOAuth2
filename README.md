# React Example using OAuth2

This project is just a project example to learn how to use OAuth2 in React (frontend) and NodeJS (backend) using Sequelize as ORM to access a MySQL database.

The code is a simplification of the bluecity project. (find it here: https://github.com/tcrurav/bluecity.git)

## Getting Started

Download links:

From Github: https://github.com/tcrurav/ReactNodeOAuth2.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/ReactNodeOAuth2.git
```

This project contains 2 different parts:
* Frontend
* Backend

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project install all dependencies.

```
cd ReactNodeOAuth2/frontend
npm install

cd ReactNodeOAuth2/backend
npm install
```

* For your frontend part, if you want to use the Google Login feature, you have to create a clientID by creating a new project on Google developers website.: https://developers.google.com/identity/sign-in/web/sign-in

In that page click on the blue button "Configure a project" to start the process of obtaining your clientID.

After clicking on the blue button you'll have to sign in Google, and then you will be able to create a new project:

![Create Project](/docs/screenshot-17-bis.png)

![Create Project](/docs/screenshot-18-bis.png)

![Create Project](/docs/screenshot-19-bis.png)

![Create Project](/docs/screenshot-20-bis.png)

In our local environment we can use the default http://localhost:3000 as the origin. For an explotation deployment you'll have to change/add your deployment URL.

![Create Project](/docs/screenshot-21-bis.png)

And finally you get your ClientID:

![Create Project](/docs/screenshot-22-bis.png)

Your Google ClientID is used in the file ReactNodeOAuth2/frontend/src/components/my-login-with-google.js and should be inserted in the file ReactNodeOAuth2/frontend/.env in the following manner: 

```
REACT_APP_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com
REACT_APP_BASEURL=http://localhost:4000
```

Take into account the second line to introduce in the file ReactNodeOAuth2/frontend/.env necessary to indicate the base URL of your API.

* For your backend part:
1. You need a ReactNodeOAuth2/backend/.env file with a key for the JWT and the data for the connection to your MySQL Server:

```
JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#

MYSQL_DATABASE=db_scooters_dev
MYSQL_USER=a_user
MYSQL_PASSWORD=a_password_for_a_user
MYSQL_ROOT_PASSWORD=a_password_for_root

DB_HOST=localhost

NODE_ENV=development
```

2. You need a mysql server working.

3. Create the mysql database, that in our case is "db_scooters_dev". You can import it from the file db_scooters_dev.sql included in this project. https://github.com/tcrurav/ReactNodeOAuth2/blob/master/db_scooters_dev.sql


Finally to start enjoying this project.

```
cd bluecity/backend
node server.js

cd bluecity/frontend
npm start
```

Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [React](https://reactjs.org/) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - React package integrating all icons in fontawesome.
* [react-bootstrap](https://react-bootstrap.github.io/) - React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Acknowledgments

* https://www.cluemediator.com/category/reactjs. Excellent tutorial as a basis for learning the basics needed for this project.
* https://bezkoder.com/react-crud-web-api/. Another excellent tutorial to learn about the basics of this project.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://w3path.com/react-google-login-with-example/. Excellent tutorial to understand Google login feature.
* https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines. Guidelines to write properly git commit messages.