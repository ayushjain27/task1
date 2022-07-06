import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Box from './Components/Box/Box';
import CourseCard from './Components/CourseCard/CourseCard';
import Training from './Components/Training/Training';
import Teams from './Components/Teams/Teams';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Box />
      <CourseCard />
      <Training />
      <Teams />
    </>
  );
}

export default App;
