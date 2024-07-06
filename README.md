# Smart-Brain App

> A face detection web application created with React using the [Clarifai API - Face Detection Model](https://www.clarifai.com/models/ai-face-detection).

- **Live demo of the application can be found**: [here](https://alindabyamukama.github.io/smart-brain-frontend/)
- **Backend Smart-Brain-API Repository**: [here](https://github.com/alindaByamukama/smart-brain-api)

This is the front-end of the Capstone (final) project in the [Zero to Mastery: The Complete Web Developer in 2022](https://zerotomastery.io/courses/coding-bootcamp/#Curriculum). The back-end server and database are integrated and linked.

## How to run this app

1. **Clone the repo**:
    ```bash
    git clone https://github.com/yourusername/smart-brain-frontend.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd smart-brain-frontend
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Create a `.env` file in the root directory and add your environment variables**:
    ```
    REACT_APP_BACKEND_URL=https://your-backend-url
    ```
5. **Run the app**:
    ```bash
    npm start
    ```

**Note**: Ensure the backend URL in the `.env` file is correct.

## Features

- [x] User can input an image URL, click the detect button, and the API displays a blue-lined box around the face detected in the image.
- [x] User inputs (image URL) are displayed below the input area.
- [x] User can create a free account with the registration form available.
- [x] User can sign into their account.

---

## Project Resources

### Face Detection model 
- [Clarifai Face Detection Model](https://www.clarifai.com/models/face-detection)

### How the API was used in this particular project

- [Clarifai JavaScript SDK Basic Use](https://github.com/Clarifai/clarifai-javascript#basic-use)

### Clarifai Model info

- [Clarifai JavaScript SDK Index](https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js)

### Clarifai API Models

- [Clarifai Model Gallery](https://www.clarifai.com/model-gallery)

### Zero to Mastery Instructor: Andrei Neagoie's GitHub Repo for the project front-end

- [Face Recognition Brain Repo](https://github.com/aneagoie/face-recognition-brain/)

### tsparticles Matteo Bruni GitHub repo

- [React implementation](https://github.com/matteobruni/tsparticles/blob/main/components/react/README.md)
- [Triangles presets - options](https://github.com/matteobruni/tsparticles/blob/main/presets/triangles/src/options.ts)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
