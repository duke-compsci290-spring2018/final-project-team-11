import React from 'react';
import SimpleSlider from "./SlideShow";
import GameForm from "./GameCreator";

import { db } from '../firebase';


const Home = (props) =>
  <div>
    <h1>Landing Page</h1>
      <SimpleSlider></SimpleSlider>
    <p>{props.username}</p>
  </div>

export default Home;