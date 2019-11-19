import React from 'react';
import faker from 'faker';

const ImgContainer = props => {
  return (
    <div>
      <img alt={props.alt} src={props.src} />
    </div>
  );
};

const TextContainer = props => {
  return (
    <div
      className="container-fluid box"
      id="parent"
      style={{textAlign: 'center'}}
    >
      <div className="container box" id="child">
        <h1>{props.h1}</h1>
        <h5>{props.h5}</h5>
        <p>{props.p}</p>
      </div>
    </div>
  );
};

const SectionLeft = props => {
  return (
    <div
      className="container-fluid"
      id="parent"
      style={{backgroundColor: props.bgcolor}}
    >
      <div className="container section" id="child">
        <div class="row">
          <div class="col-sm">
            <TextContainer h1={props.h1} h5={props.h5} p={props.p} />
          </div>
          <div class="col-sm">
            <ImgContainer src={props.src} alt={props.alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionRight = props => {
  return (
    <div
      className="container-fluid"
      id="parent"
      style={{backgroundColor: props.bgcolor}}
    >
      <div className="container section" id="child">
        <div class="row">
          <div class="col-sm">
            <ImgContainer src={props.src} alt={props.alt} />
          </div>
          <div class="col-sm">
            <TextContainer h1={props.h1} h5={props.h5} p={props.p} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionMid = props => {
  return (
    <div
      className="container-fluid"
      style={{textAlign: 'center', backgroundColor: props.bgcolor, padding: 2+'em'}}
    >
      <div className="container">
        <TextContainer h1={props.h1} h5={props.h5} p={props.p} />
        <button className="btn btn-primary">{props.btnName}</button>
      </div>
    </div>
  );
};

const MainContent = props => {
  return (
    <div>
      <SectionLeft
        bgcolor="lightgrey"
        src="/img/sec1.png" 
        alt=""
        h1="Simple and Fast"
        h5={faker.lorem.sentence ()}
        p={faker.lorem.paragraph ()}
      />
      <SectionRight
        bgcolor=""
        src="https://cw-production-assetsbucket-8j84s7jns7p2.s3.amazonaws.com/media/blog-images/responsive-web-design-caktus.gif?rev=d5ba3501"
        alt=""
        h1="Responsive"
        h5={faker.lorem.sentence ()}
        p={faker.lorem.paragraph ()}
      />
      <SectionMid
        bgcolor="lightgrey"
        h1="Sign up and try it out now"
        h5={faker.lorem.sentence ()}
        p={faker.lorem.paragraph ()}
        btnName="Sign me up now"
      />
    </div>
  );
};

export default MainContent;
