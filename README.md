# Halfsies
Halfies is an MEAN stack web app that keeps track of money owed between two moderately specific people.

## Requirements
* Node >= 0.12.6
* MongoDB >= 3.04
* Redis >= 3.0.3
* Grunt >= 0.4.5

## Setup
First thing you want to do is install all node packages run:

    npm install
    
You will need two users to use the app. This can done by running something like the following two times with unique usernames:

    node createUser someusername somepassword
  
In order to run the project be sure redis is running and then run:

    node server

To build all front end assets run:

    grunt deploy

To lint and test run:

    grunt test