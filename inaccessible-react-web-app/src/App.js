import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageNoAlt from './components/1.1TextAlternatives';
import InfoRelationships from './components/1.3.1InfoRelationships';
import MeaningfulSequence from './components/1.3.2MeaningfulSequence';
import Orientation from './components/1.3.4Orientation';
import InputPurpose from './components/1.3.5InputPurpose';
import IdentifyPurpose from './components/1.3.6IdentifyPurpose';
import UseOfColor from './components/1.4.1UseOfColor';
import AudioControl from './components/1.4.2AudioControl';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

const panelStyle = {
  width: '19%',
  float: 'left',
  paddingRight: '5dpx'
}

const inaccessibleContentStyle = {
  width: '80%',
  float: 'right'
}

const containerStyle = {
  width: '100%',
  flex: 1,
  flexDirection: 'row'
}

const imageStyle = {
  width: 'auto',
  height: 'auto'
}

const linkStyle = {
  color: '#61DAFB'
}

class App extends React.Component {
  state={
    curComponent: null
  }
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div id='container' style={containerStyle}>
              <div id='sidePanel' style={panelStyle}>
                <img src={logo} className="App-logo" alt="logo" style={imageStyle} />
                <hr/>
                <Link style={linkStyle} to='/'>Home</Link><br/>
                <Link style={linkStyle} to='/imageNoAlt'>Image without alt-text</Link><br/>
                <Link style={linkStyle} to='/infoRelationships'>Information without Roles</Link><br/>
                <Link style={linkStyle} to='/meaningfulSequence'>Whitespaced table</Link><br/>
                <Link style={linkStyle} to='/orientation'>Lock Orientation</Link><br/>
                <Link style={linkStyle} to='/inputPurpose'>Incorrect Input Purpose</Link><br/>
                <Link style={linkStyle} to='/identifyPurpose'>No Purpose on Elements</Link><br/>
                <Link style={linkStyle} to='/useOfColor'>No Use of Color</Link><br/>
                <Link style={linkStyle} to='/noAudioControl'>No Audio Control</Link><br/>
              </div>
              <div id='inaccessibleContent' style={inaccessibleContentStyle}>
                <Switch>
                  <Route path='/imageNoAlt'>
                    <ImageNoAlt/>
                  </Route>
                  <Route path='/infoRelationships'>
                    <InfoRelationships/>
                  </Route>
                  <Route path='/meaningfulSequence'>
                    <MeaningfulSequence/>
                  </Route>
                  <Route path='/orientation'>
                    <Orientation/>
                  </Route>
                  <Route path='/inputPurpose'>
                    <InputPurpose/>
                  </Route>
                  <Route path='/identifyPurpose'>
                    <IdentifyPurpose/>
                  </Route>
                  <Route path='/useOfColor'>
                    <UseOfColor/>
                  </Route>
                  <Route path='/noAudioControl'>
                    <AudioControl/>
                  </Route>
                </Switch>
              </div>
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
