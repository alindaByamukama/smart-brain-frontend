# Smart-Brain App
>> A face detection web application created with React using the [Clarifai API - Face Detection Model](https://www.clarifai.com/models/ai-face-detection).

Live deployment on GitHub Pages [here](https://alindabyamukama.github.io/smart-brain-frontend/).
<br>
This is the front-end of the Capstone (final) project in the [Zero to Mastery: The Complete Web Developer in 2022](https://zerotomastery.io/courses/coding-bootcamp/#Curriculum). I am still working on the back-end server and database, expect to see them linked here soon.

## How to run this app
1. Clone this repo
2. Change directory to root folder
3. Run npm install
4. Run npm start
5. Add your own API key in the src/App.js file to connect to Clarfai
Note: Check below for where to get the Clarifai API key.

## Features

- [x] User can input an image url, click the detect button and the API displays a blue-lined box around the face detected in the image.
- [x] User inputs (image url) are diplayed below the input area.
- [x] User can create a free account with the registration form available.
- [x] User can sign into their account.

---

## Project Resources

### Face Detection model 
- (https://www.clarifai.com/models/face-detection)

### How the API was used in this particular project

- (https://github.com/Clarifai/clarifai-javascript#basic-use)
- NOTE: I had to change the projects package.json 'react-scripts' to '^4.0.3' and run 'npm install', in order to get the Clarifai API to work according to this particular implementation.
- [More info on the above ...](https://webpack.js.org/migrate/5/#run-a-single-build-and-follow-advice)

### Clarifai Model info

- (https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js)

### Clarifai API Models

- (https://www.clarifai.com/model-gallery)

### Zero to Mastery Instructor: Andrei Neagoie GitHub Repo for the project front-end

- (https://github.com/aneagoie/face-recognition-brain/blob/master/package.json)

### tsparticles Matteo Bruni GitHub repo
>> ### react implementation
- (https://github.com/matteobruni/tsparticles/blob/main/components/react/README.md)
>> ### triangles_presets - options
- (https://github.com/matteobruni/tsparticles/blob/main/presets/triangles/src/options.ts)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
