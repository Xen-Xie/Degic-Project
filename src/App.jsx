import './App.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import Presentation from '../Components/Presentation';
import Slider from '../Components/Slider';
import Video from '../Components/Video';
import Time from '../Components/Time';
import BombArea from '../Components/BombArea';
import Blog from '../Components/Blog';
import Footer from '../Components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Presentation />
      <Slider />
      <Video />
      <Time />
      <BombArea/>
      <Blog />
      <Footer />
    </>
  )
}

export default App
