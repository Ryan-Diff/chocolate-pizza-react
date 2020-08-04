import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <section>
      <Header logo="logo.png" facebook="fb-icon.png" twitter="twit-icon.png" google="gp-icon.png" insta="insta-icon.png" flickr="flic-icon.png" pinterest="pint-icon.png" rss="rss-icon.png" mail="mail-icon.png" />

      <span id="divider"></span>
      <Main chocopizza="choco-pizza.png"/>

      </section>
    </div>
  
   );
  }
}

export default App;
