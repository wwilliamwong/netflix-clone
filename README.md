# [Netflix Clone](https://netflix-clone-83631.web.app/)

This project aims to build a clone of Netflix's user interface, complete with a login screen, user authentication, a home screen, and various other components. It was developed using a variety of technologies, including ReactJS, Firebase, TMDB API, and Redux.

<br/>

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
- **TMDB API**: An API used to access a large database of movie and TV show data.
- **Redux**: A JavaScript library used for managing and centralizing application state.

<br/>

## Setup

Before starting, make sure you have Node.js and npm installed on your system. If not, visit the official [Node.js website](https://nodejs.org/en) and download the installer based on your OS.

To setup the project, follow these steps:

1. Clone this repository to your local machine.
2. Inside the cloned repository, install the required npm packages using `npm install`.
3. Add your own Firebase and TMDB API configurations to the `.env` file.
4. Use `npm start` to start the local development server.

<br/>

## Features

- User authentication (Login/Signup)
- Movie and TV show listings
- Navigation menu
- User profile

<br/>

## Deploying the Build

1. Install Firebase CLI with `npm install -g firebase-tools`.
2. Login to Firebase with your Google account using `firebase login`.
3. Initialize your project using `firebase init`.
4. Choose the 'Hosting' option and select 'Use an existing project'.
5. Choose your Firebase project from the list.
6. Set 'build' as the public directory.
7. Choose 'Yes' for all the remaining options.
8. Deploy your website using `firebase deploy`.
