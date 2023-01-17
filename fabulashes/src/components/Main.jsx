import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import LookBook  from './LookBook';
import Gallery from './Gallery';
import Appointment from './Appointment';
import Nav from './Nav';

import Carousel3d from "../components/example/Carousel3d";
import CarouselCard from "../components/example/CarouselCard";
import Carousel1 from "../components/example/images/gallery.png";
import Carousel2 from "../components/example/images/types.png";
import Carousel3 from "../components/example/images/eyelash.png";
import Carousel4 from "../components/example/images/volume.png";

function Main(props) {
    return (
        <div className='main'>
            <Routes>
                <Route exact path='about' element={<About/>}/>
                <Route exact path='lookbook' element={<LookBook/>}/>
                <Route exact path='gallery' element={<Gallery/>}/>
                <Route exact path='appointment' element={<Appointment/>}/>
                <Route exact path='nav' element={<Nav/>}/>
            </Routes>
            <div className='space'></div>
            <div className='home'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            background: "#a12051",
            //   "radial-gradient(47.45% 302.83% at 97.45% 85.92%, rgba(89, 76, 244, 0.48) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(41.07% 57.4% at 8.28% 4.34%, rgba(76, 103, 244, 0.61) 0%, rgba(76, 103, 244, 0.02) 100%), rgb(21, 15, 44)",
           
        }}
          >
            <div style={{ width: 1100, height: "65vh" }}>
          <Carousel3d
            cards={[
              {
                key: 1,
                content: <CarouselCard title="Volume Lash Extensions" image={Carousel1} />,
              },
              {
                key: 2,
                content: <CarouselCard title="Eyelash Extension Types" image={Carousel2} />,
              },
              {
                key: 3,
                content: (
                  <CarouselCard title="Effects and Shapes" image={Carousel3} />
                ),
              },
              {
                key: 4,
                content: (
                    <CarouselCard title="Eyelash Lengths" image={Carousel4} />
                  ),
                }
            ]}
            offset={2}
          />
        </div> 
        </div>
        </div>
    );
}

export default Main;