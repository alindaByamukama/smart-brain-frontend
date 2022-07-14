import React, { Component } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import 'tachyons'
import './App.css'
import SignIn from './components/SignIn/SignIn'

const app = new Clarifai.App({
  apiKey: 'fc4c8606d6764cc19fb5b8455675353b'
 });

class App extends Component {
  constructor() {
    super() 
      this.state = {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin'
      }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onBtnSubmit = () => {
    this.setState({imageUrl: this.state.input})
      app.models
        .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log('ALERT', err))
  }

  render() {
    const particlesInit = async (main) => {
      // console.log(main);
      await loadFull(main);
    }

    const particlesLoaded = async (container) => {
      // console.log(container);
      await container
    }

    const particlesOptions = {
      background: {
      color: "none",
      },
      particles: {
          links: {
              distance: 125,
              enable: true,
              triangles: {
                  enable: true,
                  opacity: 0.05,
              },
          },
          move: {
              enable: true,
              speed: 1,
          },
          size: {
              value: 1,
          },
          shape: {
              type: "circle",
          },
      }
    }
    
    return (
      <div className="App">
        <Particles className='particles' 
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
        <Navigation />
          { this.state.route === 'signin' ?
          < SignIn/> : 
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onBtnSubmit={this.onBtnSubmit} />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> 
          </div>
          }
      </div>
    )
  }
}
export default App;