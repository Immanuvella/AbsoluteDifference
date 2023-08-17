import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'; // Import Bootstrap Carousel component
import image1 from "./components/images/AdobeStock_232757497-2048x1152.jpeg";
import image2 from './components/images/img1.jpg';
import image3 from './components/images/img2.jpg';
import image4 from './components/images/courses-icon-27.jpg';
import image5 from './components/images/OIP (2).jpg';
import image6 from './components/images/OIP (3).jpg';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import './App.css';

const App = () => {

 return (

  <div className="container">
<Header/>
   {/* <h1>User Dashboard</h1> */}

   <div id="imageCarousel" className="carousel slide" data-ride="carousel">

   <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>

   </div>
<br></br><br></br><br></br>
   <div className="button-container mt-2">

    <div className="hoverable-button">

     <img

      //src="https://via.placeholder.com/150x150?"
      src={image4}

      alt=""

     />

     <div className="hover-content">

      <h3>Courses</h3>

      

     </div>

    </div>

    <div className="hoverable-button">

     <img

     // src="https://via.placeholder.com/150x150?"
     src={image5}

      alt=""

     />

     <div className="hover-content">

      <h3>Profile</h3>


     </div>

    </div>

    <div className="hoverable-button">

     <img

src={image6}

      alt=""

     />

     <div className="hover-content">

      <h3>  Change Password</h3>
     </div>

    </div>

   </div>
   <br></br><br></br><br></br>
<Footer/>
  </div>

 );

};

export default App;