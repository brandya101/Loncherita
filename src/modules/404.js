import React from 'react'
import createReactClass from 'create-react-class'
import {Jumbotron, ProgressBar} from 'react-bootstrap'

const NotFound = () =>
(
 <div>
  <Jumbotron>
  <LoadingBar />
  </Jumbotron>
  </div>
)

const LoadingBar = createReactClass({
  getInitialState() 
  {
    return {
      progress: 0
    };
  },
  render() {
    let bar;
    setTimeout((function() {
      this.setState({ progress: this.state.progress + (0.3 * Math.random())});
    }).bind(this), 10);
    if(this.state.progress <= 66)
    {
        bar = <ProgressBar><ProgressBar style={{width:this.state.progress + "%"}} active bsStyle="danger" /></ProgressBar>;
    }
    else if(this.state.progress <= 99)
    {
        bar = <ProgressBar><ProgressBar style={{width:this.state.progress + "%"}} active bsStyle="warning" /></ProgressBar>;
    }else if(this.state.progress <= 122)
    {
        bar = <ProgressBar><ProgressBar style={{width:this.state.progress + "%"}} active bsStyle="success" /></ProgressBar>;
    }else
    {
        bar = <h1>Error 404 : Page not found</h1>;
    }
    return (
      <div>
        {bar}  
      </div>  
    );
  }
});
export default NotFound;
