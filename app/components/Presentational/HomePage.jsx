import React from 'react';

import { Button } from './button.jsx';


export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div id="home-landing-wrapper" className="content-container highlight-color">
          <div className="content">
          
            <div className="section">
              <div className="logo-container">
              <img src={this.props.logo} alt="logo" />
              </div>
            </div>
          </div>
          <div className="divider-overlay-tab">
            <a href="#next">
            <i class="fa fa-chevron-down"></i>
            </a>
          </div>
        </div>      

        <div className="content-container" id="next">
          <div className="content">
            THIS IS A TEST SECTION


          </div>
        </div>
      
      
    </div>

    ) 
  };
}
