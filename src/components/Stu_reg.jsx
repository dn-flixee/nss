import React from 'react'
import "./Stu_reg.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import {db} from "../firebase"; 
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {Button} from "react-bootstrap"
import Nav from "./Nav"

function Stu_reg() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
        await logout()
        history.push("/login")
        } catch {
        setError("Failed to log out")
        }
    }

    const [stu_data, setStu_data] = useState([]);

    useEffect(() => {
        db.collection('student').onSnapshot(snapshot =>
          setStu_data(snapshot.docs.map(doc => doc.data()
          ))
        )}, [])

    return (
        <div>
            <div className="container">
                <Nav/>
            <table responsive="md" className="table table-bordered table-hover text-light col align-self-center ">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Branch/Semester</th>
                <th>Blood Group</th>
                <th>Date of Birth</th>
                <th>E-mail</th>
                <th>Selfie</th>
                <th>Sign</th>
                </tr>
            </thead>
            <tbody>
                {   stu_data.map(data=>(
                            <tr>
                                <th>1</th>
                                <th>{data.name}</th>
                                <th>{data.branch} / {data.sem}</th>
                                <th>{data.bloodgrp}</th>
                                <th>{data.dob}</th>
                                <th>{data.email}</th>
                                <th><a href={data.selfieUrl} target="_blank">Selfie</a></th>
                                <th><a href={data.signUrl} target="_blank">Signature</a> </th>
                            </tr>
                        )                        
                    )
                }

            </tbody>
            </table>
        
        </div>
        <div className="row justify-content-center  ">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </div>
        </div>
    );
}

export default Stu_reg
