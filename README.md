# Smart-Brain App

Live deployment on GitHub Pages [here](https://alindabyamukama.github.io/smart-brain-frontend/).
<br>
This web application is the front-end application of the Capstone (final) project in the [Zero to Mastery: The Complete Web Developer in 2022](https://zerotomastery.io/courses/coding-bootcamp/#Curriculum). Part two is the back-end server of the project, followed by part three where we create a database for our project.
<br>
A face detection web application created with React using the [Clarifai API - Face Detection Model](https://www.clarifai.com/models/ai-face-detection).

## Features

- [] User can input an image url, click the detect button and the API displays a blue-lined box around the face detected in the image.
- [] User entries (image url) are diplayed below the input area.
- [] User can create a free account with the registration form available.
- [] User can sign into their account.

---

# Project Resources

## Face Detection model 
- (https://www.clarifai.com/models/face-detection)

## How the API was used in this particular project

- (https://github.com/Clarifai/clarifai-javascript#basic-use)
- NOTE: I had to change the projects package.json 'react-scripts' to '^4.0.3' and run 'npm install', in order to get the Clarifai API to work according to this particular implementation.
- [More info on the above ...](https://webpack.js.org/migrate/5/#run-a-single-build-and-follow-advice)

## A list of the Clarifai Model info

- (https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js)

## A list of all the Clarifai API Models

- (https://www.clarifai.com/model-gallery)

## Andrei Neagoie GitHub Repo for the project front-end

- (https://github.com/aneagoie/face-recognition-brain/blob/master/package.json)

## tsparticles Matteo Bruni GitHub repo
>> ### react implementation
- (https://github.com/matteobruni/tsparticles/blob/main/components/react/README.md)
>> ### triangles_presets - options
- (https://github.com/matteobruni/tsparticles/blob/main/presets/triangles/src/options.ts)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).