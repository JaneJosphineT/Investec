import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notify.css';

class Notify extends Component {

    render() {

        var user = localStorage.getItem("user");  
        console.log(user);

        return (
            <div className="background" >
                 <span className='arrow'>
                 <Link to="/home" style={{color:"white"}}>
                     <i className=" fa fa-arrow-left" style={{paddingTop:"5%", marginLeft:"4%"}}></i>
                     </Link>
                     </span>
                <label  className="name" >Hi {user}</label>
                <div className="container">



                </div>


            </div>

        );

    }

}

export default Notify;