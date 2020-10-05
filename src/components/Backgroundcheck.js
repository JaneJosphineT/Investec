import React, { Component } from 'react';

export default class Backgroundcheck extends Component {

    constructor(props) {
        super(props);   
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                alert("Hi");
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

    }
     
      render() {
       
        if( isMobile.any() ) {
            alert('Mobile');
        }
        return (

        <h2>Hi</h2>
          
         
        )
            
      }
    
    }
    
