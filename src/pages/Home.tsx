import React, { Component } from 'react';
import './Home.css';
import './Notify.tsx';
import SwipeableButton from '../components/SwipeableButton'
import { Link } from 'react-router-dom';

class Home extends Component {

   onSuccess =()=> {
    console.log('Yay! Swipe Success');
  }

  render() {

    var user = localStorage.getItem("user");  
    console.log(user);
   
  return (

    <div className="background" >
     
   <span className='arrow'>
   <Link to="/welcome" style={{color:"white"}}>
     <i className=" fa fa-arrow-left" style={{paddingTop:"5%", marginLeft:"4%"}}></i></Link>
     </span>
          
    <label  className="name" >Hi {user}</label>
    <div className="container2">

    <div>
    <label  className="variations">4 variations of a button</label>

    </div>
        
    <div >
    <button type="submit" className="btn1" >
    <Link to="/notify" type="submit"> Press me</Link></button>

    </div>
    <div >
    <button type="submit" className="btn2" >
    <Link to="/notify" type="submit"> Press me</Link></button>

    </div>
    <div >
    <button type="submit" className="btn3" >
    <Link to="/notify" type="submit" style={{color:"white"}}> Press me</Link></button>

    </div>
    <div >
    
    <SwipeableButton onSuccess={this.onSuccess} color='#6ab04c'text='Slide to continue' />
  
    </div>
     
    </div>
    </div>
  
  );
}
}

export default Home;

