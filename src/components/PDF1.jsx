import React from 'react';
import ReactToPdf from "react-to-pdf";
import './style.css';
import banner from './banner.png';

const ref = React.createRef();


function PDF  (props) { 


  return (
    <>
      
      <div className="Post" ref={ref}>

        <img src={banner} className="banner"/>
        <p class="nss_text">National Service Scheme</p>
        <p class="ssipmt_text">Shri Shankaracharya Institute of Professional Management and Technology</p>
        <p class="certi_text">Provisional Certificate</p>
        <p class="context">This is to certify that <b>{props.name}</b> of Semester {props.sem} , {props.branch} Dept is enrolled as member for NSS with reference no. 120 in SSIPMT, Raipur.</p>
        <p class="techer_name">Mr. Anand Tamrakar​ <br/>(Asst. Prof. , CSE)</p>
        <p class="techer_incharge">Techer In-Charge</p>
        <p class="auto_text">*This is  computer generated. (09-June-21)</p>
        <div class="bottom_rec"></div>
      </div>  
      <ReactToPdf targetRef={ref} filename="yo.pdf">
        {({toPdf}) => <button onClick={toPdf}>Generate pdf</button>}
      </ReactToPdf>
       
    </>
  );
}

export default PDF;