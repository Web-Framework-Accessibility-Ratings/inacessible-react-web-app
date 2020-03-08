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
import ContrastMinimum from './components/1.4.3Contrast(Minimum)';
import ResizeText from './components/1.4.4ResizeText';
import ImageOfText from './components/1.4.5ImageOfText';
import ContrastEnhanced from './components/1.4.6Contrast(Enhanced)';
import VisualPresentation from './components/1.4.8VisualPresentation'; 
import NonTextContrast from './components/1.4.11NonTextContrast';
import TextSpacing from './components/1.4.12TextSpacing';
import Keyboard from './components/2.1.1Keyboard';
import KeyboardTrap from './components/2.1.2KeyboardTrap';
import ShortCut from './components/2.1.4ShortCut';
import TimeAdjustable from './components/2.2.1TimeAdjustable';
import PauseStopHide from './components/2.2.2PauseStopHide';
import ThreeFlashes from './components/2.3.1ThreeFlashes';
import BypassBlock from './components/2.4.1BypassBlock';

import FocusOrder from './components/2.4.3FocusOrder';
import LinkPurpose from './components/2.4.4LinkPurpose';
import HeadingsLabels from './components/2.4.6HeadingsLabels';
import LabelInName from './components/2.5.3LabelinName';
import PageLang from './components/3.1.1PageLang';
import PartLang from './components/3.1.2PartLang';
import OnInput from './components/3.2.2OnInput';
import ConsistentNav from './components/3.2.3ConsistentNavigation';
import ConsistentIdentification from './components/3.2.4ConsistentIdentification';
import ErrorId from './components/3.3.1ErrorIdentification';
import LabelsOrInstructions from './components/3.3.2LabelsOrInstructions';
import Parsing from './components/4.1.1Parsing';
import Status from './components/4.1.3Status';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import NameRoleValue from './components/4.1.2NameRoleValue';

const panelStyle = {
  width: '19%',
  float: 'left',
  paddingRight: '5dpx',
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

const flexible = {
  display: 'flex',
  flexDirection: 'column'
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
                <img src={logo} className="App-logo" alt="React Logo" style={imageStyle} />
                <hr/>
                <div role='navigation' id='links' style={flexible}>
                  <Link style={linkStyle} to='/'>Home</Link><br/>
                  <Link style={linkStyle} to='/imageNoAlt'>Image without alt-text</Link><br/>
                  <Link style={linkStyle} to='/infoRelationships'>Information without Roles</Link><br/>
                  <Link style={linkStyle} to='/meaningfulSequence'>Whitespaced table</Link><br/>
                  <Link style={linkStyle} to='/orientation'>Lock Orientation</Link><br/>
                  <Link style={linkStyle} to='/inputPurpose'>Incorrect Input Purpose</Link><br/>
                  <Link style={linkStyle} to='/identifyPurpose'>No Purpose on Elements</Link><br/>
                  <Link style={linkStyle} to='/useOfColor'>No Use of Color</Link><br/>
                  <Link style={linkStyle} to='/noAudioControl'>No Audio Control</Link><br/>
                  <Link style={linkStyle} to='/insufficentContrast'>Insufficent Contrast</Link><br/>
                  <Link style={linkStyle} to='/resizeText'>No Resizing Text</Link><br/>
                  <Link style={linkStyle} to='/imageOfText'>Image of Text</Link><br/>
                  <Link style={linkStyle} to='/contrastEnhanced'>Enhanced Contrast</Link><br/>
                  <Link style={linkStyle} to='/visualPresentation'>Visual Presentation</Link><br/>
                  <Link style={linkStyle} to='/nonTextContrast'>Non Text Contrast</Link><br/>
                  <Link style={linkStyle} to='/textSpacing'>Text Spacing</Link><br/>
                  <Link style={linkStyle} to='/keyboard'>Keyboard</Link><br/>
                  <Link style={linkStyle} to='/keyboardTrap'>Keyboard Trap</Link><br/>
                  <Link style={linkStyle} to='/shortcut'>Shortcut</Link><br/>
                  <Link style={linkStyle} to='/timeAdjustable'>Time Adjustable</Link><br/>
                  <Link style={linkStyle} to='/pauseStopHide'>Pause Stop Hide</Link><br/>
                  <Link style={linkStyle} to='/threeFlashes'>Three Flashes</Link><br/>
                  <Link style={linkStyle} to='/bypassBlock'>Bypass Block</Link><br/>
                  <Link style={linkStyle} to='/focusOrder'>Focus Order</Link><br/>
                  <Link style={linkStyle} to='/linkPurpose'>Link Purpose</Link><br/>
                  <Link style={linkStyle} to='/headingsLabels'>Headings and Labels</Link><br/>
                  <Link style={linkStyle} to='/labelInName'>Label in name</Link><br/>
                  <Link style={linkStyle} to='/pageLang'>Page Language</Link><br/>
                  <Link style={linkStyle} to='/partLang'>Part Language</Link><br/>
                  <Link style={linkStyle} to='/onInput'>On Input</Link><br/>
                  <Link style={linkStyle} to='/consistentNav'>Consistitent Navigation</Link><br/>
                  <Link style={linkStyle} to='/consistentId'>Consistent Identification</Link><br/>
                  <Link style={linkStyle} to='/errorID'>Error Identification</Link><br/>
                  <Link style={linkStyle} to='/labelsOrInstructions'>Labels or Instructions</Link><br/>
                  <Link style={linkStyle} to='/parsing'>Parsing</Link><br/>
                  <Link style={linkStyle} to='/nameRoleValue'>Name Role Value</Link><br/>
                  <Link style={linkStyle} to='/status'>Status</Link><br/>
                </div>
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
                  <Route path='/insufficentContrast'>
                    <ContrastMinimum/>
                  </Route>
                  <Route path='/resizeText'>
                    <ResizeText/>
                  </Route>
                  <Route path='/imageOfText'>
                    <ImageOfText/>
                  </Route>
                  <Route path='/contrastEnhanced'>
                    <ContrastEnhanced/>
                  </Route>
                  <Route path='/visualPresentation'>
                    <VisualPresentation/>
                  </Route>
                  <Route path='/nonTextContrast'>
                    <NonTextContrast/>
                  </Route>
                  <Route path='/textSpacing'>
                    <TextSpacing/>
                  </Route>
                  <Route path='/keyboard'>
                    <Keyboard/>
                  </Route>
                  <Route path='/keyboardTrap'>
                    <KeyboardTrap/>
                  </Route>
                  <Route path='/shortcut'>
                    <ShortCut/>
                  </Route>
                  <Route path='/timeAdjustable'>
                    <TimeAdjustable/>
                  </Route>
                  <Route path='/pauseStopHide'>
                    <PauseStopHide/>
                  </Route>
                  <Route path='/threeFlashes'>
                    <ThreeFlashes/>
                  </Route>
                  <Route path='/bypassBlock'>
                    <BypassBlock/>
                  </Route>
                  <Route path='/focusOrder'>
                    <FocusOrder/>
                  </Route>
                  <Route path='/linkPurpose'>
                    <LinkPurpose/>
                  </Route>
                  <Route path='/headingsLabels'>
                    <HeadingsLabels/>
                  </Route>
                  <Route path='/labelInName'>
                    <LabelInName/>
                  </Route>
                  <Route path='/pageLang'>
                    <PageLang/>
                  </Route>
                  <Route path='/partLang'>
                    <PartLang/>
                  </Route>
                  <Route path='/onInput'>
                    <OnInput/>
                  </Route>
                  <Route path='/consistentNav'>
                    <ConsistentNav/>
                  </Route>
                  <Route path='/consistentId'>
                    <ConsistentIdentification/>
                  </Route>
                  <Route path='/errorID'>
                    <ErrorId/>
                  </Route>
                  <Route path='/labelsOrInstructions'>
                    <LabelsOrInstructions/>
                  </Route>
                  <Route path='/parsing'>
                    <Parsing/>
                  </Route>
                  <Route path='/nameRoleValue'>
                    <NameRoleValue/>
                  </Route>
                  <Route path='/status'>
                    <Status/>
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
