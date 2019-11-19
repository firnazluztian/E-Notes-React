import React from 'react';

const NavList = props => {
  return (
    <div>
      <li class={'nav-item ' + props.isActive}>
        <a class="nav-link" href={props.link}>
          {props.name} <span class="sr-only">(current)</span>
        </a>
      </li>
    </div>
  );
};

class Navbar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoggedIn: false,
      username: "User1"
    };
    this.checkUserLogin = this.checkUserLogin.bind(this)
  }
  checkUserLogin() {
    this.setState(prevState => {
      return {
        isLoggedIn : !prevState.isLoggedIn
      }
    })
  }
  render () {
    let text = this.state.isLoggedIn ? "Hi " + this.state.username + "| LOGOUT" : "LOGIN"
    let btnState = this.state.isLoggedIn ? "btn-success" : "btn-outline-success"
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="index.html">
            <img
              src="https://static.thenounproject.com/png/105260-200.png"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
              style={{marginRight: 10 + 'px'}}
            />
            {this.props.navbarTitle}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <NavList
                name="Home"
                isActive="active"
                link="index.html"
              />
              <NavList
                name="About me"
                isActive=""
                link="https://firnazluztian.github.io/"
              />
              <NavList name="Contact me" isActive="" link="contactme.html" />
            </ul>
            <button onClick={this.checkUserLogin} class={"btn my-2 my-sm-0 " + btnState} type="submit">
              {text}
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
