# GroceryList: A Web Based Grocery List Tool.

## [:zap: Visit Live Site :zap:](https://still-beach-44000.herokuapp.com/items)

## Deployment Instructions
#### 0.	Download
Download this repository.

#### 1.	Node 
*	Install Node.js if not yet: https://nodejs.org/en/
*	Open a terminal, change directory to root folder of this project. Run `npm install` to install packages.  
*	Run `npm start` to start server.

#### 2.	And that's it!
Open browser and go to [http://localhost:3000](http://localhost:3000/items)  

#### To Tweak Front-end Side
Now the app’s front-end is running with the artifacts built from the Angular front-end source code. If you do some change to the Angular code in the `/ng-src` folder, the modification will not directly reflect on the screen, because the built artifact will not automatically rebuild with the changed front-end source code.

To tweak the front-end, please follow those steps:
* Open a terminal, change directory to the Angular src folder `/ng-src`
* Install Angular CLI if not yet: `npm install -g @angular/cli`
* Run `ng serve --open`. This will start another server and open `http://localhost:4200`
Now if you do some change in `/ng-src`, the change will automatically reflect at this address. 

To integrate the front-end change with the whole application:
* Run `ng build` and 
* Restart `http://localhost:3000`'s server. 
This will generate new artifacts in the output folder `/client` and update the application’s front-end side.  

#### About database
Following the above steps, now the server is connected to an database for development purpose. So that, if a user creates/edits/delete items with this local-deployed app, the modification will not reflect on the app’s [live website](https://still-beach-44000.herokuapp.com/items). 

Alternatively, user can setup a local database environment to serve this application, which takes a few more steps:
* Install MongoDB
* Run mongod.exe
* Run mongo.exe
* Change database URL



