# NoteLink - 
## A collaborative platform to catalouge all the study material.
https://notelink-pbl.herokuapp.com/
### Team :-
A-59 | Akash J. Khamkar | @akashjkhamkar

A-35 | Ganesh D. Futane | @gatsby003

A-57 | Karan Kaul

A-03 | Adarsh Rai

# Use :-

* Log the material that you would like to share

* access all the material , shared by other people

* from video lectures to pdfs , anything can be added , as long as the url is working.

* ultimately making the student life easier 

## everything you need at one place !

<br>

# Stack :-
### MERN
* Backend - node with express framework
* Database - mongodb 🌱
* frontend - React ⚛️ with material Ui

# Setup -
### make sure you have node and npm installed.

1. clone the repo
2. install all the dependencies


        $ cd NoteLink
        $ cd frontend
        $ npm install
        $ cd ../backend
        $ npm install
3. setting up .env

    open .env file
    paste your mongodb uri 
    
        MONGODB_URI = YOUR_MONGODB_URI, 

    set the port number for node

        PORT = 3001    
    make sure you add the username:password in URI properly!

4. start the backend server
    
    for production build

        $ cd backend
        $ npm start

    for development

        $ npm run dev 


    now the server should be running on port 3001

    visit the http://localhost:3001/ to get the last build

    visit the http://localhost:3001/api/files for the api

<br>

5. start the frontend development server

        $ cd frontend
        $ npm start  

    react server should start on port 3000
    
    http://localhost:3000/

