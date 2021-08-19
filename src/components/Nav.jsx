import React from 'react'
import logo from "./nss_logo.png"
import "./Nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function nav() {

    return (
      
        <div>
            <div className="container-fluid">
            
               
                    <nav className="navbar navbar-expand-xl navbar-dark  sticky-top Hstart">
                        <div className="row">
                        <div className="col-11">
                            <h2 className="navbar-brand "> 
                            <a className="text-center text-white h2"><img src={logo} width="39" height="39" class="d-inline-block align-top" alt="" loading="lazy"/> National Service Scheme </a>
                            </h2>
                        </div>   
                        <div className="col-1">
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#expandme">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                       
                            <div className="collapse navbar-collapse" id="expandme">
                                <div className="navbar-nav ml-auto link ">
                                    <a href="/" className="nav-item nav-link ">Home</a>
                                    <a href="Home" className="nav-item nav-link ">About</a>
                                    <a href="Home" className="nav-item nav-link ">Contact</a>
                                </div>
                            </div>  
                        </div>
                            </div>
                    </nav>        
                   
            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
        </div>
    )
}
