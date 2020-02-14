import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageNoAlt from './components/1.1TextAlternatives';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

const panelStyle = {
  width: '20%',
  float: 'left'
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
                <Link to='/'>Home</Link>
                <Link to='/imageNoAlt'>Image without alt-text</Link>
              </div>
              <div id='inaccessibleContent' style={inaccessibleContentStyle}>
                <Switch>
                  <Route path='/imageNoAlt'>
                    <ImageNoAlt/>
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
