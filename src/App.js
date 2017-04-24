import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/* My Components */
import Home from './Home.js';
import Hello from './Hello.js';
import World from './World.js';
import Sidebar from './Sidebar.js';

/* My Styles */
const AppStyle = {
  display: 'flex'
};

const ContentStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '80vw'
};

/* My App */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={AppStyle}>
          <Sidebar>
            <Link to="/"><p>Home</p></Link>
            <Link to="/hello"><p>Hello</p></Link>
            <Link to="/world"><p>World</p></Link>
          </Sidebar>
          <div style={ContentStyle}>
            <Route exact={true} path="/" render={() => (
              <Home />
            )}/>
            <Route path="/hello" component={Hello} />
            <Route path="/world" component={World} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
