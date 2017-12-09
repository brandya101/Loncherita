import React from 'react'
import {Jumbotron, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button, Glyphicon,InputGroup,Form,Col} from 'react-bootstrap'
import createReactClass from 'create-react-class'
import './contact.css';


class Contact extends React.Component{
  state = {
    comment:"",
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    console.log(this.state.comment);
    this.setState({
      comment:"",
    });
  };

  render(){
    return(
      <div className="contact">
      <Jumbotron>
      <h1>Contact Us!</h1>
      <form> 
          <h2>Rate Loncherita!</h2>
        <FormGroup>
          <Radio name="radioGroup" inline>
            1
          </Radio>
          {' '}
          <Radio name="radioGroup" inline>
            2
          </Radio>
          {' '}
          <Radio name="radioGroup" inline>
            3
          </Radio>
          <Radio name="radioGroup" inline>
            4
          </Radio>
          <Radio name="radioGroup" inline>
            5
          </Radio>
        </FormGroup>
        <br>
        </br>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="compliment">compliment</option>
            <option value="complain">complain</option>
            <option value="others">others</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Leave us a comment!</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Write your comment..." name="comment" value={this.state.comment} onChange={this.handleInputChange}/>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Thank you for your feedback</ControlLabel>
          <FormControl.Static>
            loncherita@loncherita.com
          </FormControl.Static>
        </FormGroup>

        <Button type="submit" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </form>

      <br />
      <br />
      <br />


      </Jumbotron>
      </div>
    )
  }
}


export default Contact;