import React from 'react';
import faker from 'faker';

function Header () {
  return (
    <div className="container-fluid header" id="parent">
      <div className="container headerbox" id="child">
        <div class="row">
          <div class="col-sm-8 box">
            <img src="https://cdn.hipwallpaper.com/i/32/98/1L45pU.jpg" alt="" />
          </div>
          <div class="col-sm-4" box>
            <div className="box" id="parent">
              <span className="box" id="child">
                <h1>E-Student Notes</h1>
                <h3>The only app that you will need for your classes notes taking</h3>
                <p style={{textAlign:"justify"}}>{faker.lorem.paragraph()}</p>
                <button
                  style={{marginRight: 1 + 'em'}}
                  type="button"
                  class="btn btn-outline-primary"
                >
                  SIGNUP
                </button>
                <button type="button" class="btn btn-outline-success">
                  LOGIN
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
