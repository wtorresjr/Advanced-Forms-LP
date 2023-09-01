import logo from "../src/_assets/logo.png";
import "./App.css";
import NavItems from "./components/NavItems";
import MainDisplay from "./components/MainDisplay";
import sampleSurveyData from '../src/_assets/sample.json';

function App() {
  return (
    <>
      <div className="header">
        <img src={logo} />
        <div id="headerText">
          <h1>Survey Tool</h1>
          <h3>Text</h3>
        </div>
      </div>
      <NavItems />
      <MainDisplay />
      <sub>&copy;2020 a/A Forms, Inc. Sample survey is for illustrative purposes only. All rights reserved.</sub>
    </>
  );
}

export default App;
