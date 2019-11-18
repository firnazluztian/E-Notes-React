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
                <h1>E-student Notes</h1>
                <h3>The only app you need for your classes notes taking</h3>
                <p>{faker.lorem.paragraph ()}</p>
                <button
                  style={{marginRight: 1 + 'em'}}
                  type="button"
                  class="btn btn-outline-primary"
                >
                  Sign up
                </button>
                <button type="button" class="btn btn-outline-success">
                  Log in
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
