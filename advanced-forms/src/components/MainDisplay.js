import SampleSurvey from "./SampleSurvey";
import SensoryPreferences from "./SensoryPreferences";
import Report from "./Report";
import { Switch, Route } from 'react-router-dom';

const MainDisplay = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <div className="mainDisplay">
          <h1>Main Display</h1>
          <p>
            This project is designed to let you stretch your skills as a developer.
            Rather than a step-by-step guide, you will find a specification as if it
            came from a client you might be working for.
          </p>
        </div>
      </Route>
      <Route path='/sample-survey'>
        <SampleSurvey />
      </Route>
      <Route path='/sensory-preferences'>
        <SensoryPreferences />
      </Route>
      <Route path='/report'>
        <Report />
      </Route>
    </Switch>
  );
};

export default MainDisplay;
