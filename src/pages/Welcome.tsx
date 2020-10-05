import React, { Component } from 'react';
import './Welcome.css';
import './Home.tsx';
import { Link } from 'react-router-dom';

class Welcome extends Component {

  state = {
    user: '',
    pass: '',
  
  };
 
  handleChange = (event: { target: any; }) => {
    const input = event.target;
    const value = input.value;
 
    this.setState({ [input.name]: value });
  };
 
  handleFormSubmit = () => {

    const { user } = this.state;
   
    localStorage.setItem('user', user);
    console.log(user);

  };

  render() {

  
  return (
    <div className="background" >
    <div className="container">
    <form onSubmit={this.handleFormSubmit}>
    <div className="header">Login</div>
    <div className="content">
        
    <div className="form">
    <div className="form-group">
    <label className="username">Username</label>
     <input type="text" name="user" value={this.state.user} onChange={this.handleChange}/>
     </div>
     <br></br>
     <div className="form-group">
     <label className="password">Password</label>
     <input type="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
     </div>
     </div>
     </div>
     <div className="footer">
      <button type="submit" className="btn" onClick={this.handleFormSubmit}>
      <Link to="/home" type="submit" className="btn">Sign up</Link></button>
      </div>
    </form>
    </div>
    </div>
    
  )
}

}

export default Welcome;

