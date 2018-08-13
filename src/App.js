import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Board extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        
    }
  }

  componentDidMount() {   
      var t = document.getElementsByClassName("tank")[0];
      var barrel = document.getElementsByClassName("tank-barrel")[0];
      // var interval = setInterval(function(){
      //   var topVal = t.offsetTop;                
      //   if(document.getElementById("Board").clientHeight <= topVal + t.clientHeight + 20){
      //     clearInterval(interval);
      //   }
      //   t.style.top = (topVal + 1) + "px";
      // }, 35);

      var leftAcc = 1;
      var rightAcc = 1;
      var angle = -45;
      
      barrel.style.transform = "rotate(" + angle + "deg)";

      document.onkeydown = function(e)
      {
        e = e || window.event;
       

        if (e.keyCode === 37) {
          // left arrow
          t.style.left = (t.offsetLeft - 2 - (leftAcc/100)) + "px";
          leftAcc++;          
        }
        else if (e.keyCode === 39) {
          // right arrow
          t.style.left = (t.offsetLeft + 2) + (rightAcc/100) + "px";
          rightAcc++;
        } 
        else if (e.keyCode === 38) {
          // up arrow     
          barrel.style.transform = "rotate(" + (angle--) + "deg)";          
        } 
        else if (e.keyCode === 40) {
          // down arrow
          barrel.style.transform = "rotate(" + (angle++) + "deg)";
        }        
      }
      document.onkeyup = function(e)
      {
        leftAcc = rightAcc = 1;
      }


  }

  rotate(elm, angle){
    elm.style.transform = "rotate(" + angle + "deg)";
  }

  render() {   

    return (      
      <div id="Board">
        <div className="tank tank1">
          <div className="tank-top">
            <div className="tank-barrel"></div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">Metadata, scores osv</div>
        <Board />
      </div>
    );
  }
}

export default App;
