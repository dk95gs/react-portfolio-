import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Navbar from './components/Shared/Navbar/Navbar'
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import './App.css';
import './pageTransitionEffects/slide.css';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      prevPage : this.getPageNum(this.props.location)
    }
  }
  componentWillReceiveProps(){
      this.setState({
        prevPage: this.getPageNum(this.props.location)
      });
  }
  getPageNum(location) {
    let pathName = location.pathname;
  
    if(pathName === "/"){return 1}
    if(pathName === "/proj"){return 2}
    if(pathName === "/edu"){return 3}
    if(pathName === "/work"){return 4}
    if(pathName === "/skills"){return 5}

  }
  render(){
    const {location} = this.props;
    
    const currentKey = location.pathname.split("/")[1] || "/";
  
    const timeout = {enter: 1000, exit: 500 };
    return (
      <div>
          <Navbar/>
            <TransitionGroup component="div" className="App">
              <CSSTransition key={currentKey} timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
                  <div  className={this.getPageNum(location) - this.state.prevPage  >= 0 ? "left":"right"}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home}/>
                      <Route path="/proj" component={Projects}/>
                      <Route path="/edu" component={Education}/>
                      <Route path="/work" component={Work}/>
                      <Route path="/skills" component={Skills}/>
                    </Switch>
                 </div>
              </CSSTransition>
            </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
