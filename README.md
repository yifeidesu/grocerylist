# Coding Challenge: A Web Based Grocery List Tool.

### Application is live on this [link](https://limitless-river-45900.herokuapp.com/items)

## Deployment Instructions
### 0.	Download
Download this repository.

### 1.	Node 
*	Install Node.js if not yet: https://nodejs.org/en/
*	Open a terminal, change directory to root folder of this project. Run `npm install` to install packages.  
*	Run `npm start` to start server.

### 2.	And that's it!
Open browser and go to [http://localhost:3000](http://localhost:3000/items)  


### To Tweak Front-end Side
Now the app’s front-end is running with the artifacts built from the Angular front-end source code. If you do some change to the Angular code in the `/ng-src` folder, the modification will not directly reflect on the screen, because the built artifact will not automatically rebuild with the changed front-end source code.

To tweak the front-end, please follow those steps:
* Open a terminal, change directory to the Angular src folder `/ng-src`
* Install Angular CLI if not yet: `npm install -g @angular/cli`
* Run `ng serve --open`. This will start another server and open `http://localhost:4200`.
Now if you do some change in `/ng-src`, the change will automatically reflect at this address. 

To integrate the front-end change with the whole application:
* Run `ng build` and,
* Restart `http://localhost:3000`'s server. 
This will generate new artifacts in the output folder `/client` and update the application’s front-end side.  

### About database
Following the above steps, now the server is connected to an database for development purpose. So that, if a user creates/edits/delete items with this local-deployed app, the modification will not reflect on the app’s [live website](https://limitless-river-45900.herokuapp.com/items). 

Besides, alternatively, a user can setup a local database environment to serve this application, which takes a few more steps. To do that, please refer to [MongoDB's Docs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) and do the below steps:
* Install MongoDB
* Run mongod.exe
* Run mongo.exe

Then change database URL:
* Open `/grocerylist/.env`
* Change the line of DB_URL as this `DB_URL=mongodb://localhost:27017/dbname`
* Then restart `http://localhost:3000`'s server. Now the application is running with local database.

## Screenshots and comments
* Use the input fields to add items to the list.
* Every item has a title, and optionaly has a note. Note is not showing in the list.
* This page list all items at the right-hand side.
* Purchased items have lower opacity, looking differently from unpurchased ones.
![dashboard](https://user-images.githubusercontent.com/23082500/42802348-aa1c389a-8970-11e8-9080-fb05b9f0df78.png)

* Click an item in the list to open its detail view.
* The detail view displays both the item's title and notes.
* Click the Delete button to delete current item.
* Click the Delete button will get a confirm dialog.
* Click the Edit button will navigate user to the edit forms.
* In detail view, when item is purchased, it will has a label of Item purchased; while when not purchased, it has a label of Item to purchase. 

![detail](https://user-images.githubusercontent.com/23082500/42802349-aa2dd014-8970-11e8-9b69-d37bfeb796e2.png)

* Click the Save/Cancel button to save/cancel the edit.
* Click the Purchased checkbox to toggle item as purchased/unpurchased.
![edit](https://user-images.githubusercontent.com/23082500/42802351-aa3b77be-8970-11e8-8101-e593609938ed.png)

