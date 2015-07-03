# Halfsies
Halfies is an MEAN stack web app that keeps track of money owed between two moderately specific people.

## Requirements
* Node
* MongoDB
* Grunt

## Setup
First thing you want to do is install all node packages run:

    npm install
    
You will need two users to use the app. This can done by running something like the following two times with unique usernames:

    node createuser someusername somepassword
  
In order to run the project run:

    node server

To build all front end assets run:

    grunt deploy

To lint and test run:

    grunt test