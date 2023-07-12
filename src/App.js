import React from 'react';
import './App.css';
import AppHeader from './app-header';
import AboutMe from './about-me';
import ExpSummary from './exp-summary';
import ProfSummary from './prof-summary';
import TechSummary from './tech-summary';
import Contact from './contact';
import AppFooter from './app-footer';

import { connect } from 'react-redux';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      classname:"sideiconcls",
      shownewhdr:false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollUp = this.handleScrollUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      let scrollTop = window.scrollY ;
      let itemTranslate = Math.round(scrollTop/3 );
      (itemTranslate > 40)? this.setState({classname:"sideiconcls new-sideiconcls"}): this.setState({classname:"sideiconcls"})
  }

  handleScrollUp(event){
    setTimeout(
      ()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth' })},
    200);
  }

  render (){
    return (
      <>
        <div className="App">
          <AppHeader />
          <AboutMe />
          <ExpSummary />
          <TechSummary />
          <ProfSummary />
          <Contact />
          <div className={this.state.classname}> 
            <KeyboardArrowUpIcon className="upicon" onClick={this.handleScrollUp}/>
          </div>
          <AppFooter />
        </div>
      </>
    );
  }
}

const mpaStateToProps = (state)=>{
  return { 
    showdialog: state
  }
}

export default connect(mpaStateToProps)(App);
