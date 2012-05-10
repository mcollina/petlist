
Petlist APP
============

## Requirements

This web application has only two main requirements:
* MySql: http://www.mysql.com/
* Node.js: http://nodejs.org/

In order to install mysql you should type on Ubuntu:

$: sudo apt-get install mysql-server

In order to install node.js you should type:

$: sudo apt-get install build-essentials libssl-dev
$: wget http://nodejs.org/dist/v0.6.15/node-v0.6.15.tar.gz
$: tar xzvf node-v0.6.15.tar.gz
$: cd node-v0.6.15
$: ./configure
$: make
$: sudo make install

## In order to run this application you should:

* Create the Mysql database 'sample' and the table 'pet' (look at the slides)
* type in the app folder:

$: npm install
$: node app

## Running on Heroku

* Signup to (Heroku)[heroku.com]
* Install (Heroku Toolbelt)[https://toolbelt.heroku.com/]
* run `heroku login`
* run `git clone git@github.com:mcollina/petlist.git; cd petlist`
* run `heroku create --stack cedar --buildpack
  http://github.com/heroku/heroku-buildpack-nodejs.git`
* Add the cleardb addons by running `heroku addons:add cleardb:ignite`
* run `heroku config` to know the credentials for the database
* connect to the database using your preferred client and create the pet
  table.
* run `git push heroku master`

Mail me if you have problems running this example: matteo.collina2@unibo.it
