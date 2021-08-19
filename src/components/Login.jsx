import "./Login.css"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Nav from "./Nav"



export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/stu_reg")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <div className="container">
    <Nav/>
    <Container
      className="width "
      style={{ minHeight: "50vh" }}>
      <div className="info row justify-content-md-center border border-danger rounded m-5 p-5 container-fluid">
      
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <label className="form-label mt-5">Email</label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="form-group mb-2">
              <label className="form-label mt-2">Password</label>
              <Form.Control type="password" className="mb-5" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 btn btn-primary form-col" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      
      </div>
      </Container>
      
      </div>
    </>
  )
}
//<div className="col-xl-6  form-group">   
//<label className="form-label" htmlFor="branch">Branch :-</label>
//<select type="text" onChange={e => setbranch(e.target.value)}  className="form-control" name="Branch" id="branch" 
//required>