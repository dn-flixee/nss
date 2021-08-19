import React from 'react'
import Nav from "./Nav.jsx"
import logo from "./home_page.png"
import "./Home.css"
import { Link, useHistory } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'
import logo1 from "../img/events/1.png"
import logo2 from "../img/events/2.png"
import logo3 from "../img/events/3.png"

export default function Home() {
    return (
      
        <div className="container">
          <Nav/>
          <div id="car">
            
          <Carousel className="container-fluid">
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={logo1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={logo2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={logo3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item >
          </Carousel>
          </div>
          <section className="container-fluid px-0">
            <div className="row text-center align-items-center content">
                <div className="col-md-12 ">
                  <div className="row justify-content-center">
                    <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                      <p className="lead"> 
                        The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports.
                      </p> 
                    </div> 
                  </div>
                </div> 
              {/*<div className="col-md-4 ml-0 pl-0">
                <div className="row justify-content-end">
                  <img src= {logo} alt= ""  width="" height="" className="img-fluid"/>
                </div>
             </div>*/}
            </div>        
            <div className="col-md-12 ">
                <Link to="/register" className="btn btn-primary w-50 m-3" >Registor</Link>
                  {/* <Link to="/Login" className="btn btn-secondary w-30 m-3" >Login</Link> */}
            </div>
          </section>
        </div>
    )
}
