import React, { Component } from 'react';

class GoTopComponent extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="go-top">
              <a href="#" className="go-top-btn">
                  <img src={ process.env.PUBLIC_URL + "/images/btn_prom_up.png"} alt="go Top 버튼"/>
              </a>
          </div>
      </React.Fragment>
    );
  }
}

export default GoTopComponent;