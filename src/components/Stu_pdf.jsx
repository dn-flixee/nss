import React, { Component } from 'react';
import PDF from './PDF';
import db from "../firebase";



class Post extends Component {
      

    state = {
        name: '',
        sem: '',
        dept: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.name || !this.state.sem){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
        db.collection("/student").add({
            name: this.state.name,
            sem: this.state.sem, 
            dept: this.state.dept} );
    }
    //onChange={this.onChange('dept')}
    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                        <div className="row">
                        <div className="col-md-12">
                        <div className="well well-sm">
                            <form className="form-horizontal" method="post">
                                <fieldset>
                                    <legend className="text-center header">Fill form</legend>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                <input onChange={this.onChange('name')} name="name" type="text" placeholder="Name" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                <input onChange={this.onChange('dept')} name="dept" type="text" placeholder="dept" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <textarea onChange={this.onChange('sem')} className="form-control" name="sem" placeholder="sem" rows="7"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                        </div>
                                </fieldset>
                            </form>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>) : (
                        <PDF name={this.state.name} sem={this.state.sem} dept={this.state.dept} />
                    )
                }
            </>
        );
    }
}

export default Post;