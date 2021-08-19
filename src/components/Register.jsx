import React,{useState} from 'react'
import logo from "./nss_logo.png" 
import Nav from "./Nav"
import {db} from "../firebase";   
import {storage} from "../firebase"
import PDF from './PDF';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css"
import firebase from "firebase";

function Register() {
    const [name, setname] = useState("")
    const [sem, setsem] = useState("")
    const [branch, setbranch] = useState("")
    const [dob, setdob] = useState("")
    const [mobile, setmobile] = useState("")
    const [email, setemail] = useState("")
    const [bloodgrp, setbloodgrp] = useState("")
    const [story, setstory] = useState("")
    const [selfie, setselfie] = useState(null)
    const [sign, setsign] = useState(null)

    const [progress_sign, setProgress_sign] = useState(0);
    const [progress_selfie, setProgress_selfie] = useState(0);
    const [status , setStatus] = useState(false);

    function uuidv4() {
        return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 8 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          console.log(v.toString(8))
          return v.toString(8);
        });
      }

    const save = (e) =>{
        e.preventDefault();
        // setStatus(true);

        db.collection("/student").add({
            name: name,
            sem: sem, 
            branch: branch,
            dob: dob,
            mobile: mobile,
            email : email,
            bloodgrp : bloodgrp,
            story : story,
            signUrl : "",
            selfieUrl : "",
            created : firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            uploadPhoto(docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });     
        console.log("data in");   
    }
    const uploadPhoto = (docID) =>{
        var uuid = uuidv4();
        const uploadSign = storage.ref(`sign/${"sign_"+name+"_"+uuid}`).put(sign);
        uploadSign.on(
            "state_changed",
            snapshot => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress_sign(progress);
            },
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("sign")
                .child("sign_"+name+"_"+uuid)
                .getDownloadURL()
                .then(url => {
                    db.collection("/student").doc(docID).update({
                        signUrl : url
                    }).then(() =>{console.log(" sign url in")});
            });
        });
        const uploadSelfie = storage.ref(`selfie/${"selfie_"+name+"_"+uuid}`).put(selfie);
        uploadSelfie.on(
            "state_changed",
            snapshot => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress_selfie(progress);
            },
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("selfie")
                .child("selfie_"+name+"_"+uuid)
                .getDownloadURL()
                .then(url => {
                    db.collection("/student").doc(docID).update({
                        selfieUrl : url
                    }).then(() =>{
                        console.log(" selfie url in")
                        setStatus(true);
                    });
            });
        });
    }
    
    

    return (
    !status?(
        <>
        <div className="container">
        <Nav/>
            <div >
                <h2 className="display-2 display-4 text-center text-white">Registration Form</h2>
            
                <form onSubmit={save} >
                    <div className="form-row ">
                            <div className="col-xl-6   form-group">
                                <label className="form-label" htmlFor="username">Name :-</label>
                                <input type="text" onChange={e => setname(e.target.value)}  className="form-control" name="Name" id="username" placeholder="Name" required/>   
                            </div> 
                            <div className="col-xl-6  form-group">
                                <label className="form-label" htmlFor="email">E-mail :-</label>
                                <input type="email" onChange={e => setemail(e.target.value)}  className="form-control" name="emaiID" id="email" placeholder="Email" required/>
                            </div>  
                    </div>
                        <div className="form-row ">  
                            <div className="col-xl-6  form-group">   
                                <label className="form-label" htmlFor="branch">Branch :-</label>
                                <select type="text" onChange={e => setbranch(e.target.value)}  className="form-control" name="Branch" id="branch" 
                                required>
                                <option value="" selected>Choose Branch</option>
                                <option value="CS">Computer Science</option>
                                <option value="IT">Information Technology</option>
                                <option value="ET&T">Electronics & Telecommunication</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Civil">Civil</option>
                                </select>
                            </div>    
                            <div className="col-xl-6  form-group">      
                                <label className="form-label"  htmlFor="sem">Semester :-</label>
                                <select type="text" onChange={e => setsem(e.target.value)}  className="form-control" name="sem" id="sem" 
                                required>
                                <option value="" selected>Choose Semester</option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                                <option value="5">5th</option>
                                <option value="6">6th</option>
                                <option value="7">7th</option>
                                <option value="8">8th</option>
                                </select>
                            </div>  
                    </div>    
                        <div className="form-row "> 
                            <div className="col-xl-6  form-group">
                                <label className="form-label"  htmlFor="dob">Date of Birth :-</label>
                                <input type="date" onChange={e => setdob(e.target.value)} className="form-control"  name="DOB" id="dob" required/>
                            </div>  
                            <div className="col-xl-6  form-group">   
                                <label className="form-label" htmlFor="BGrp">Blood Group :-</label>
                                <select type="text" onChange={e => setbloodgrp(e.target.value)}  className="form-control" name="BloodGrp" id="BGrp" 
                                    required>
                                    <option value="" selected>Choose Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    </select>
                            </div>        
                        </div>                                      
                         <div className="form-row">
                                <div className="col-xl-6 form-group ">
                                    <label className="form-label" htmlFor="Mob">Mobile No :-</label>
                                    <input type="tel" onChange={e => setmobile(e.target.value)} className="form-control" name="contact" id="Mob"  pattern="[0-9]{10}"placeholder="xxxxxxxxxx" required/>
                                </div>
                                <div className="col-xl-6 form-group ">
                                    <label className="form-label" htmlFor="story" >Why Choose NSS ?</label>
                                    <textarea id="story" onChange={e => setstory(e.target.value)} rows="1" name="story" className="form-control" placeholder="Write Here...."></textarea>
                                </div>
                        </div>
                        <div className="form-row">
                                <div className="col-xl-6 form-group">
                                    <label htmlFor="selfie" className="form-label">Photos (Passport Size) :-</label>
                                    <input className="form-control" onChange={e => setselfie(e.target.files[0])} type="file" id="selfie" name="pics" accept=".jpg, .jpeg, .png" required/>
                                    <progress value={progress_selfie} max="100" /> 
                                    {/* <p>{progress_selfie+"%"}</p> */}
                                </div>
                                <div className="col-xl-6 form-group">
                                    <label htmlFor="dsign" className="form-label">Signature :-</label>
                                    <input className="form-control" onChange={e => setsign(e.target.files[0])} type="file" id="dsign" name="Signature" accept=".jpg, .jpeg, .png" required/>
                                    <progress value={progress_sign} max="100" /> 
                                    {/* <p className="progess">{progress_sign+"%"}</p> */}
                                </div>
                        </div> 
                        <div className="form-col text-center">
                            <input type="submit" className="btn btn-primary" value="Submit"/>
                        </div>
                </form>
            </div>
        </div>
        
    </>):(
    <PDF name={name} sem={sem} branch={branch}/>));
}

export default Register;
