
// src/App.js
import './App.css';
import ironhackLogoXs from './images/ironhack-logo-xs.png';
import packageLock from './images/package-lock.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <navigator className="Nav-bar">
          <img src={ironhackLogoXs} className="logo" alt="ironhack logo" />
          <img src={packageLock} alt="packageLock" />
        </navigator>
      

    <div className="body">
    <h1 className="title">Say hello to<br></br>ReactJS</h1>
    
    <p className="text">You will learn how to use<br></br>the most popular frontend library,<br></br> and become a super Ninja developer</p>
    <button className="button">Awesome!</button>

    </div>
    </header>

    <div className="bottom-logos">
      <img src={icon1} alt="icon1" />
      <img src={icon2} alt="icon2" />
      <img src={icon3} alt="icon3" />
      <img src={icon4} alt="icon4" />
    </div>

<div className="bottom-container">
    <div className="bottom-text">
    <h2>Declarative</h2>
    <br></br>
      <p>React makes it <br></br>painless to create<br></br>interactive UIs.</p>
      </div>
      <div className="bottom-text">
    <h2>Components</h2>
      <p>Build encapsulated<br></br>components that<br></br>manage their state.</p>
      </div>
      <div className="bottom-text">
    <h2>Single-Way</h2>
      <p>A set of immutable<br></br>values are passed to<br></br>the component's.</p>
      </div>
      <div className="bottom-text">
    <h2>JSX</h2>
      <p>Statically-typed<br></br>designed to run<br></br>interactive UIs.</p>
      </div>
      </div>
    

    </div>
  );
}
export default App;
