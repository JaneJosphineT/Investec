import React, { Component } from 'react';
import { isBrowser, isAndroid, isIOS, isEmulator, isMacOs, isWindows } from "react-device-detect";
import './Backgroundcheck.css';
import '../pages/Welcome.tsx';
import { Link } from 'react-router-dom';

export default class Backgroundcheck extends Component {

    renderContent = () => {
        
        if (isWindows) {
            return <div className="app"> App runs in Windows
            <br></br>
            <button type="button">
            <Link to="/welcome" >Click me </Link></button>
            
            </div>
            
        }
         if (isAndroid) {
            return <div className="app"> App runs in Android
            <br></br>
            <button type="button">
            <Link to="/welcome" >Click me </Link></button>
            
            </div>
        }
         if (isIOS) {
            return <div className="app"> App runs in IOS 
            <br></br>
            <button type="button">
            <Link to="/welcome" >Click me </Link></button>
            
            </div>
        }
         if (isBrowser) {
            return <div className="app"> App runs in Browser 
            <br></br>
            <button type="button">
            <Link to="/welcome" >Click me </Link></button>
            
            </div>
        }
         if (isMacOs) {
            return <div className="app"> App runs in Simulator 
            <br></br>
            <button type="button">
            <Link to="/welcome" >Click me </Link></button>
            
            </div>
        }
         if (isEmulator) {
            return <div className="app"> App runs in Emulator 
            <br></br>
            <button type="button">
            <Link to="/welcome" >Click me </Link></button>
            
            </div>
        }
        else{
        return <div className="app"> App is running 
        <br></br>
            <button type="button">
            <Link to="/welcome" >Click me </Link></button>
            
            </div>
        }
    }
     
    render() {
       
        return this.renderContent();

    }
    
    }

    
