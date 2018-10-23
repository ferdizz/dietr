[![Build Status](https://travis-ci.org/ferdizz/dietr.svg?branch=master)](https://travis-ci.org/ferdizz/dietr)
# Dietr
Dietr is a simple nutrition logger/meal diary. Created using the [MERN-stack](http://mern.io/). 

**Note:** this project is far from done.

## Install

To install and run this project locally on your own computer, follow the steps below.

**Important:** This project requires [Node.js](https://nodejs.org/en/), [MongoDB](https://docs.mongodb.com/manual/installation/#mongodb-community-edition) and [Docker](https://docs.docker.com/compose/install/) installed on your computer. 

- Download / clone the project

    ```
    git clone https://github.com/ferdizz/dietr.git
    cd dietr
    ```
    
- Run the setup script to setup mongo-sync and pull remote database

    ```
    ./setup
    ```
    
- Install node modules & dependencies

    ```
    cd client && npm install && cd ../server && npm install
    ```

- Start the server

    ```
    npm start
    ```

- Open a new terminal window and start the client

    ```
    cd dietr/client && npm start
    ```

<!---
## Usecases (work in progress)

### Add a recipe (e.g. homemade pizza)
1. Select "Create new recipe"
2. Enter title (and description)
3. Add ingredients:
    1. Select ingredient
    2. Enter amount
4. Add serving sizes:
    1. Choose serving type
    2. Set amount per serving
5. Submit recipe

### Add a food (e.g onion)
1. Select "Add new food"
2. Enter title (and description?)
3. Enter amount of the contained nutrients
4. Add serving sizes (total size required)
5. Submit food

### Add a meal (e.g. a slice of pizza)
1. Search for desired recipe / food
2. (if not found, add new recipe / food)
3. Change time and date (optional)
4. Select serving type
5. Select number of servings eaten
6. Submit meal
--->
