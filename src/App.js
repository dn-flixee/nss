import React from 'react';
import Post from './components/Stu_pdf.jsx';
import './App.css';
import Register from './components/Register.jsx';
import PDF from './components/PDF.jsx'
import Stu_reg from './components/Stu_reg.jsx';
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoute from "./components/PrivateRoute"
import { AuthProvider } from "./contexts/AuthContext"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
       <AuthProvider>
       <Switch>
       <PrivateRoute exact path="/stu_reg" component={Stu_reg}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/pdf" component={PDF}/>

       </Switch>
       </AuthProvider>
     </Router>
    </div>
  );
}

export default App;
