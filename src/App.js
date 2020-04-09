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
    let arr = location.pathname;
    arr = arr.split("/");
    
    arr = arr.filter(x => x !== "");
    
    return arr.length;
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
                  <div  className={this.getPageNum(location) - this.state.prevPage >= 0 ? "left":"right"}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home}/>
                      <Route path="/edu" component={Education}/>
                      <Route path="/skills" component={Skills}/>
                      <Route path="/proj" component={Projects}/>
                      <Route path="/work" component={Work}/>
                    </Switch>
                 </div>
              </CSSTransition>
            </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
