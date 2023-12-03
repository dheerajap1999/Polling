
# Polling System

## Problem Statement

- We need have created an API where anyone can create questions with options and also add votes to it.
- This is an complete open application,

## Features
- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question 
- Delete an option 
- View a question with it’s options and all the votes given to it

## Router ()

### ( /questions/createTo )

- create a question

### (/questions/:id/options/create)
 - To create an options for the particular questions 

### (/questions/:id/delete)

- To delete a question

### (/options/:id/delete)

- To deleta an options

### (/options/:id/add_vote)

- To add vote an options

### (/questions/:id)

- View a question with it’s options and all the votes given to it


## Instructions

- Use Node js to build api based polling system.
- Use MongoDB to store data.
- library which is been used (Dotenv, Express, Mongoose, Nodemon)
- Test the API thoroughly to ensure all features are working correctly.

## How to run the project

### Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|MONGO_DB_URL                   | MongoDB String for connections      | "mongodb+srv://root:root@cluster0.pbwxl9n.mongodb.net/PollingDB?retryWrites=true&w=majority"                                          |
|Port                           |Were project is hosted               |9000

### Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


### Getting started
- Clone the repository
```
git clone  https://github.com/dheerajap1999/Polling.git
```
- Install dependencies
```
cd Polling
npm install
```
- Build and run the project
```
npm start
```
Navigate to http://localhost:9000

