import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Counter from './Counter';
import Clock from './Clock';

const bodyStyle = {
  fontFamily: 'Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

const h1Style = {
  margin: 0,
};

const mainStyle = {
  padding: '2rem',
};

const sectionStyle = {
  marginBottom: '2rem',
};

const h2Style = {
  color: '#333',
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header style={headerStyle} />
      <br />
      <Welcome style={sectionStyle} />
      <br />
      <AboutMe style={sectionStyle} />
      <br />
      <Contact style={sectionStyle} />
      <br />
      <Counter style={buttonStyle} />
      <br />
      <Clock />
      <br />
      <Footer style={footerStyle}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
