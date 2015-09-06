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

##License

(The MIT License)

Copyright (c) 2015 [Troy Blank](mailto:troy@troyblank.com, "Troy Blank")

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.